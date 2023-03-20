const data = [
    {
        name: "pawel",
        age: 38,
        city: "krakow",
        hobbies: ["js", "python", "drugs"]
    },
    {
        name: "jakub",
        age: 20,
        city: "szczecin",
        hobbies: ["skateboard", "webDev", "gaming"]
    },
    {
        name: "Norbert",
        age: 46,
        city: "Kraków",
        hobbies: ["motoryzacja", "architektura", "komputery"]
    },
    {
        name: "adam",
        age: 31,
        city: "warszawa",
        hobbies: ["wow", "super", "fajne"]
    },
    {
        name: "paulina",
        age: 28,
        city: "dabrowa gornicza",
        hobbies: ['cycling', "volleyball", "movies"]
    },
    {
        name: "marcin",
        age: 37,
        city: "jesionka",
        hobbies: ["tennis", "skiing", "cooking"]
    },
    {
        name: "Jakub",
        age: 24,
        city: "Głowno",
        hobbies: ["football", "games", "music"]
    },
    {
        name: "kamil",
        age: 26,
        city: "warsaw",
        hobbies: ["dancing", "cycling", "reading"]
    },
    {
        name: "kasia",
        age: 34,
        city: "warszawa",
        hobbies: ["konie", "podroze", "old-timery"]
    },
    {
        name: "pawel",
        age: 41,
        city: "zabrze",
        hobbies: ["wfb", "running", "js"]
    }
];

//oblicz średnią wieku

// const avgAge = (persons) => {
//     let sumAge = 0;
//
//     for (const person of persons) {
//         sumAge += person.age;
//     }
//     return sumAge / persons.length;
//
//
// }
// const avgAge = (persons) => {
//     const ages = persons.map((person) => person.age);
//     return ages.reduce((acc, ce) => acc + ce) / person.length;
//
// }
//
// console.log(avgAge(data));



//średnia wieku dla osób z imieniem powyżej 5 znaków

// const avgAge2 = (people) => {
//     let sumAge = 0;
//     let counter = 0;
//
//     for (const person of people) {
//         if (person.name.length > 5) {
//             sumAge += person.age;
//             counter++;
//
//         }
//     }
//     return sumAge / counter;
// }

// const avgAge2 = (people) => {
//     const filteredPeople = people.filter((person) => person.name.length > 5);
//     const mappedPeople = filteredPeople.map((person) => person.age);
//
//     return mappedPeople.reduce((acc, ce) => acc + ce) / mappedPeople.length;
//
// }
//
// console.log(avgAge2(data));



// Tablica wszystkich imion od dużej litery

// const getAllNames = (elements) => {
//     const names = [];
//
//     for (const person of elements){
//         names.push(person.name[0].toUpperCase() + person.name.slice(1));
//     }
//     return names
//
// }


// function capitalize(text) {
//     return text[0].toUpperCase() + text.slice(1);
//
// }
//
// const getAllNames = (elements) => elements
//     .map((person) => person.name[0].toUpperCase() + person.name.slice(1))
//
// console.log(getAllNames(data));


// Sprawdź czy wszyscy mają 3 hobby

// const checkHobbies = (elements) => {
//     for (const element of elements){
//         if (elements.hobbies.length !== 3){
//             return false;
//         }
//     }
//     return true;
//
// }
//
//
// console.log(checkHobbies(data));
//
// const checkHobbies = (elements) => elements
//     .every((element) => element.hobbies.length === 3);
//
// console.log(checkHobbies(data));



// Zwróć tablicę z wszystkimi hobby


// const getAllHobbies = (elements) => {
//     const hobbies = [];
//     for (const element of elements){
//         for (const hobby of element.hobbies) {
//             hobbies.push(hobby);
//
//         }
//     }
//     return hobbies;
//
// }
//
// console.log(getAllHobbies(data));





// Zwrócić wszystkie imiona które lubią JS


// const getNamesWhoLovesJS = (items) => {
//     const names = [];
//
// //pusta tablica do trzymania imion
//
//     // iteracja po tablicy do przetwarzania każdego elementu z osobna
//     for (const item of items){
//         if (item.hobbies.includes('js')) {
//             names.push(item.name)
//         }
//
//     }
//     // sprawdzamy czy osoba ma JS w hobbies -> .includes
//
//     // dodajemy imię do tablicy imion
//     // zwracamy tablicę imion
//
//     return names
// }
//
// console.log(getNamesWhoLovesJS(data));

// const getNamesWhoLovesJS = (items) => items
//     .filter((item) => item.hobbies.includes('js'))
//     .map((item) => item.name)
//
//
// console.log(getNamesWhoLovesJS(data));



// sformatuj dane tak aby wyświetlić imię-miasto-wiek

// // function formatData(persons){
// //     // zmienna na nową tablicę
// //     const sentences = [];
// //     for (const person of persons){
// //         sentences.push(`${person.name} - ${person.city} - ${person.age}`)
// //     }
// //
// //     //przeiteruj po wszystkich elementach
// //     //do tablicy z danymi włóż (push) tekst wygenerowany przez template literal string `$`
// //
// //
// //     //zwróć tablice
// //     return sentences;
// // }
//
// console.log(formatData(data))

// const formatData = (persons) => persons.map(({name, city, age}) => `${name} - ${city} - ${age}`)
//
//
//
// console.log(formatData(data));




// const list = data
//     .map((item: {...}, id: number) => `${id}. ${capitalize(item.name)}, ${capitalize(item.city)}`);


// Policz ile jest niepowtarzalnych hobby

// function countUniqueHobby(elements) {
//     // tablica na unique hobby
//     const uniqueHobbies = [];
//     for (const element of elements){
//         for (const hobby of element.hobbies) {
//             if (!uniqueHobbies.includes(hobby.toLowerCase())){
//                 uniqueHobbies.push(hobby.toLowerCase());
//             }
//         }
// //zwróć ilość unikalnych hobby
//     }
//     return uniqueHobbies;
//
//
//
//     // loop  po wszystkick obiektach elements
//     // 2 loop po każdym hobby z osobna
//     // sprawdź czy już takie jest (uwzględnij wielkość liter), jeżeli nie ma to dodaj
//
//
// }
//
// console.log(countUniqueHobby(data));



// wyświetl imiona osób , które mają index podzielny przez 3

// function getLuckyPersons(items) {
//     //tablica na imiona
//     const luckyPersons = [];
//     for (let i = 0; i < items.length; i++) {
//         if (i % 3 === 0){
//             luckyPersons.push(items[i].name);
//         }
//     }
//     return luckyPersons.join(', ');
//
//
//     //loop po wszystkich elementach używając indexu
//     // sprawdzenie czy index podzielny przez 3 (modulo/remainder)
//     // dodać imię, jeżeli index podzielny przez 3
//
//
//     //zwrócić imiona jako tekst, oddzielone przecinkami
//
// }
//
// console.log(getLuckyPersons(data));

//to samo za pomocą metod tablicowych

const getLuckyPersons = (items) => items
    .filter((item, id) => id % 3 === 0)
    .map((item) => item.name)
    .join(', ');

