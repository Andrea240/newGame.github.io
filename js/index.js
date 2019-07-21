/*var a = 'Hello world!'
var message = 'Hello world message!'

console.log(a + ' ' + message)*/


/*var number = 5
var string = 'хай всем'
var boolean = true
var obj = {a: 1}
var nul = null
var undef = undefined 


console.log(typeof boolean)*/

/*var num1 = 100 
var num2 = 45


console.log('+', num1 + num2)
console.log('-', num1 - num2)
console.log('*', num1 + num2)
console.log('/', num1 / num2)


var str1 = 'Hello'
var str2 = 'world!'


console.log(str1 + ' ' + str2)
console.log('1 + 2:', 1 + '2')*/
 
/*var result1 = 5 + 7 / 3
 
console.log(result1)*/
/*var ost = 7 % 3
console.log(ost)


var i = 5
++i 
i /= 5
console.log(i)*/
/*var prompts = (true && true) && (false || true) && !true || (true || !true) 
console.log(prompts)*/
/*var carName = 'Lada'
var carYear = prompt('Какого года выпуска ваша машина?')
var Year = 2019

carAge = Year - carYear
if (carAge < 5) {
    console.log('Возраст машины ' + carName + ' ' + carYear + ' года выпуска, меньше 5 лет!')
}else if ((carAge >= 5) && (carAge <= 10)) {
    console.log('Возраст машины ' + carName + ' ' + carYear + ' года выпуска, больше или равен 5 годам, но меньше или равен 10 годам.')
}else {
    console.log('Этому металолому ' + carAge + ' лет.')
}*/
/*(( NaN = 5) && (4 == 5)) ? console.log('Это блять 4') : console.log('Это блять не 4')

var personAge = prompt('Сколько тебе лет?')


var message = personAge >= 18 
? 'Человек совершеннолетний.' 
: 'Человек несовершеннолетний'

console.log(message)


var carColor = prompt('Введите цвет машины на английском языке с маленькой буквы')

switch (carColor) {
    case 'red':
       console.log('Машина красная')
       break
    case 'blue':
       console.log('Машина синяя')
       break
    case 'yellow':
       console.log('Машина жёлтая')
       break
    default: 
       console.log('Цвет не определён')
}

'семь' === 7 ? console.log('семь равно семи') : console.log('Семь не равно семи')*/

/*
var productName = prompt('Введите имя объекта в родительном падеже.')
var productYear = prompt('Какого года выпуска данный объект?')
var compareTo = prompt('Число для сравнения.')
var personYear = prompt('Каков возраст человека?')

function calculateAge(year) {
    var currentYear = 2019
    var end = currentYear - year
    return end 
}

function yearProducts (year, name, compareTo) {
if (calculateAge(year) < compareTo) {
    console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет.')
}else {
    console.log('Возраст ' + name + ' больше ' + compareTo + ' лет.')
}
}

yearProducts(productYear, productName, compareTo)



*/

/*

var personName = 'Андреа'


console.log('Имя того человека \'' + personName + '\'.')


var hi = 'Hello Andrea!!!'

console.log(hi.length)
console.log(hi.toUpperCase())
console.log(hi.toLowerCase())
console.log(hi.charAt(4))
console.log(hi.indexOf('Andrea'))
console.log(hi.substr(hi.indexOf('Andrea'), 6))
console.log(hi.substring(6,*/


/*
var cars = [
    'opel',
    'ford',
    'lada',
    'kia',
    'oka',
    'toyota',
]



var o = cars.indexOf('kia')
var num1 = cars[o]
console.log(num1)*/


/*var i = {
    name: 'Andrew Lutsevitch',
    year: 2001,
    gender: 'man',
    brother: 'Ivan',
    family: ['Саша', 'Люда'],
    car: {
        year: 2005,
        type: 'lada',
        color: 'green',
        number: '555',
    }, 
    calculateAge: function() {
        this.age = 2019 - this.year
    } 
} 
console.log(i)*/


/*var numbers = [1, 2, 3, 4, 5]

numbers.shift(0)

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        continue
    }
    alert(numbers[i])
}

*/

/*var div = document.getElementById('div')
var clas = document.getElementsByClassName('text')
var tag = document.getElementsByTagName('p')
console.log(tag, clas, tag)*/

/*var div = document.querySelector('#div')
var input = document.getElementById('input')
var tag = document.querySelector('.text')
var h1 = document.querySelector('h1')
tag.textContent = 'Пошёл на хер текст'
div.innerHTML = '<h2 style="color: blue;">hello world!</h2>'
console.log(div.innerHTML)
console.log(input.value)
console.log(tag.textContent);
*/
/*
var a = document.querySelector('a')
var oldHref = a.getAttribute('href')
a.setAttribute('href', 'https://yandex.ru')
a.setAttribute('title', 'click in yandex')
a.textContent = 'Yandex'


var box1 = document.querySelector('#box1')

var box2 = document.querySelector('#box2')

box1.classList.add('red')
box2.classList.remove('red')

var hasClass = box1.classList.contains('red')
console.log(hasClass)


if (hasClass) {
    alert('здесь есть класс')
}else {
    alert('его тут нет!')
}*/

/*
var button = document.querySelector('button')

var h1 = document.querySelector('h1')
var input = document.querySelector('input')

function buttonHendler() {
    h1.textContent = input.value
}
h1.addEventListener('mouseenter', function() {
    this.style.color = 'blue'
})
h1.addEventListener('mouseleave', function() {
    this.style.color = 'black'
})
button.addEventListener('click', buttonHendler)
*/


/*var divs = document.querySelectorAll('div')
var a = document.querySelector('a')


for(var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function(event) {
        event.stopPropagation()
        console.log(this.getAttribute('id'))
    })
}


a.addEventListener('click', function(event) {
    event.preventDefault()
    var div = divs[0]
   div.style.display = div.style.display === 'none'
    ? 'flex'
    : 'none'
    console.log(div.style.display)
})*/
/*
var p = document.querySelectorAll('p')

for (var i = 0; i < p.length; i++) {
        p[i].addEventListener('click', function(event) {
            event.target.style.color = 'blue'
        })
}*/


/*document.getElementById('wrapper').addEventListener('click', function(event) {
    var wrapper = event.target.tagName.toLowerCase()


    if (wrapper === 'p') {
        event.target.style.color = 'Cyan'
    }
    if (event.target.classList.contains('color')) {
        event.target.style.color = 'green'
    }
})

document.getElementById('btn').addEventListener('click', function(event) {
    alert('hello world!!!')
})*//*

document.getElementById('wrapper').addEventListener('click', function(event) {
    var wrapper = event.target.tagName.toLowerCase()

    if(wrapper === 'p') {
        event.target.style.color = 'red'
    }else {
        event.target.style.color = 'cyan'
    }
    

})*//*
document.querySelector('button').addEventListener('click', function(event) {
    var cont = document.querySelector('input').value
    var obj = {
        text: cont
    }
    var loc = localStorage.setItem('text1', JSON.stringify(obj))
})

*/
document.addEventListener('DOMContentLoaded', function() {
    timeResult.textContent = localStorage.getItem('resultTime')
    res.innerHTML = 'Ваш результат: ' + localStorage.getItem('result')
})


var $start = document.querySelector('#start')

$start.addEventListener('click', startGame)

var $game = document.querySelector('.grey')


var $time = document.querySelector('#time')

var $h1 = document.querySelector('#text')
var $input = document.querySelector('input')
var world = document.querySelector('.time_world')
var res = document.querySelector('.result_string')
var timeResult = document.querySelector('.time_result')

var myTime = setInterval(myTimeFunction, 1000)
function myTimeFunction() {
    var dataWorld = new Date()
    return world.innerHTML = dataWorld.toLocaleString()
}

$input.addEventListener('input', timeFunction)

var score = 0

var isStartedGame = false

function startGame() {
    score = 0
    isStartedGame = true
    $input.setAttribute('disabled', 'true')
    $h1.textContent = 'Время (сек): '
    $time.style.display = 'block'
    $game.style.background = '#ccc' 
    $start.style.display = 'none'
    timeNum()
    timeFunction()
    renderBox()
}
function timeFunction() {
    $time.textContent = (+$input.value).toFixed(1)
    $h1.textContent = 'Время (сек): '
    $time.style.display = 'block'
}

function timeNum() {
    var interval = setInterval(function() {
    var time = parseFloat($time.textContent).toFixed(2)
    if (time <= 0) {
        clearInterval(interval)
        endGame()
    }else {
        $time.textContent = (time - 0.1).toFixed(1)
    }
    }, 100)
}
function endGame() {
    isStartedGame = false
    $game.innerHTML = ''
    $input.removeAttribute('disabled')
    $time.style.display = 'none'
    $h1.textContent = ('Ваш результат: ' + score)
    $game.style.backgroundColor = 'grey' 
    $start.style.display = 'block'
    localStorage.setItem('resultTime', myTimeFunction())
    timeResult.textContent = localStorage.getItem('resultTime')
    localStorage.setItem('result', score)
    res.innerHTML = 'Ваш результат: ' + localStorage.getItem('result')
}

function renderBox() {
    $game.innerHTML = ''
    var gameSize = $game.getBoundingClientRect()
    var boxSize = getRandom(30, 90)
    var maxTop = gameSize.height - boxSize 
    var maxLeft = gameSize.width - boxSize
    var box = document.createElement('div')
    var arrColor = ['black', 'red', 'green', 'blue', 'cyan', 'brown', 'yellow', 'pink', 'black', '#00ff27']
    box.style.height = box.style.width = boxSize +'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = arrColor[randomColorNumber()]
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.setAttribute('data-box', 'true')
    box.style.cursor = 'pointer'
    
    $game.insertAdjacentElement('afterbegin', box)
}
$game.addEventListener('click', handleBlockClick)

function randomColorNumber() {
    return Math.floor(Math.random() * 10)
}

function handleBlockClick(event) {
    if(!isStartedGame) {
         return
    }
    if(event.target.dataset.box) {
        renderBox()
        score++
    }
}

if(+$input.value === -2) {
    $input.value = 0
}


function getRandom(min, max) { 
return Math.floor((Math.random() * (max - min) + min))
}
