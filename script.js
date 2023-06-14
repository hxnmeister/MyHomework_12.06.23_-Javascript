//Перша частина
//Завдання №1
/*const userName = prompt("Як Вас звати?","Наприклад: Василь");

alert(`Привіт, ${userName}!`);*/

//Завдання №2
/*const currentYear = 2023;
const usersBirthYear = prompt("Введіть рік Вашого народження","Наприклад: 2001");

currentYear > usersBirthYear ? alert(`Ваш вік: ${currentYear - usersBirthYear} років`) : alert("Рік вказано некоректно!");*/

//Завдання №3
/*const userNumber = prompt("Введіть тризначне число", "Наприклад: 341");

userNumber > 99 && userNumber < 1000 ? alert(`${userNumber%10}${Math.floor(userNumber/10%10)}${Math.floor(userNumber/100)}`) : alert("Значення введено некоректно!");*/

//Завдання №4
/*const userNumber = prompt("Введіть ціле чило","Наприклад: 12");

userNumber % 2 ? alert("Число непарне!") : alert("Число парне!");*/
//--------------------------------------------------------------------

//Друга частина
//Завдання №1
/*const userPurchaseAmount = prompt("Введіть суму покупки","");

if(userPurchaseAmount >= 200 && userPurchaseAmount <= 300)
{
    alert(`Сума покупки разом зі знижкою 3%: ${userPurchaseAmount - userPurchaseAmount * 0.03} грн.`);
}
else if(userPurchaseAmount > 300 && userPurchaseAmount <= 500)
{
    alert(`Сума покупки разом зі знижкою 5%: ${userPurchaseAmount - userPurchaseAmount * 0.05} грн.`);
}
else if(userPurchaseAmount > 500)
{
    alert(`Сума покупки разом зі знижкою 7%: ${userPurchaseAmount - userPurchaseAmount * 0.07} грн.`);
}
else
{
    alert("Знижка на таку суму не передбачена!");
}*/

//Завдання №2
/*const convertCurrency = prompt("Введіть кількість валюти($) для конвертації","Наприклад: 201");

if (convertCurrency > 0) 
{
  const selectedCurrency = prompt("Введіть в яку валюту бажаєте конвертувати\nДоступні валюти: EUR, UAH, AZN");
  switch (selectedCurrency) 
  {
    case "EUR":
        alert(`Після конвертації USD в EUR Ви отримаєте: ${convertCurrency * 0.93}$`);
      break;
    case "UAH":
        alert(`Після конвертації USD в EUR Ви отримаєте: ${convertCurrency * 36.94}грн.`);
      break;
    case "AZN":
        alert(`Після конвертації USD в EUR Ви отримаєте: ${convertCurrency * 1.7}man`);
      break;
    default:
      alert("Назва валюти була введно некоректно,\nперезавантажте сторінку та спробуйте ще раз!");
      break;
  }
} else 
{
  alert("Кількість валюти була введно некоректно,\nперезавантажте сторінку та спробуйте ще раз!");
}*/

//Завдання №3
/*const userYear = prompt("Введіть рік для перевірки чи є він високосним","Наприклад: 2019");

alert(`${userYear} - ${(((userYear % 400 === 0) || (userYear % 4 === 0)) && (userYear % 100 !== 0) ? "високосний" : "невисокосний")}`);*/
//--------------------------------------------------------------------

//Третя частина
//Завдання №1
/*let rangeBegin = prompt("Введіть початок діапазону","");
let rangeEnd = prompt("Введіть кінець діпазону","");

if(rangeBegin > 0 && rangeEnd > 0)
{
    let result = 0;

    if(rangeBegin > rangeEnd)
    {
        let temp = rangeBegin;
        rangeBegin = rangeEnd;
        rangeEnd = temp;
    }

    while(rangeBegin <= rangeEnd) result += rangeBegin++;
    alert(`Сумма всіх чисел у діапазоні: ${result}`);
}
else
{
    alert("Значення мають бути більшими за 0!");
}*/

//Завдання №2
/*let min = 0;
let max = 100;
let guessNumber;
let userChoice;

do
{
    guessNumber = Math.round((min + max) / 2);

    userChoice = prompt(`Ваше число > ${guessNumber}, < ${guessNumber} або =${guessNumber}`, "Наприклад: =");

    switch(userChoice)
    {
        case ">":
            min = guessNumber + 1;
        break;
        case "<":
            max = guessNumber - 1;
        break;
        case "=":
            alert("Вітаємо, Ви перемогли!");
            break;
        default:
            alert("Ви ввели некоректу дію, повторіть ще раз!");
        break;
    }
}while(userChoice != "=");*/

//Завдання №3
/*const arr = [];
const height = 10;

for(let i = 0, j = 2; i < height + 1; i++)
{
    if(i <= (height + 1) / 2)
    {
        arr.push(new Array(i).fill("*"));
    }
    else
    {
        arr.push(new Array(i - j).fill("*"));
        j += 2;
    }

    alert(arr.join("\n"));
}*/
//--------------------------------------------------------------------

//Четверта частина
//Завдання №1
/*function equality(number1, number2)
{
    if(number1 < number2) return -1;
    else if(number1 === number2) return 0;
    
    return 1;
}

alert(equality(2,2));*/

//Завдання №2
/*function timeOnScreen(hours = "00", minutes = "00", seconds = "00")
{
    return Number(hours) < 25 && Number(minutes) < 60 && Number(seconds) < 60 ? `${hours}:${minutes}:${seconds}` : "00:00:00";
}

alert(timeOnScreen(12,34,65));*/

//Завдання №3
/*function dateDiff(hours1, minutes1, seconds1, hours2, minutes2, seconds2)
{
    let res = ((hours1 * 3600) + (minutes1 * 60) + seconds1) - ((hours2 * 3600) + (minutes2 * 60) + seconds2);
    if(res < 0) res*=-1;

    return `${Math.floor(res / 3600)}:${Math.floor((res % 3600) / 60)}:${res % 3600 % 60}`;
}

alert(dateDiff(2,15,40,4,5,10));*/
//--------------------------------------------------------------------

//П`ята частина
//Завдання №1
/*function greatestCommonDenominator(number1, number2)
{
    if(number1 === number2)
    {
        return number1;    
    }
    else
    {
        return number1 > number2 ? greatestCommonDenominator(number1 - number2, number2) : greatestCommonDenominator(number1, number2 - number1);
    }
}

alert(greatestCommonDenominator(55,31));*/

//Завдання №2
/*function multipliers(value, temp = [], index = 2)
{
    if(value === 1)
    {
        return temp.join("*");
    }
    else
    {
        if(value % index === 0)
        {
            temp.push(index);
            return multipliers(value/index, temp, index);
        }
        else
        {
            ++index;
            return multipliers(value, temp, index);
        }
    }
}

alert(multipliers(200));*/

//Завдання №3
/*function fibonaciNumbers(value)
{
    if(value <= 1)
    {
        return value;
    }
    else
    {
        return fibonaciNumbers(value - 1) + fibonaciNumbers(value - 2);
    }
}

alert(fibonaciNumbers(6));*/
