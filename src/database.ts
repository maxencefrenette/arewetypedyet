import { createTableService, TableService } from 'azure-storage';
import { promisify } from "util";



export class Database {
    private tableSvc: TableService;

    readonly createTableIfNotExist: (arg1: string) => Promise<TableService.TableResult>;

    constructor(connectionString: string) {
        this.tableSvc = createTableService(connectionString);
        this.createTableIfNotExist = promisify(this.tableSvc.createTableIfNotExists).bind(this.tableSvc);
    }
}
