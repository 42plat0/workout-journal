import "dotenv/config";

import { app } from "./app.js";
import { sql, testDbConnection } from "./db.js";
import { createTables } from "./dbServices/createTables.js";


(async () => {
    try {
        await testDbConnection();
        await createTables();
        app.listen(process.env.PORT, () => {
            console.log(`Server started at ${process.env.PORT}!`);
        })

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})()

process.on("SIGINT", async() => {
    console.log("\nShutting down database");
    await sql.end();
    process.exit(1);
})
