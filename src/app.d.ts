// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        interface Locals {
            db: import("drizzle-orm/d1").DrizzleD1Database;
        }
        interface Platform {
            env: {
                MIGHTY_KV: KVNamespace;
                DB: D1Database;
            }
        }
    }
}

export { };