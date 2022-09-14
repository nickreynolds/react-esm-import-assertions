const {mkdir, writeFile} = require('fs').promises;
const os = require('os');
const path = require('path');
const puppeteer = require('puppeteer');
const { readConfig, getPuppeteer } = require('./readConfig.cjs')
const { setup: setupServer } = require('jest-dev-server')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
// console.log("DIR: ", DIR)
console.log("OK OK OK")

module.exports = async function (jestConfig = {}) {
  const config = await readConfig()
  console.log("jestConfig: ", jestConfig)
  console.log("config: ", config)
  console.log("1 1 1")
  const browser = await puppeteer.launch({ headless: true });
  // console.log("2 2 2. browser: ", browser)
  // store the browser instance so we can teardown it later
  // this global is only available in the teardown but not in TestEnvironments
  globalThis.__BROWSER_GLOBAL__ = browser;
  this.global.__BROWSER__ = browser;

  // console.log("3 3 3. browserEndpoint: ", browser.wsEndpoint())
  // use the file system to expose the wsEndpoint for TestEnvironments
  await mkdir(DIR, {recursive: true});
  await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
  console.log("4 4 4")
  
  if (config.server) {
    try {
      await setupServer(config.server)
    } catch (error) {
      if (error.code === ERROR_TIMEOUT) {
        console.log('')
        console.error(chalk.red(error.message))
        console.error(
          chalk.blue(
            `\n☝️ You can set "server.launchTimeout" in jest-puppeteer.config.js`,
          ),
        )
        process.exit(1)
      }
      if (error.code === ERROR_NO_COMMAND) {
        console.log('')
        console.error(chalk.red(error.message))
        console.error(
          chalk.blue(
            `\n☝️ You must set "server.command" in jest-puppeteer.config.js`,
          ),
        )
        process.exit(1)
      }
      throw error
    }
  }
};