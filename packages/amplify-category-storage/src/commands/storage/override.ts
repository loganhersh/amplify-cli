/*
    entry code for amplify override root
*/

import { generateOverrideSkeleton, $TSContext, stateManager, pathManager } from 'amplify-cli-core';
import { printer, prompter } from 'amplify-prompts';
import { DynamoDBInputState } from '../../provider-utils/awscloudformation/service-walkthroughs/dynamoDB-input-state';
import { DDBStackTransform } from '../../provider-utils/awscloudformation/cdk-stack-builder/ddb-stack-transform';
import * as path from 'path';
import { categoryName } from '../../constants';

export const name = 'override';

export const run = async (context: $TSContext) => {
  const amplifyMeta = stateManager.getMeta();

  const storageResources: string[] = [];

  if (amplifyMeta[categoryName]) {
    Object.keys(amplifyMeta[categoryName]).forEach(resourceName => {
      storageResources.push(resourceName);
    });
  }

  if (storageResources.length === 0) {
    const errMessage = 'No resources to override. You need to add a resource.';
    printer.error(errMessage);
    return;
  }

  let selectedResourceName: string = storageResources[0];

  if (storageResources.length > 1) {
    selectedResourceName = await prompter.pick('Which resource would you like to add overrides for?', storageResources);
  }

  const destPath = pathManager.getResourceDirectoryPath(undefined, categoryName, selectedResourceName);

  const srcPath = path.join(
    __dirname,
    '..',
    '..',
    '..',
    'resources',
    'overrides-resource',
    amplifyMeta[categoryName][selectedResourceName].service,
  );

  // Make sure to migrate first
  if (amplifyMeta[categoryName][selectedResourceName].service === 'DynamoDB') {
    const resourceInputState = new DynamoDBInputState(selectedResourceName);
    if (!resourceInputState.cliInputFileExists()) {
      if (await prompter.yesOrNo('File migration required to continue. Do you want to continue?', true)) {
        resourceInputState.migrate();
        const stackGenerator = new DDBStackTransform(selectedResourceName);
        stackGenerator.transform();
      } else {
        return;
      }
    }
  } else if (amplifyMeta[categoryName][selectedResourceName].service === 'S3') {
    // S3 migration logic goes in here
  }

  await generateOverrideSkeleton(context, srcPath, destPath);
};