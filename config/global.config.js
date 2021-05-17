module.exports = {
    secret: 'kdslfjpaifknkaokwda;wokdanfafdslkfsjfnslskdf',
    protocol: 'http://',
    hostname: 'localhost',
    backendPort: 3000,
    frontendPort: 8080,
    databaseUrl: 'mongodb://localhost:27017/licencjat',
    get frontendUrl() {
        return `${this.protocol}${this.hostname}:${this.frontendPort}/`
    },
    get backendUrl() {
        return `${this.protocol}${this.hostname}:${this.backendPort}/`
    }
};