//const h1 = document.querySelector('page_title')
//use querySelector to get an element. Use # to grab by the ID
const h1 = document.querySelector ('#page_title') 

console.log (h1)

//change color of h1
h1.style.color = 'blue'

//grab p tag
const p1 = document.querySelector ('p')
console.log (p1)

//change the text between the p tag
//p1.innerHTML = "Hello there, idk idk"; p1.innerText = "Hello there"
p1.textContent = "hi, hi, hi"

//Create a list item and add to ol
const ol = document.querySelector ('ol')
// const li = document.createElement ('li')

// li.textContent = "this is the first list item"

// ol.appendChild (li)

//for loop
for (let i = 0; i < 5; i++) {
    const li = document.createElement ('li')
    li.textContent = i + 1
    ol.appendChild(li)
}
console.log (ol)

//remove final p tag
const p_last = document.querySelector('.removable')
p_last.remove()