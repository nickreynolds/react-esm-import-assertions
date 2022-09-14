// jest-puppeteer.config.cjs
module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    command: 'yarn start',
    port: 4444,
  },
}