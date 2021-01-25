import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';

// DefaultAzureCredential expects the following three environment variables:
// * AZURE_TENANT_ID: The tenant ID in Azure Active Directory
// * AZURE_CLIENT_ID: The application (client) ID registered in the AAD tenant
// * AZURE_CLIENT_SECRET: The client secret for the registered application
const credential = new DefaultAzureCredential();

const url = 'https://typescript-keyvault2.vault.azure.net/';
const client = new SecretClient(url, credential);

export async function getSecret(secretName: string) {
    const result = await client.getSecret(secretName);

    if (!result.value) {
        throw new Error(`Failed to get secret: ${secretName}`);
    }

    return result.value;
}
