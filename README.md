# Welcome to Epic Road Trip project ! 
T-WEB-800 Epitech

## Dev guide 
### Creating branch

git checkout -b TYPE1-TYPE2-DESCRIPTION

#### Type1:
- back
- front
- devops
#### Type2:
- feat
- fix
- docs
- style
- refactor
- perf
- test

#### Exemple:
```bash
git checkout -b back-feat-init-rails
```
### PR and Push to production

PR before push on staging/main !

## Workflow

branch feature -> (step1) -> staging -> (step2) -> main -> (step3)

#### Step1
- Tests
#### Step 2
- If Step 1 ok, push to main
#### Step 3
- Auto-deploy back with tests

For push in production : min. 1 feat, fix, perf, test. Docs, styles, refacto are waiting an another type.

## Front
- cd front

### Install
- npm install 

### Start
- npm start

## Backend RoR

### Install

https://www.ruby-lang.org/en/documentation/installation/

### Start 

bundle exec rails s 

### Console 

bundle exec rails c 

