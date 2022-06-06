describe('Windows and Frames Miscellanous',async()=>
{
   // it('Parent and Child windows switch',async()=>

   // {
      //   await  browser.url("https://rahulshettyacademy.com/loginpagePractise/")
      //   await $(".blinkingText").click()
      //  const handles = await browser.getWindowHandles()// 2 windows -
      //  await browser.switchToWindow(handles[1])
      //   console.log(await $("h1").getText())
      //   console.log(await browser.getTitle())//Rahul Shetty Academy
      //  await browser.closeWindow()
      // //   await browser.switchToWindow(handles[0])
      // //  console.log(await browser.getTitle())//LoginPage Practise | Rahul Shetty Academy
      // //  //*********************************** */
      // //   await browser.newWindow("https://google.com")//automation
      // //   console.log(await browser.getTitle())// Rahul Shetty Academy
      // //   await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/")
      // //   await $("#username").setValue("helloiswitchedback")
      // //   await browser.pause(3000)

   // })
   //FRAMES
   it('Frames switch',async()=>

   {
    await  browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
    await  $("#mousehover").scrollIntoView()// доскролить до кнопки на странице тк рамку не видит изначально 
    console.log(await $$("a").length)//27  напечатает на стр эл ты с тегом  а $$делает типо  cars = ["Saab", "Volvo", "BMW"];
    await browser.switchToFrame(await $("[id='courses-iframe']"))//переключиться на форму 
    console.log(await $("=Courses").getTagName())
    console.log(await $$("a").length)//118
    await browser.switchToFrame(null)
    console.log(await $$("a").length)//27// return back to the previous frame page

   })

})