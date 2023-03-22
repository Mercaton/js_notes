// dzień 2 zadanie 1 D.O.M

// const h1Tag = document.querySelector('h1');
// const h1tag2 = document.getElementsByTagName('h1');
// const title = document.querySelector('title');
// const title2 = document.getElementsByClassName('title');
// const dataAnimation = document.querySelector('[data-animation]');
//
// console.log(h1Tag)
// console.log(title);
// console.log(dataAnimation);

// zadanie 2

// const divNumbers = document.querySelectorAll('div').length;
// console.log(divNumbers);
//
// const offersNo = document.querySelectorAll('.oferts').length;
//
// console.log(offersNo);
//
// const hrefNo = document.querySelectorAll('[href]').length;
// console.log(hrefNo);


// zadanie 3
//
// const home = document.querySelector('#home');
// const home2 = document.getElementById('home');
//
// const liTag = document.querySelector('li[data-direction]:first-child');
// console.log(liTag);
//
// const block = document.getElementsByClassName('block')[0];
// const block2 = document.querySelector('.block:first-child');
// console.log(block);




// const liTags = document.querySelectorAll('nav:not(.navbar) li');
// console.log(liTags);
//
// const paragraphs = document.querySelectorAll('div p');
// const divs2 = document.getElementsByTagName('div');
// const paragraphs2 = [];
//
//
// for (const div  of divs2){
//     const result = div.getElementsByTagName('p');
//     if (result.length) {
//         paragraphs2.push(result);
//     }
// }
//
// console.log(paragraphs2);
//
//
// const selector = 'article div'


// zadanie 4

// const articleTag = document.querySelector('article.first');
// const h2Counter = articleTag.querySelectorAll('h2');
// console.log(h2Counter.length);
//

// Dzień 2 Elementy Zadanie 1

// function getDataInfo(elements) {
//     const data = [];
//
//     elements.forEach((element) => {
//         data.push(element.dataset)
//     });
//     return data;
//
// }
// const links = document.querySelectorAll('li');
// console.log(getDataInfo(links));

// zadanie 2

const home = document.getElementById("home");
const children = document.querySelector(".oferts").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
// const listElements = document.querySelector(".links").querySelectorAll("li");

// for (const child of children){
//     console.log(child.tagName, child.classList);
//
// }

// zadanie 3

// for (let i = 0; i < someBlocks.length; i++){
//     someBlocks[i].innerText = 'Nowa wartość diva o klasie blocks';
// }
//
// for (const block of someBlocks){
//     block.innerText = 'Eluwina';
//
// }
// someBlocks.forEach((Element) => {
//     block.innerText = 'Xd';
//
// })