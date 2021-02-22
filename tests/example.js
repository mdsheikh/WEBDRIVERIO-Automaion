import { SHORT, MEDIUM, LONG } from '../lib/timeouts'
import { MOBILE, TABLET, DESKTOP } from '../lib/devices'

describe('First step with webdriveIO', () => {
    it('Load the website', () => {
        browser.url('http://www.example.com')
        browser.pause(1000)
        expect(browser).toHaveUrl('http://www.example.com/')
    })

    it('Verify the title', () => {
        browser.url('http://www.example.com')
        browser.pause(SHORT)
        expect(browser).toHaveTitle('Example Domain')
    })

    it('Verify the title', () => {
        const loc = $
        browser.url('http://www.example.com')
        browser.pause(MEDIUM)
    })

    it('H1 should be visible', () => {
        // Get the element and save it to a variable 
        const h1 = $('H1')
        // Do assertion 
        expect(h1).toBeVisible()

    })

    it('P tag should be visible', () => {
        // Get the element and save it to a variable 
        const p = $('p')

        // Do assertion 
        expect(p).toBeVisible()

    })

    it('Verify link in a P tag', () => {
        // Get the element and save it to a variable 
        const pa = $('p > a')
        // Do assertion 
        pa.click()
        expect(pa).toHaveUrl('https://www.iana.org/domains/reserved')

    })

    it('Verify link value', () => {
        const link = $('a')
        expect(link).toHaveUrl('https://www.iana.org/domains/reserved')
    })

    // Explicit wait or Dynamic Wait

    it('P tag should be visible using ExplicitWait', () => {
        // Get the element and save it to a variable 
        const p = $('p')
        p.waitForExist()
        // Do assertion 
        expect(p).toBeVisible()

    })

    // getting tsxt using getText() function 
    it('Get Element Text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText(text)

    })

    // Assertion values from an element
    it('Assert Attribute', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type', 'submit')

    })

    it('Assert Value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')

    })

    //Taking screenshot 
    it('Save Screenshot', () => {
        browser.saveScreenshot('shot.png')
    })

    // Formatting window size 
    it('Format window size', () => {
        browser.setWindowSize(800, 600)
    })

    it('Set Mobile View', () => {
        browser.setWindowSize(MOBILE[0], MOBILE[1])
        browser.pause(SHORT)

    })

    it('Set Tablet View', () => {
        browser.setWindowSize(TABLET[0], TABLET[1])
        browser.pause(SHORT)
    })

    it('Set Desktop View', () => {
        browser.setWindowSize(DESKTOP[0], DESKTOP[1])
        browser.pause(SHORT)
    })








})