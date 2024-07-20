import "dotenv/config";


const {
    api_key_news = false,
    port_dev = 3001,
    port_pro = 3000
} = process.env;

export {
    api_key_news,
    port_dev,
    port_pro
}