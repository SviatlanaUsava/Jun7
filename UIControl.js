const expectchai = require("chai").expect//показать драйверу что надо взять из чай этот метод сравнения
describe ('Ecomerce app',async()=> 
{

    xit('pop up message and static dropdown',async()=> // Result :????//element (".btn-primary") still not existing after 10000ms
{
    browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
    await $("input[name='username']").setValue("rahulshettyacademy")
    const password = $("//input[@type='password']")
    await password.setValue("learning")
    const radioButtons = await $$(".customradio")// если  у 2х элементов одинаковое имя класса то создать список и  указывая $$ поместить 2 элемента 
    const userDropdown = radioButtons[1] // 1 элемент в списке индекс 0 2й эл-т интекс 1
    await userDropdown.$("span").click() //chaining locators-
    const modal = await $(".modal-body")
    await modal.waitForDisplayed()
    await $("#cancelBtn").click()
    console.log(await $$(".customradio")[0].$("span").isSelected())
    await userDropdown.$("span").click()
    await modal.waitForDisplayed()
    await $("#okayBtn").click();
    //validate pop up not shown up when you select admin
    await $$(".customradio")[0].$("span").click()
    await expect(modal).not.toBeDisplayed()
    //Static dropdown Ниже сработает выбор из выпадающего списка только при наличии тэга select
    const dropdown = await $("select.form-control") //переменная выпадающий список является таким селекторомselect tag  important to write it in selector
    await dropdown.selectByAttribute('value','teach') // в переменной= элементу dropdown, выбрать и кликнуть  по атрибуту со значением 'value','teach'
    await dropdown.selectByVisibleText("Consultant") //выбрать по атрибуту со значением Consultant
    await dropdown.selectByIndex(0)//выбрать 1 элемент из выпадающего списка
    await browser.pause(5000)
    console.log(await dropdown.getValue())// вернуть значение выподающего списка
    // //chai assertions строку со сторокой длинну символа равные стринги и тд
     expectchai(await dropdown.getValue()).to.equal("stud")//для этого импортироваои чай


    
})

xit('Dynamic Dropdown Controls', async()=>
{
    await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
    await $("#autocomplete").setValue("ind")
    await browser.pause(3000)
    let items = await $$("[class='ui-menu-item'] div")
    for (var i =0;i<await items.lengs;i++) //итерировать все элементы
    {
        if (await items[i].getText() === "India")//проверяя соответствует ли каждый индии
        {
            await items[i].click()//подождать правлильный эл-т и кликнуть
           // await browser.pause(9000)
        }
    }

 it("Checkboxes authentification", async ()=>{
     await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
     const element = $$("input[type ='checkbox']")//прписываем селектор для всех чекбоксов 
     await element[1].click()  //rкликнуть на 2м элементе в доме [1] индекс 2 го элемента
     console.log(element[1].isSelected()) //in result  true
     console.log(element[2].isSelected())//in result  false 
     await browser.saveScreenshot("screenshot.png")//сделать скриншот
 
}
 
)

})

})
//})