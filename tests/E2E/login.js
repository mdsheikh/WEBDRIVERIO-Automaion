describe('E2E Login and LogOut Flow', () => {

    it('Landing on a Right Page', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        expect(browser).toHaveTitle('Zero - Personal Banking - Loans - Credit Cards')
        browser.pause(3000)

    })

    it('Should NOT login with INVALID credentials', () => {

        //const button = $('signin_button')
        //button.click() 
        // we can do same thihg in a short cut way 
        $('//*[@id="signin_button"]').waitForExist()
        $('//*[@id="signin_button"]').click()
        $('//*[@id="user_login"]').waitForExist()
        $('//*[@id="user_login"]').setValue('Invalid')
        $('//*[@id="user_password"]').setValue('Invalid')
        $('//*[@id="login_form"]/div[2]/input').click()
        const errorMessage = $('.alert-error')
        expect(errorMessage).toHaveText('Login and/or password are wrong.')

    })


    it('Should login with VALID credentials', () => {
        $('//*[@id="signin_button"]').waitForExist()
        $('//*[@id="signin_button"]').click()
        $('//*[@id="user_login"]').waitForExist()
        $('//*[@id="user_login"]').setValue('username')
        $('//*[@id="user_password"]').setValue('password')
        $('//*[@id="login_form"]/div[2]/input').click()
        $('//*[@id="feedback-title"]').waitForExist()

    })

    it('Should LogOut Successfully', () => {

        $('.icon-user').waitForExist()
        $('.icon-user').click()
        $('#logout_link').waitForExist()
        $('#logout_link').click()
        $('#pages-nav').waitForExist()

    })
    

})