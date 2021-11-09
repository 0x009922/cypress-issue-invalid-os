const os = require('os')

function report() {
    return `${os.platform()} ${os.arch()}`
}

if (require.main === module) {
    console.log('platform info: %o', report())
}

module.exports = report