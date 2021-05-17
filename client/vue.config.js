const path = require('path')
// const fs = require('fs')
const config = require("../config/global.config.js");

module.exports = {
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        // port: config.frontendPort,
        // public: config.frontendUrl,
        // https: {
        //     key: fs.readFileSync('../config/certificates/key.pem'),
        //     cert: fs.readFileSync('../config/certificates/cert.pem'),
        // },
        proxy: {
            '/api': {
                target: config.backendUrl,
            }
        }
    },
    // chainWebpack: (config) => {
    //     config.resolve.symlinks(false)
    // },
}