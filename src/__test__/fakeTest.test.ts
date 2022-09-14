describe('Ok', () => {
    // let page
    beforeAll(async () => {
        // page = await global.__BROWSER__.newPage()
        await page.goto('https://google.com')
        console.log("page: ", page)
    })

    it('should say ok', async () => {
        let text = await page.evaluate(() => document.body.textContent)
        expect(text).toContain('google')
    })
})