const expectchai = require('chai').expect   //это для 18 строки JS allerts 

describe('Functional Testing on  Application',()=>
{
   xit('Scrolling and Mouse hover',async()=>
   {

    await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
    await $("#mousehover").scrollIntoView()//Проскролить пока не будет видно
    await browser.pause(3000)//подождать
    await $("#mousehover").moveTo()//подвести к этому элементу
    await browser.pause(3000)//подождать
    await $("=Top").click()//так записывать селектор ссылки с текстом топ  <a href ="#top">Top</a>
    // End of mouse Hover program
    //!!!Handling Java\JS alerts which are not part of browser. No web elements in inspector for them
    await browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
    await $("button").doubleClick()// метод двойной клик
    console.log(await browser.isAlertOpen())//вывести в консоль проверить если сообщение появилось
    expectchai(await browser.isAlertOpen()).to.be.true// проверить если оно есть
    expectchai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")// проверить что текст сообщения соответствует закавыченому
    await browser.acceptAlert()// чтобы кликнуть на ок и закрыть сообщение
    await browser.pause(3000)

})
})
   xit('Web Tables Sort validation Smoke',async()=>// Cортировка товаров  в таблице по алфавиту  цене
{
   await browser.url("https://www.rahulshettyacademy.com/seleniumPractise/#/offers")
   await $("tr th:nth-child(1)").click()// если нет для селектора уникальных атрибутов идем от р к ребенку  tr тег родителя 3х  элементов  th  таг первого ребенка, нужен 1 пишем как  :nth-child(1)
     //1 шаг retrive list of veggie names into array A  в список а
    //2 шаг sort the array A ->Array B  сортируем список кликая га кнопку и создается список в
    //3 шаг compare Array A and Array B //fail   сравнить 2 списка  если они идентичны то тест прошел
    const veggiesLocators =  await $$("tr td:nth-child(1)")// из всех эл-тов под тагом tr  возьмите первого// это коллекция локаторов
    const OriginalveggiesNames = await veggiesLocators.map(async veggie=> await veggie.getText())// это колекция названий по локаторам// метод мар для получение нового списка из имеющегося всех локаторов и их текста и положить в список
    console.log(OriginalveggiesNames)
    sortedVeggies = veggies.sort() //2 шаг
    console.log(OriginalveggiesNames)
    veggies = OriginalveggiesNames.slice() //gives a coppy of names
    //  //Arrays are pass by reference
    sortedVeggies = veggies.sort()
    console.log(sortedVeggies)
    expectchai(OriginalveggiesNames).to.eql(sortedVeggies)//3 шаг сравнивает строки со строками
    
xit('Web Tables Sort validation Smoke',async()=>
    {
       await browser.url("https://www.rahulshettyacademy.com/seleniumPractise/#/offers")
       await $("tr th:nth-child(1)").click()
        //retrive list of veggie names into array A
        //sort the array A ->Array B
        //compare Array A and Array B //fail
        const veggiesLocators =  await $$("tr td:nth-child(1)")
        const OriginalveggiesNames = await veggiesLocators.map(async veggie=> await veggie.getText())
        console.log(OriginalveggiesNames)
        veggies =  OriginalveggiesNames.slice()
         //Arrays are pass by reference
        sortedVeggies = veggies.sort()
        console.log(sortedVeggies)
         expectchai(OriginalveckleggiesNames).to.eql(sortedVeggies)
    
    
    })
it('Web Tables Filter validation',async()=>
    {
         await browser.url("https://www.rahulshettyacademy.com/seleniumPractise/#/offers")
         await $("input[type='search']").setValue("tomato")
         //await browser.pause(4000)
         const veggieLocators =await $$("tr td:nth-child(1)")//первй чаилд
         await expect(veggieLocators).toBeElementsArrayOfSize({eq:1})//одно слово
        console.log(await veggieLocators[0].getText())//нулевой индекс у слова томато которое явл первым
        await expect(await veggieLocators[0]).toHaveTextContaining("Tomato")//нулевой локатор имеет текст томато
    
    
    
    })
    
})