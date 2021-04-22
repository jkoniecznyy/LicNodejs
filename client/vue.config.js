const path = require('path')
const config = require("../config/global.config.js");

module.exports = {
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        proxy: {
            '/api': {
                target: `http://${config.hostname}:${config.port}`
            }
        }
    }
}