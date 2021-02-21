import { SHORT, MEDIUM, LONG } from '../lib/timeouts'

describe('Browser Actions - Inputs', () => {

    it('User Inputs', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const inputField = $('#developer-name')
        inputField.waitForExist()
        inputField.setValue('Md')
        browser.pause(SHORT)
        inputField.clearValue()    // clear the value 
        browser.pause(SHORT)
        inputField.addValue('Md2')
        browser.pause(SHORT)

    })

    it('Click', () => {
        const buttonPopulate = $('#populate')
        buttonPopulate.waitForExist()
        buttonPopulate.click()

    })

    it('Double Click', () => {
        const buttonPopulate = $('#populate')
        buttonPopulate.waitForExist()
        buttonPopulate.doubleClick()

    })

    it('Radio Button', () => {
        const radio = $('//*[@id="windows"]')
        radio.waitForExist()
        radio.click()
        browser.pause(SHORT)

    })

    it('Check Box', () => {
        const radio = $('//*[@id="reusing-js-code"]')
        radio.waitForExist()
        radio.click()
        browser.pause(SHORT)

    })

    it('Select Box', () => {
        const select = $('//*[@id="preferred-interface"]')
        select.waitForExist()
        select.selectByVisibleText('JavaScript API')
        browser.pause(SHORT)

    })







})