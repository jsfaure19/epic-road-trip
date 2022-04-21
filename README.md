# Welcome to Epic Road Trip project ! 
T-WEB-800 Epitech

## Dev guide 
### Creating branch

git checkout -b TYPE1-TYPE2-DESCRIPTION

Type1:
- back
- front
- devops
Type2: 
- feat
- fix
- docs
- style
- refactor
- perf
- test

Exemple:
```bash
git checkout -b back-feat-init-rails
```
### PR and Push to production

PR before push on staging/main !

### Workflow

branch feature -> (step1) -> staging -> (step2) -> main -> (step3)

step1 : Tests
step2 : If Step 1 ok, push to main
step3 : Auto-deploy back and front with tests

For push in production : min. 1 feat, fix, perf, test. Docs, styles, refacto are waiting an another type.
