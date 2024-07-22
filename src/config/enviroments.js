import "dotenv/config";


const {
    api_key_news = false,
    port_dev = 3001,
    port_pro = 3000,
    uri_mongo_db_local = "",
    salt_bcrypt = 20
} = process.env;

// console.log({
//     api_key_news,
//     port_dev,
//     port_pro,
//     uri_mongo_db_local,
//     salt_bcrypt
// });


export {
    api_key_news,
    port_dev,
    port_pro,
    uri_mongo_db_local,
    salt_bcrypt
}