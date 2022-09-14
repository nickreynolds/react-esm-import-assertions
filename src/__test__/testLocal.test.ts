describe('Ok', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000')
    })

    it('Finds Import Assertion', async () => {
        let text = await page.evaluate(() => document.body.textContent)
        expect(text).toContain('Import Assertion')
    })
})