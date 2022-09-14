// jest-puppeteer.config.cjs
console.log("puppeteer config inside.")
module.exports = {
  server: {
    command: 'npm run start',
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
}