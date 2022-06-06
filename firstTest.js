 describe ('Ecomerce app',async()=> 
 {
//      it('loging failes page',async()=> //jс асинхронен надо обавлять что он асинхронен и авэйт ждать пока строка проверится]
//   {
//      await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
//      console.log(browser.getTitle())//выводит в логи значение
//      await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
//      await $("input[name='username']").setValue("rahulshettyacademy") // вставить значение в поле
// //     await browser.pause(3000)// ждет 
//      await $("#username").setValue("secondCSS")//поменять на следующее значение в том же поле,только использован селектор а не х-пас
// //     await browser.pause(3000)
//      const password = $("//input[@type='password']")
//      await password.setValue("learning")
// //      await browser.pause(3000)
//      await $("#signInBtn").click()
//      await console.log(await $(".alert-danger").getText())
//      await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value') === 'Sign In',
//     {
//         timeout: 5000,
//         timeoutMsg: 'Error message is not showing up'
//      })
//      await console.log(await $(".alert-danger").getText())
//      await expect($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")

//     })


it('Login Success page title',async()=> // Result :????//element (".btn-primary") still not existing after 10000ms
{
    browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
    await $("input[name='username']").setValue("rahulshettyacademy")
    const password = $("//input[@type='password']")
    await password.setValue("learning")
    await $("#signInBtn").click()
    //wait until checkout button is displayed
    await $(".btn-primary").waitForExist({ timeout: 5000 })// ждать пока страница полностью загрузится  и элемент действительно там будет
    await expect(browser).toHaveUrlContaining("shop")// в урле есть слово shop
    await expect(browser).toHaveTitle("ProtoCommerce")//название вкладки браузера

})})