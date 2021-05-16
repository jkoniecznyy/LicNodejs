const path = require('path')
const fs = require('fs')
const config = require("../config/global.config.js");

module.exports = {
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        port: 8080,
        https: {
            key: fs.readFileSync('../config/certificates/key.pem'),
            cert: fs.readFileSync('../config/certificates/cert.pem'),
        },
        public: 'https://localhost:8080/',
        proxy: {
            '/api': {
                target: config.serverUrl,
                // secure: true
            }
        }
    },
    // chainWebpack: (config) => {
    //     config.resolve.symlinks(false)
    // },
}