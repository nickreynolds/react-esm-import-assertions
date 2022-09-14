describe('Ok', () => {
    let page
    beforeAll(async () => {
        page = await global.__BROWSER__.newPage()
        await page.goto('http://localhost:3000')
        console.log("page: ", page)
    })

    it('Finds Import Assertion', async () => {
        let text = await page.evaluate(() => document.body.textContent)
        expect(text).toContain('Import Assertion')
    })
})