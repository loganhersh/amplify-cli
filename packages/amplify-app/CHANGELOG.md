# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.20.3](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.20.2...amplify-app@2.20.3) (2020-12-11)

**Note:** Version bump only for package amplify-app





## [2.20.2](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.20.1...amplify-app@2.20.2) (2020-12-09)



## 4.38.1 (2020-12-08)


### Bug Fixes

* check amplify/backend to determine project existence ([#6115](https://github.com/aws-amplify/amplify-cli/issues/6115)) ([4135a24](https://github.com/aws-amplify/amplify-cli/commit/4135a2428027d801c78e6877d0936f9753ba83e4))





## [2.20.1](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.20.0...amplify-app@2.20.1) (2020-12-07)


### Bug Fixes

* bump min version of cli required by amplify-app ([#6056](https://github.com/aws-amplify/amplify-cli/issues/6056)) ([fff597b](https://github.com/aws-amplify/amplify-cli/commit/fff597bb75d4318a97f5a9ed2c5671ab884c3084))
* use profile as key when asking for profile ([#5861](https://github.com/aws-amplify/amplify-cli/issues/5861)) ([b67278d](https://github.com/aws-amplify/amplify-cli/commit/b67278ddb9e85dfa709885b84adf937450346c42)), closes [#5394](https://github.com/aws-amplify/amplify-cli/issues/5394)





# [2.20.0](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.19.2...amplify-app@2.20.0) (2020-11-30)


### Features

* pre-deploy pull, new login mechanism and pkg cli updates ([#5941](https://github.com/aws-amplify/amplify-cli/issues/5941)) ([7274251](https://github.com/aws-amplify/amplify-cli/commit/7274251faadc1035acce5f44699b172e10e2e67d))





## [2.19.2](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.19.1...amplify-app@2.19.2) (2020-11-28)

**Note:** Version bump only for package amplify-app





## [2.19.1](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.19.0...amplify-app@2.19.1) (2020-11-27)

**Note:** Version bump only for package amplify-app





# [2.19.0](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.18.1...amplify-app@2.19.0) (2020-11-26)


### Features

* **iOS:** execute `amplify-app` flow on `init ` and `codegen models` ([#5917](https://github.com/aws-amplify/amplify-cli/issues/5917)) ([c47c8f7](https://github.com/aws-amplify/amplify-cli/commit/c47c8f78b37806181354d3842a2094c35b1795d0))


### Reverts

* Revert "feat(iOS): execute `amplify-app` flow on `init ` and `codegen models` (#5917)" (#5960) ([cd7951a](https://github.com/aws-amplify/amplify-cli/commit/cd7951ab6d26f1206c2f0ff95225ba7b2a5a25eb)), closes [#5917](https://github.com/aws-amplify/amplify-cli/issues/5917) [#5960](https://github.com/aws-amplify/amplify-cli/issues/5960)





## [2.18.1](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.18...amplify-app@2.18.1) (2020-11-22)

**Note:** Version bump only for package amplify-app





# 2.18.0 (2020-11-22)


### Bug Fixes

* **amplify-app:** initialize feature flag  ([#5643](https://github.com/aws-amplify/amplify-cli/issues/5643)) ([9608b56](https://github.com/aws-amplify/amplify-cli/commit/9608b5616c2b92417a1b559f41f5d3f8f42f97e5))
* add configuration.json placeholders ([#3508](https://github.com/aws-amplify/amplify-cli/issues/3508)) ([44265c4](https://github.com/aws-amplify/amplify-cli/commit/44265c439d4b7764ff52ab5b82f5fd1c88af799e))
* add datastoreSync option to config files ([#2920](https://github.com/aws-amplify/amplify-cli/issues/2920)) ([db20336](https://github.com/aws-amplify/amplify-cli/commit/db20336a410dafc0597941b98447faf32094cbcd))
* add frontend plugins for guessing platform ([#3312](https://github.com/aws-amplify/amplify-cli/issues/3312)) ([3c31f25](https://github.com/aws-amplify/amplify-cli/commit/3c31f2524680894c83a4c344784428f0c12b0d20)), closes [#3300](https://github.com/aws-amplify/amplify-cli/issues/3300)
* add graphql dependency ([#3466](https://github.com/aws-amplify/amplify-cli/issues/3466)) ([8620105](https://github.com/aws-amplify/amplify-cli/commit/86201059ddde68239b48d7a3430378ca496bcf15)), closes [#3465](https://github.com/aws-amplify/amplify-cli/issues/3465)
* add resources in xcode helper ([#2901](https://github.com/aws-amplify/amplify-cli/issues/2901)) ([9ec8e61](https://github.com/aws-amplify/amplify-cli/commit/9ec8e616c8485beb614ab8c0d703e429e6e52ada))
* do not remove resources group ([#4571](https://github.com/aws-amplify/amplify-cli/issues/4571)) ([c0e0396](https://github.com/aws-amplify/amplify-cli/commit/c0e0396807ea65884fcd099e6f09325708fca5a6)), closes [#4518](https://github.com/aws-amplify/amplify-cli/issues/4518)
* fix amplify-app ios when not in xcode project ([#4344](https://github.com/aws-amplify/amplify-cli/issues/4344)) ([604fe8d](https://github.com/aws-amplify/amplify-cli/commit/604fe8dea1bdd0334f0822f41b44e1833bf553ad))
* fix amplify-app on windows ([#3401](https://github.com/aws-amplify/amplify-cli/issues/3401)) ([aae3a92](https://github.com/aws-amplify/amplify-cli/commit/aae3a929f81a59514210cb3974e9e2fbb7a954ef)), closes [#3396](https://github.com/aws-amplify/amplify-cli/issues/3396)
* quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))
* update amplify app package dependencies to latest ([#4374](https://github.com/aws-amplify/amplify-cli/issues/4374)) ([a5ff2c7](https://github.com/aws-amplify/amplify-cli/commit/a5ff2c79aa6e2f418c5c8bee0ceb7a1e0d795d86))
* update cli if it doesn't satisify minimum version ([#2932](https://github.com/aws-amplify/amplify-cli/issues/2932)) ([67aa941](https://github.com/aws-amplify/amplify-cli/commit/67aa94196430e6e9e68d2cae2ca8ab75120b032e))
* update min cli version for accurate modelgen ([#2931](https://github.com/aws-amplify/amplify-cli/issues/2931)) ([2383ad3](https://github.com/aws-amplify/amplify-cli/commit/2383ad3b92b0c939004b8b9c7ac19f8a795820a0))
* upgrade to node10 as min version for CLI ([#3128](https://github.com/aws-amplify/amplify-cli/issues/3128)) ([a0b18e0](https://github.com/aws-amplify/amplify-cli/commit/a0b18e0187a26b4ab0e6e986b0277f347e829444))
* use npm.cmd for windows ([#3100](https://github.com/aws-amplify/amplify-cli/issues/3100)) ([ce7a4a6](https://github.com/aws-amplify/amplify-cli/commit/ce7a4a6ef2865466be596a2a801b8960dff55e98))
* use relative path for xcode and android studio helper files ([#2985](https://github.com/aws-amplify/amplify-cli/issues/2985)) ([9f844b3](https://github.com/aws-amplify/amplify-cli/commit/9f844b3e9dbf3f3e01a37c883f85f3888e376d7c))
* **amplify-app:** support app without profile ([#2922](https://github.com/aws-amplify/amplify-cli/issues/2922)) ([b41be93](https://github.com/aws-amplify/amplify-cli/commit/b41be93205e0f89dd033bfae0c52be09549792f2))


### Features

* **amplify-app:** group amplify files in xcode integration ([#4268](https://github.com/aws-amplify/amplify-cli/issues/4268)) ([5670a08](https://github.com/aws-amplify/amplify-cli/commit/5670a0895d65702441de24d8873d48d156a9d121))
* add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))
* bump amplify cli version in amplify-app ([#3842](https://github.com/aws-amplify/amplify-cli/issues/3842)) ([18fa6cd](https://github.com/aws-amplify/amplify-cli/commit/18fa6cde44c4052bb888584f60baba83fe6e8487))





## [2.17.21](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.18...amplify-app@2.17.21) (2020-11-20)

**Note:** Version bump only for package amplify-app





## [2.17.20](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.18...amplify-app@2.17.20) (2020-11-20)

**Note:** Version bump only for package amplify-app





## [2.17.19](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.18...amplify-app@2.17.19) (2020-11-19)

**Note:** Version bump only for package amplify-app





## [2.17.18](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.17...amplify-app@2.17.18) (2020-11-08)

**Note:** Version bump only for package amplify-app





## [2.17.17](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.16...amplify-app@2.17.17) (2020-10-27)

**Note:** Version bump only for package amplify-app





## [2.17.16](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.15...amplify-app@2.17.16) (2020-10-22)


### Bug Fixes

* **amplify-app:** initialize feature flag  ([#5643](https://github.com/aws-amplify/amplify-cli/issues/5643)) ([9608b56](https://github.com/aws-amplify/amplify-cli/commit/9608b5616c2b92417a1b559f41f5d3f8f42f97e5))





## [2.17.15](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.14...amplify-app@2.17.15) (2020-10-17)

**Note:** Version bump only for package amplify-app





## [2.17.14](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.13...amplify-app@2.17.14) (2020-10-07)

**Note:** Version bump only for package amplify-app





## [2.17.13](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.12...amplify-app@2.17.13) (2020-09-25)

**Note:** Version bump only for package amplify-app





## [2.17.12](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.11...amplify-app@2.17.12) (2020-09-16)

**Note:** Version bump only for package amplify-app





## [2.17.11](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.10...amplify-app@2.17.11) (2020-09-09)

**Note:** Version bump only for package amplify-app





## [2.17.10](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.9...amplify-app@2.17.10) (2020-09-03)

**Note:** Version bump only for package amplify-app





## [2.17.9](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.8...amplify-app@2.17.9) (2020-09-02)

**Note:** Version bump only for package amplify-app





## [2.17.8](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.7...amplify-app@2.17.8) (2020-08-31)

**Note:** Version bump only for package amplify-app





## [2.17.7](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.6...amplify-app@2.17.7) (2020-08-20)

**Note:** Version bump only for package amplify-app





## [2.17.6](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.4...amplify-app@2.17.6) (2020-07-29)

**Note:** Version bump only for package amplify-app





## [2.17.5](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.4...amplify-app@2.17.5) (2020-07-23)

**Note:** Version bump only for package amplify-app





## [2.17.4](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.3...amplify-app@2.17.4) (2020-06-25)

**Note:** Version bump only for package amplify-app





## [2.17.3](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.2...amplify-app@2.17.3) (2020-06-18)


### Bug Fixes

* do not remove resources group ([#4571](https://github.com/aws-amplify/amplify-cli/issues/4571)) ([3ad26bb](https://github.com/aws-amplify/amplify-cli/commit/3ad26bb2a0d7beabfcfbf84d394705477682ec56)), closes [#4518](https://github.com/aws-amplify/amplify-cli/issues/4518)





## [2.17.2](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.1...amplify-app@2.17.2) (2020-06-11)

**Note:** Version bump only for package amplify-app





## [2.17.1](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.17.0...amplify-app@2.17.1) (2020-05-26)


### Bug Fixes

* update amplify app package dependencies to latest ([#4374](https://github.com/aws-amplify/amplify-cli/issues/4374)) ([c908891](https://github.com/aws-amplify/amplify-cli/commit/c908891e8408e1285b31e962c898e7e5072ec339))





# [2.17.0](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.16.0...amplify-app@2.17.0) (2020-05-26)


### Bug Fixes

* fix amplify-app ios when not in xcode project ([#4344](https://github.com/aws-amplify/amplify-cli/issues/4344)) ([f74a45d](https://github.com/aws-amplify/amplify-cli/commit/f74a45d0eb94e180440b2639211e43eafacee43e))


### Features

* **amplify-app:** group amplify files in xcode integration ([#4268](https://github.com/aws-amplify/amplify-cli/issues/4268)) ([73f3eab](https://github.com/aws-amplify/amplify-cli/commit/73f3eabc11def219faa1724fee93ce171949e40f))





# [2.16.0](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.15.1...amplify-app@2.16.0) (2020-04-06)


### Features

* bump amplify cli version in amplify-app ([#3842](https://github.com/aws-amplify/amplify-cli/issues/3842)) ([18fa6cd](https://github.com/aws-amplify/amplify-cli/commit/18fa6cde44c4052bb888584f60baba83fe6e8487))





## [2.15.1](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.13.4...amplify-app@2.15.1) (2020-03-07)


### Bug Fixes

* add configuration.json placeholders ([#3508](https://github.com/aws-amplify/amplify-cli/issues/3508)) ([44265c4](https://github.com/aws-amplify/amplify-cli/commit/44265c439d4b7764ff52ab5b82f5fd1c88af799e))





## [2.14.1](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.13.6-beta.0...amplify-app@2.14.1) (2020-03-05)

**Note:** Version bump only for package amplify-app





## [2.13.4](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.13.3...amplify-app@2.13.4) (2020-02-19)


### Bug Fixes

* add graphql dependency ([#3466](https://github.com/aws-amplify/amplify-cli/issues/3466)) ([8620105](https://github.com/aws-amplify/amplify-cli/commit/86201059ddde68239b48d7a3430378ca496bcf15)), closes [#3465](https://github.com/aws-amplify/amplify-cli/issues/3465)





## [2.13.3](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.13.2...amplify-app@2.13.3) (2020-02-13)


### Bug Fixes

* fix amplify-app on windows ([#3401](https://github.com/aws-amplify/amplify-cli/issues/3401)) ([aae3a92](https://github.com/aws-amplify/amplify-cli/commit/aae3a929f81a59514210cb3974e9e2fbb7a954ef)), closes [#3396](https://github.com/aws-amplify/amplify-cli/issues/3396)





## [2.13.2](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.13.1...amplify-app@2.13.2) (2020-02-07)


### Bug Fixes

* add frontend plugins for guessing platform ([#3312](https://github.com/aws-amplify/amplify-cli/issues/3312)) ([3c31f25](https://github.com/aws-amplify/amplify-cli/commit/3c31f2524680894c83a4c344784428f0c12b0d20)), closes [#3300](https://github.com/aws-amplify/amplify-cli/issues/3300)





## [2.13.1](https://github.com/aws-amplify/amplify-cli/compare/amplify-app@2.13.0...amplify-app@2.13.1) (2020-01-24)

**Note:** Version bump only for package amplify-app





# 2.13.0 (2020-01-23)

### Bug Fixes

- **amplify-app:** support app without profile ([#2922](https://github.com/aws-amplify/amplify-cli/issues/2922)) ([b41be93](https://github.com/aws-amplify/amplify-cli/commit/b41be93205e0f89dd033bfae0c52be09549792f2))
- add datastoreSync option to config files ([#2920](https://github.com/aws-amplify/amplify-cli/issues/2920)) ([db20336](https://github.com/aws-amplify/amplify-cli/commit/db20336a410dafc0597941b98447faf32094cbcd))
- add resources in xcode helper ([#2901](https://github.com/aws-amplify/amplify-cli/issues/2901)) ([9ec8e61](https://github.com/aws-amplify/amplify-cli/commit/9ec8e616c8485beb614ab8c0d703e429e6e52ada))
- quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))
- update cli if it doesn't satisify minimum version ([#2932](https://github.com/aws-amplify/amplify-cli/issues/2932)) ([67aa941](https://github.com/aws-amplify/amplify-cli/commit/67aa94196430e6e9e68d2cae2ca8ab75120b032e))
- update min cli version for accurate modelgen ([#2931](https://github.com/aws-amplify/amplify-cli/issues/2931)) ([2383ad3](https://github.com/aws-amplify/amplify-cli/commit/2383ad3b92b0c939004b8b9c7ac19f8a795820a0))
- upgrade to node10 as min version for CLI ([#3128](https://github.com/aws-amplify/amplify-cli/issues/3128)) ([a0b18e0](https://github.com/aws-amplify/amplify-cli/commit/a0b18e0187a26b4ab0e6e986b0277f347e829444))
- use npm.cmd for windows ([#3100](https://github.com/aws-amplify/amplify-cli/issues/3100)) ([ce7a4a6](https://github.com/aws-amplify/amplify-cli/commit/ce7a4a6ef2865466be596a2a801b8960dff55e98))
- use relative path for xcode and android studio helper files ([#2985](https://github.com/aws-amplify/amplify-cli/issues/2985)) ([9f844b3](https://github.com/aws-amplify/amplify-cli/commit/9f844b3e9dbf3f3e01a37c883f85f3888e376d7c))

### Features

- add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))

# 2.12.0 (2020-01-09)

### Bug Fixes

- **amplify-app:** support app without profile ([#2922](https://github.com/aws-amplify/amplify-cli/issues/2922)) ([b41be93](https://github.com/aws-amplify/amplify-cli/commit/b41be93205e0f89dd033bfae0c52be09549792f2))
- add datastoreSync option to config files ([#2920](https://github.com/aws-amplify/amplify-cli/issues/2920)) ([db20336](https://github.com/aws-amplify/amplify-cli/commit/db20336a410dafc0597941b98447faf32094cbcd))
- add resources in xcode helper ([#2901](https://github.com/aws-amplify/amplify-cli/issues/2901)) ([9ec8e61](https://github.com/aws-amplify/amplify-cli/commit/9ec8e616c8485beb614ab8c0d703e429e6e52ada))
- quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))
- update cli if it doesn't satisify minimum version ([#2932](https://github.com/aws-amplify/amplify-cli/issues/2932)) ([67aa941](https://github.com/aws-amplify/amplify-cli/commit/67aa94196430e6e9e68d2cae2ca8ab75120b032e))
- update min cli version for accurate modelgen ([#2931](https://github.com/aws-amplify/amplify-cli/issues/2931)) ([2383ad3](https://github.com/aws-amplify/amplify-cli/commit/2383ad3b92b0c939004b8b9c7ac19f8a795820a0))
- upgrade to node10 as min version for CLI ([#3128](https://github.com/aws-amplify/amplify-cli/issues/3128)) ([a0b18e0](https://github.com/aws-amplify/amplify-cli/commit/a0b18e0187a26b4ab0e6e986b0277f347e829444))
- use npm.cmd for windows ([#3100](https://github.com/aws-amplify/amplify-cli/issues/3100)) ([ce7a4a6](https://github.com/aws-amplify/amplify-cli/commit/ce7a4a6ef2865466be596a2a801b8960dff55e98))
- use relative path for xcode and android studio helper files ([#2985](https://github.com/aws-amplify/amplify-cli/issues/2985)) ([9f844b3](https://github.com/aws-amplify/amplify-cli/commit/9f844b3e9dbf3f3e01a37c883f85f3888e376d7c))

### Features

- add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))

# 2.11.0 (2019-12-31)

### Bug Fixes

- **amplify-app:** support app without profile ([#2922](https://github.com/aws-amplify/amplify-cli/issues/2922)) ([b41be93](https://github.com/aws-amplify/amplify-cli/commit/b41be93205e0f89dd033bfae0c52be09549792f2))
- add datastoreSync option to config files ([#2920](https://github.com/aws-amplify/amplify-cli/issues/2920)) ([db20336](https://github.com/aws-amplify/amplify-cli/commit/db20336a410dafc0597941b98447faf32094cbcd))
- add resources in xcode helper ([#2901](https://github.com/aws-amplify/amplify-cli/issues/2901)) ([9ec8e61](https://github.com/aws-amplify/amplify-cli/commit/9ec8e616c8485beb614ab8c0d703e429e6e52ada))
- quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))
- update cli if it doesn't satisify minimum version ([#2932](https://github.com/aws-amplify/amplify-cli/issues/2932)) ([67aa941](https://github.com/aws-amplify/amplify-cli/commit/67aa94196430e6e9e68d2cae2ca8ab75120b032e))
- update min cli version for accurate modelgen ([#2931](https://github.com/aws-amplify/amplify-cli/issues/2931)) ([2383ad3](https://github.com/aws-amplify/amplify-cli/commit/2383ad3b92b0c939004b8b9c7ac19f8a795820a0))
- use relative path for xcode and android studio helper files ([#2985](https://github.com/aws-amplify/amplify-cli/issues/2985)) ([9f844b3](https://github.com/aws-amplify/amplify-cli/commit/9f844b3e9dbf3f3e01a37c883f85f3888e376d7c))

### Features

- add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))

# 2.10.0 (2019-12-28)

### Bug Fixes

- **amplify-app:** support app without profile ([#2922](https://github.com/aws-amplify/amplify-cli/issues/2922)) ([b41be93](https://github.com/aws-amplify/amplify-cli/commit/b41be93205e0f89dd033bfae0c52be09549792f2))
- add datastoreSync option to config files ([#2920](https://github.com/aws-amplify/amplify-cli/issues/2920)) ([db20336](https://github.com/aws-amplify/amplify-cli/commit/db20336a410dafc0597941b98447faf32094cbcd))
- add resources in xcode helper ([#2901](https://github.com/aws-amplify/amplify-cli/issues/2901)) ([9ec8e61](https://github.com/aws-amplify/amplify-cli/commit/9ec8e616c8485beb614ab8c0d703e429e6e52ada))
- quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))
- update cli if it doesn't satisify minimum version ([#2932](https://github.com/aws-amplify/amplify-cli/issues/2932)) ([67aa941](https://github.com/aws-amplify/amplify-cli/commit/67aa94196430e6e9e68d2cae2ca8ab75120b032e))
- update min cli version for accurate modelgen ([#2931](https://github.com/aws-amplify/amplify-cli/issues/2931)) ([2383ad3](https://github.com/aws-amplify/amplify-cli/commit/2383ad3b92b0c939004b8b9c7ac19f8a795820a0))
- use relative path for xcode and android studio helper files ([#2985](https://github.com/aws-amplify/amplify-cli/issues/2985)) ([9f844b3](https://github.com/aws-amplify/amplify-cli/commit/9f844b3e9dbf3f3e01a37c883f85f3888e376d7c))

### Features

- add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))

# 2.9.0 (2019-12-26)

### Bug Fixes

- **amplify-app:** support app without profile ([#2922](https://github.com/aws-amplify/amplify-cli/issues/2922)) ([b41be93](https://github.com/aws-amplify/amplify-cli/commit/b41be93205e0f89dd033bfae0c52be09549792f2))
- add datastoreSync option to config files ([#2920](https://github.com/aws-amplify/amplify-cli/issues/2920)) ([db20336](https://github.com/aws-amplify/amplify-cli/commit/db20336a410dafc0597941b98447faf32094cbcd))
- add resources in xcode helper ([#2901](https://github.com/aws-amplify/amplify-cli/issues/2901)) ([9ec8e61](https://github.com/aws-amplify/amplify-cli/commit/9ec8e616c8485beb614ab8c0d703e429e6e52ada))
- quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))
- update cli if it doesn't satisify minimum version ([#2932](https://github.com/aws-amplify/amplify-cli/issues/2932)) ([67aa941](https://github.com/aws-amplify/amplify-cli/commit/67aa94196430e6e9e68d2cae2ca8ab75120b032e))
- update min cli version for accurate modelgen ([#2931](https://github.com/aws-amplify/amplify-cli/issues/2931)) ([2383ad3](https://github.com/aws-amplify/amplify-cli/commit/2383ad3b92b0c939004b8b9c7ac19f8a795820a0))
- use relative path for xcode and android studio helper files ([#2985](https://github.com/aws-amplify/amplify-cli/issues/2985)) ([9f844b3](https://github.com/aws-amplify/amplify-cli/commit/9f844b3e9dbf3f3e01a37c883f85f3888e376d7c))

### Features

- add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))

# 2.8.0 (2019-12-25)

### Bug Fixes

- **amplify-app:** support app without profile ([#2922](https://github.com/aws-amplify/amplify-cli/issues/2922)) ([b41be93](https://github.com/aws-amplify/amplify-cli/commit/b41be93205e0f89dd033bfae0c52be09549792f2))
- add datastoreSync option to config files ([#2920](https://github.com/aws-amplify/amplify-cli/issues/2920)) ([db20336](https://github.com/aws-amplify/amplify-cli/commit/db20336a410dafc0597941b98447faf32094cbcd))
- add resources in xcode helper ([#2901](https://github.com/aws-amplify/amplify-cli/issues/2901)) ([9ec8e61](https://github.com/aws-amplify/amplify-cli/commit/9ec8e616c8485beb614ab8c0d703e429e6e52ada))
- quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))
- update cli if it doesn't satisify minimum version ([#2932](https://github.com/aws-amplify/amplify-cli/issues/2932)) ([67aa941](https://github.com/aws-amplify/amplify-cli/commit/67aa94196430e6e9e68d2cae2ca8ab75120b032e))
- update min cli version for accurate modelgen ([#2931](https://github.com/aws-amplify/amplify-cli/issues/2931)) ([2383ad3](https://github.com/aws-amplify/amplify-cli/commit/2383ad3b92b0c939004b8b9c7ac19f8a795820a0))
- use relative path for xcode and android studio helper files ([#2985](https://github.com/aws-amplify/amplify-cli/issues/2985)) ([9f844b3](https://github.com/aws-amplify/amplify-cli/commit/9f844b3e9dbf3f3e01a37c883f85f3888e376d7c))

### Features

- add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))

# 2.7.0 (2019-12-20)

### Bug Fixes

- **amplify-app:** support app without profile ([#2922](https://github.com/aws-amplify/amplify-cli/issues/2922)) ([b41be93](https://github.com/aws-amplify/amplify-cli/commit/b41be93205e0f89dd033bfae0c52be09549792f2))
- add datastoreSync option to config files ([#2920](https://github.com/aws-amplify/amplify-cli/issues/2920)) ([db20336](https://github.com/aws-amplify/amplify-cli/commit/db20336a410dafc0597941b98447faf32094cbcd))
- add resources in xcode helper ([#2901](https://github.com/aws-amplify/amplify-cli/issues/2901)) ([9ec8e61](https://github.com/aws-amplify/amplify-cli/commit/9ec8e616c8485beb614ab8c0d703e429e6e52ada))
- quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))
- update cli if it doesn't satisify minimum version ([#2932](https://github.com/aws-amplify/amplify-cli/issues/2932)) ([67aa941](https://github.com/aws-amplify/amplify-cli/commit/67aa94196430e6e9e68d2cae2ca8ab75120b032e))
- update min cli version for accurate modelgen ([#2931](https://github.com/aws-amplify/amplify-cli/issues/2931)) ([2383ad3](https://github.com/aws-amplify/amplify-cli/commit/2383ad3b92b0c939004b8b9c7ac19f8a795820a0))
- use relative path for xcode and android studio helper files ([#2985](https://github.com/aws-amplify/amplify-cli/issues/2985)) ([9f844b3](https://github.com/aws-amplify/amplify-cli/commit/9f844b3e9dbf3f3e01a37c883f85f3888e376d7c))

### Features

- add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))

# 2.6.0 (2019-12-10)

### Bug Fixes

- **amplify-app:** support app without profile ([#2922](https://github.com/aws-amplify/amplify-cli/issues/2922)) ([b41be93](https://github.com/aws-amplify/amplify-cli/commit/b41be93205e0f89dd033bfae0c52be09549792f2))
- add datastoreSync option to config files ([#2920](https://github.com/aws-amplify/amplify-cli/issues/2920)) ([db20336](https://github.com/aws-amplify/amplify-cli/commit/db20336a410dafc0597941b98447faf32094cbcd))
- add resources in xcode helper ([#2901](https://github.com/aws-amplify/amplify-cli/issues/2901)) ([9ec8e61](https://github.com/aws-amplify/amplify-cli/commit/9ec8e616c8485beb614ab8c0d703e429e6e52ada))
- quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))
- update min cli version for accurate modelgen ([#2931](https://github.com/aws-amplify/amplify-cli/issues/2931)) ([2383ad3](https://github.com/aws-amplify/amplify-cli/commit/2383ad3b92b0c939004b8b9c7ac19f8a795820a0))

### Features

- add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))

# 2.4.0 (2019-12-03)

### Bug Fixes

- add resources in xcode helper ([#2901](https://github.com/aws-amplify/amplify-cli/issues/2901)) ([9ec8e61](https://github.com/aws-amplify/amplify-cli/commit/9ec8e616c8485beb614ab8c0d703e429e6e52ada))
- quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))

### Features

- add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))

# 2.3.0 (2019-12-01)

### Bug Fixes

- quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))

### Features

- add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))

# 2.2.0 (2019-11-27)

### Bug Fixes

- quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))

### Features

- add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))

# 2.1.0 (2019-11-27)

### Bug Fixes

- quickstart change and profile selection ([#2806](https://github.com/aws-amplify/amplify-cli/issues/2806)) ([d28a897](https://github.com/aws-amplify/amplify-cli/commit/d28a8975cdd79b853465200fb7138373a79587b6))

### Features

- add amplify-app command ([#2761](https://github.com/aws-amplify/amplify-cli/issues/2761)) ([c46cdd4](https://github.com/aws-amplify/amplify-cli/commit/c46cdd421bce40d7995b3e75f0ea7f4f646d2308))