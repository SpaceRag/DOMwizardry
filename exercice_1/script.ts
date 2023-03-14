// Exercice 1

// Récupérer l'element du DOM contenant la phrase "Cible moi 🎯" à l'aide d'un getElementById
// Affichez l'element dans la console

function exo1() {
    const domElement = document.getElementById('first_cible')

    console.log(domElement)
}
// exo1()
// Exercice 2

// Récupérer les elements du DOM contenant la phrase "Cible moi 🎯" à l'aide d'une getElementsByClassName
// Affichez les elements dans la console
function exo2() {
    const domElements = document.getElementsByClassName('All_cibles')

    console.log(domElements)
}
// exo2()

// Exercice 3

// Écouter le click de l'utilisateur sur le bouton "Hello !" à l'aide d'un eventListener
// À chaque click vous afficherez "Hey dude!" dans la console

    const querySelector = document.querySelector('.button')

    if (querySelector) {
        querySelector?.addEventListener('click' , getClickEvent')
    }

    function getClickEvent() {
        console.log('Hello world !')
}

getClickEvent()
// Exercice 4

// Écouter le click de l'utilisateur sur les boutons "+" et "-"
// À chaque click vous augmenterez / diminuerez une variable contenant un chiffre et l'afficherez dans la console

// Exercice 5.1

// Écouter le text saisi par l'utilisateur dans l'input
// À chaque modification vous afficherez la valeur de l'input dans la console

// Exercice 5.2

// Remplacer le paragraph contenant "Remplacer par la saisie de l'utilisateur" par la valeur de l'input en direct



// CORRECTION EXO ////////////////////////////////////////////////////////////////////////




// Exercice 1

// Récupérer l'element du DOM contenant la phrase "Cible moi 🎯" à l'aide d'un getElementById
// Affichez l'element dans la console

const domExoOne: HTMLElement | null = document.getElementById('exoOne')

// Exercice 2

// Récupérer les elements du DOM contenant la phrase "Cible moi 🎯" à l'aide d'une getElementsByClassName
// Affichez les elements dans la console

const domExoTwo: HTMLCollectionOf<Element> = document.getElementsByClassName('exoTwo')

// Exercice 3

// Écouter le click de l'utilisateur sur le bouton "Hello !" à l'aide d'un eventListener
// À chaque click vous afficherez "Hey dude!" dans la console

const domExoThree: HTMLElement | null = document.getElementById('exoThree')

function handleUserClick(event) {
    console.log('Hey dude!')
}

if (domExoThree) {
    domExoThree.addEventListener('click', handleUserClick)
}

// Exercice 4

// Écouter le click de l'utilisateur sur les boutons "+" et "-"
// À chaque click vous augmenterez / diminuerez une variable contenant un chiffre et l'afficherez dans la console

let count: number = 0

const domIncrementButton: HTMLElement | null = document.getElementById('incrementButton')
const domDecrementButton: HTMLElement | null = document.getElementById('decrementButton')

function handleUserCount(event) {
    const buttonType: string = event.target.id

    if (buttonType === 'incrementButton') {
        count++
    } else if (buttonType === 'decrementButton') {
        count--
    }

    console.log(count)
}

function incrementation(event) {
    count ++
    console.log(count)
}

function decrementation(event) {
    count --
    console.log(count)
}

if (domIncrementButton && domDecrementButton) {
    domIncrementButton.addEventListener('click', handleUserCount)
    domDecrementButton.addEventListener('click', handleUserCount)
}