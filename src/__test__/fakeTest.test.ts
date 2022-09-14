describe('Ok', () => {
    beforeAll(async () => {
        await page.goto('https://google.com')
    })

    it('should say ok', async () => {
        let text = await page.evaluate(() => document.body.textContent)
        expect(text).toContain('google')
    })
})