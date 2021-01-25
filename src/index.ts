import { getSecret } from "./keyvault";
import { Database } from "./database";

async function main() {
    const storageConnString = await getSecret('storage-account');
    const db = new Database(storageConnString);
    await db.createTableIfNotExist("packages");
}

main().catch(console.error);
