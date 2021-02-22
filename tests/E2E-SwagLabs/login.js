describe('E2E Login and LogOut Flow', () => {

    it('Landing on a Right Page', () => {
        browser.url('https://www.saucedemo.com/')
        expect(browser).toHaveTitle('Swag Labs')
        browser.pause(3000)

    })

    it('Should NOT login with INVALID credentials', () => {

        const username = $('//*[@id="user-name"]')
        username.setValue('standard_user-Fail')
        const password = $('//*[@id="password"]')
        password.setValue('secret_sauce-Fail')
        const button = $('//*[@id="login-button"]')
        button.click()
        const errorMessage = $('/html/body/div[2]/div[1]/img')
        expect(errorMessage).toBeVisible()

    })

    it('Should login with VALID credentials', () => {
        const username = $('//*[@id="user-name"]')
        username.setValue('standard_user')
        const password = $('//*[@id="password"]')
        password.setValue('secret_sauce')
        const button = $('//*[@id="login-button"]')
        button.click()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    })

    it('Adding First Item', () => {
        const item_one = $('//*[@id="inventory_container"]/div/div[1]/div[3]/button')
        item_one.waitForExist()
        item_one.click()

    })

    it('Adding Second Item', () => {
        const second_item = $('//*[@id="inventory_container"]/div/div[2]/div[3]/button')
        second_item.waitForExist()
        second_item.click()
    })

    it('Adding third Item', () => {
        const third_item = $('//*[@id="inventory_container"]/div/div[5]/div[3]/button')
        third_item.waitForExist()
        third_item.click()
    })

    it('Verifying Added Items in the Cart', () => {




    })




    /*
    it('Should LogOut Successfully', () => {
        const navbar = $('//*[@id="menu_button_container"]/div/div[3]/div')
        navbar.waitForExist()
        navbar.click()
        const logout = $('//*[@id="logout_sidebar_link"]')
        logout.click()

   })
   */










})