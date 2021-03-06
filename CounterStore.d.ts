declare module "orbit-db-counterstore" {
    import { Store } from "orbit-db-store";

    export class CounterStore extends Store {
        value: number;
        
        inc(value?: number): Promise<string>;
    }
}