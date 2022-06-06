describe('dcce ooc scenarious',()=>
{
   it('get correct browser title  after clicking on ooc tile',async()=>
   {

    await browser.url("https://sapit-partner-test.launchpad.cfapps.eu10.hana.ondemand.com/site?siteId=9e019c36-4b33-4dbb-a6fd-f5dd69aad96c&sap-language=en#Shell-home")
   // await $("#mousehover").scrollIntoView()//Проскролить пока не будет видно
    await browser.pause(9000)//подождать
    await $("#__xmlview3--numericTileContent").click()
    await browser.pause(9000)
  
    await expect(browser).toHaveTitle("Opportunity Owner Certificate")
    await browser.pause(9000)
   })
   
   
   
//    it('click on the case inside the case tile',async()=>
//    {
//        await browser.url("https://sapit-partner-test.launchpad.cfapps.eu10.hana.ondemand.com/site?siteId=9e019c36-4b33-4dbb-a6fd-f5dd69aad96c&sap-language=en#Shell-home")
//        await browser.pause(9000)//подождать
//        await $("#__xmlview3--numericTileContent").click()
//        await browser.pause(9000)
  
//        await $("OOC - case 304435295_1").click()
       
//})
})