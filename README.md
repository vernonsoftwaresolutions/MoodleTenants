# MoodleTenants
This application is based on IBM's IDT (IBM Developer Tools) for project scaffolding. (https://www.npmjs.com/package/generator-nodeserver) 


**Pre-requisites**

Install Yeoman

`npm install -g yo`

**Installation**

`npm install -g generator-nodeserver`

**Scaffold**

`yo nodeserver`

1. project name

MoodleTenants

2. Swagger doc file name (OpenAPI Document)

swagger.yaml

IBM Cloud Service Enablement.

No

##We don't want the IBM stuff##

## Run locally as Node.js application

```bash
npm install
npm test
npm start
```

## Build, run, and deploy using IDT

```bash
# Install needed dependencies:
npm run idt:install
# Build the docker image for your app:
npm run idt:build
# Run the app locally through docker:
npm run idt:run
# Deploy your app to IBM Cloud:
npm run idt:deploy
```
