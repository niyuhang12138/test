const matchedPackages = require('../init/packages')
const { execSync } = require('child_process')

matchedPackages.forEach((pkg) => {
    console.log('*********》 Releasing package：', pkg, '《*********')
    execSync(`cd ${pkg} && semantic-release`, {
        stdio: 'inherit',
        cwd: process.cwd()
    })
})

console.log('*********》 Releasing package：root《*********')
execSync('semantic-release', { stdio: 'inherit', cwd: process.cwd() })
