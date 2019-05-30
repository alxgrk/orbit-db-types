declare module "orbit-db-docstore" {
    import { Store } from "orbit-db-store";

    export class DocumentStore<T> extends Store {

        put(doc: any): Promise<string>;
        get(key: any): T[];

        query(mapper: (doc: T) => void): T[]

        del(key: any): Promise<string>;
        
    }
}
