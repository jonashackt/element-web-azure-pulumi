import * as pulumi from "@pulumi/pulumi";
import * as azure from "@pulumi/azure";

// SCM Resource Group
const resourceGroup = new azure.core.ResourceGroup("rg-element-dev");

const container = new azure.containerservice.Group("riot-web", {
    containers: [{
        name: "riot-web",
        image: "vectorim/riot-web",
        memory: 1,
        cpu: 1,
        ports: [{
                port: 80,
                protocol: "TCP"
        }],
    }],
    osType: "Linux",
    resourceGroupName: resourceGroup.name,
    location: resourceGroup.location,
});

// Export the connection string for the storage account
export const publicIP = container.ipAddress;
