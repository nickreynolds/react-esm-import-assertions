/**
 * @jest-environment puppeteer
 */

describe('Ok', () => {
    beforeAll(async () => {
        await page.goto('https://google.com')
        // console.log("page: ", page)
    })

    it('should say ok', async () => {
        expect(page).toMatch('google')
    })
})