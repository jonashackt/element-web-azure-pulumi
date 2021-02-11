# element-web-azure-pulumi
Project to provision a vector-im / element-web Server with Pulumi on Azure


Creating a private https://github.com/vector-im/element-web on Azure with Pulumi.

### Docker Image

https://hub.docker.com/r/vectorim/riot-web/ start it with:

```shell
docker run -p 80:80 vectorim/element-web
```

### How to run on Azure

Let's search in https://docs.microsoft.com/en-us/azure/architecture/aws-professional/services#web-applications

--> Try Container Instances: https://azure.microsoft.com/en-us/services/container-instances/

### Azure Container Instances with Pulumi

https://www.pulumi.com/docs/tutorials/azure/container-webserver/

Create a new Pulumi Skelleton:

```shell
pulumi new azure-typescript
```

Let's choose `public` and  `westeurope` which runs in Berlin: https://azure.microsoft.com/de-de/global-infrastructure/geographies/#geographies

```shell
$ pulumi new azure-typescript
This command will walk you through creating a new Pulumi project.

Enter a value or leave blank to accept the (default), and press <ENTER>.
Press ^C at any time to quit.

project name: (testserver) element-web-azure-pulumi
project description: (A minimal Azure TypeScript Pulumi program) Project to provision a vector-im / element-web Server with Pulumi on Azure
Created project 'element-web-azure-pulumi'

Please enter your desired stack name.
To create a stack in an organization, use the format <org-name>/<stack-name> (e.g. `acmecorp/dev`).
stack name: (dev)
Created stack 'dev'

azure:environment: The Azure environment to use (`public`, `usgovernment`, `german`, `china`): (public)
azure:location: The Azure location to use: (WestUS) westeurope
Saved config

Installing dependencies...


added 184 packages, and audited 185 packages in 17s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Finished installing dependencies

Your new project is ready to go! ✨

To perform an initial deployment, run 'pulumi up'
```

