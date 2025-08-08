class InitError extends Error {
    constructor(message) {
        super(message)
        this.name = 'InitError'
        this.code = 'INIT_ERROR'
    }
}

module.exports = InitError
