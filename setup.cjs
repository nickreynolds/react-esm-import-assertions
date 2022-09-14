const {mkdir, writeFile} = require('fs').promises;
const os = require('os');
const path = require('path');
const puppeteer = require('puppeteer');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
console.log("DIR: ", DIR)
console.log("OK OK OK")

module.exports = async function () {
  console.log("1 1 1")
  const browser = await puppeteer.launch({ headless: true });
  console.log("2 2 2. browser: ", browser)
  // store the browser instance so we can teardown it later
  // this global is only available in the teardown but not in TestEnvironments
  globalThis.__BROWSER_GLOBAL__ = browser;
  this.global.__BROWSER__ = browser;

  console.log("3 3 3. browserEndpoint: ", browser.wsEndpoint())
  // use the file system to expose the wsEndpoint for TestEnvironments
  await mkdir(DIR, {recursive: true});
  await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
  console.log("4 4 4")
};