import express, { urlencoded } from "express";
import morgan from "morgan";
import { port_dev, uri_mongo_db_local } from "./config/enviroments.js";
import { router_index } from "./router/root_index.js";
import { connectionDB } from "./db/connectionDB.js";

const server = express();

//server config
server
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(morgan("dev"))
    .use(router_index)

connectionDB(uri_mongo_db_local)

//listener
server.listen(port_dev, () => {
    console.log(`Server on port: http://localhost:${port_dev}`)
})