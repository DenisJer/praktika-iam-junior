const sudetiDviReiksmes = function (skaicius1, skaicius2) {
    console.log(skaicius1 + skaicius2)
}
function pasveikinimas(vardas, pavarde, amzius) {
    console.log(`Labas vakaras ${vardas} ${pavarde} Jum yra - ${amzius} metai`)
}
let vardas = 'Denisas'
console.log(vardas) // Denisas
vardas = 'Auste'
console.log(vardas) // Auste
console.log( typeof vardas  ) // String - primityvus kintamojo tipas

let amzius = 35
console.log(typeof amzius) // Number 
amzius = '35';
console.log(typeof amzius) // Stinga


let pilnametis = true;
let vaikas = false;
console.log(typeof pilnametis) // Boolean
console.log(typeof vaikas) // Boolean

let tusciaReiksme = null
console.log(typeof tusciaReiksme) // Object
let tusciaReiksme2;

let nepriskirtaReiksme;
console.log(typeof nepriskirtaReiksme) // Undefined
console.log(nepriskirtaReiksme) // Undefined

console.log(tusciaReiksme) // 2

let skaicius1 = 1;
let skaicius2 = 1;
console.log(skaicius1 === skaicius2); // true

let amziausMasyvas = [12, 15, 18, 4, 35, 31];
console.log(amziausMasyvas) // [12, 15, 18, 4, 35, 31]
console.log(typeof amziausMasyvas) // Object
console.log(amziausMasyvas[0]) // 12
console.log(amziausMasyvas[1]) // 15
console.log(amziausMasyvas[2]) // 18
console.log(amziausMasyvas[3]) // 4
console.log(amziausMasyvas[4]) // 35
console.log(amziausMasyvas[5]) // 31
console.log(amziausMasyvas[6]) // undefined
console.log(amziausMasyvas.length) // 6

amziausMasyvas.push(45)
console.log(amziausMasyvas) // [12, 15, 18, 4, 35, 31, 45]
amziausMasyvas = [...amziausMasyvas, 45]
console.log(amziausMasyvas) // 12, 15, 18, 4, 35, 31, 45

// [12, 15, 18, 4, 35, 31, 45, 45]

// 1 === 1 -> true
let arr = [1, 2];
let arr2 = [1, 2];

let arr3 = [...arr];

console.log(arr === arr2) // false
console.log(arr3 === arr) // false


let asmuo = {
    vardas: 'Denisas',
    'pilnas vardas': 'Denisas Jersovas',
}

let asmuo2 = {
    vardas: 'Denisas',
    'pilnas vardas': 'Denisas Jersovas',
}

let asmuo3 = asmuo2

console.log(asmuo) // { vardas: 'Denisas }
console.log(asmuo.vardas) // Denisas
console.log(asmuo["vardas"]) // Denisas
console.log(asmuo["pilnas vardas"]) // Denisas Jersovas

console.log(asmuo.vardas === asmuo2.vardas) // true
console.log(asmuo2 === asmuo3)

console.log(1+1) // 2
console.log(2024-1989) // 35
console.log(2/2) // 1
console.log(2*2) // 4
console.log(  2 * (2+2)   ) // 8


if (18 !== 19) {
    console.log('Jus pilnametis')
} else {
    console.log('Negalime parduoti jum prekiu')
}


let x = 2;
let y = 3;

console.log(x < 10 && y < 1)
console.log(x == 2 || y == 5)
console.log(!false)

console.log(document.getElementById('read-more-btn'))

const readMoreBtn = document.getElementById('read-more-btn')
console.log(readMoreBtn)

readMoreBtn.innerText = 'Denisas';
readMoreBtn.innerHTML = '<p>Denisas 2</p>'
readMoreBtn.style.backgroundColor = 'blue'
readMoreBtn.style.width = '500px'





let cardContentElements = document.getElementsByClassName('card__content')

let masyvas = [1,2,3,4];

for (let i = 0; i < cardContentElements.length; i++) {
    let newPrimaryBtn = document.createElement('a')
            newPrimaryBtn.textContent = `Read more ${i}`
    newPrimaryBtn.href = 'https://google.com'
    newPrimaryBtn.classList.add('btn-primary')
    newPrimaryBtn.id = `new-read-more-btn-${i}`

    console.log(newPrimaryBtn)
    cardContentElements[i].appendChild(newPrimaryBtn)
}

masyvas.forEach((elementas, indexas) => {
    console.log(`masyvo reiksme - ${elementas}, jo indexas - ${indexas}`)
})


pasveikinimas('Denisas', 'Jersovas', 35);
pasveikinimas('Auste', 'Jersova', 33);
pasveikinimas('Emile', 'Jersovaite', 4);

sudetiDviReiksmes(2, 5)
sudetiDviReiksmes(3, 5);

(function() {
    console.log('Kodas is 150eilutes buvo ivykdytas')
})()

const contactUsBtn = document.getElementById('contact-us-btn')

contactUsBtn.addEventListener('mouseover', function(){
    alert('Mygtukas paspaustas')
})

// document.addEventListener('keydown', function(event){
//     console.log(event.key)
//     if(event.key === 'd'){
//         alert('labas denisai')
//     }
// })

const teskstinisLaukas = document.getElementById('tekstinis-laukas')
const tekstinioLaukoReiksme = document.getElementById('tekstinio-lauko-reiksme')

// teskstinisLaukas.addEventListener('blur', function(){
//     console.log(teskstinisLaukas.value)
//     tekstinioLaukoReiksme.textContent = teskstinisLaukas.value
// })

const forma = document.getElementById('forma')
forma.addEventListener('submit', function(event){
    event.preventDefault();
    if (teskstinisLaukas.value.trim()){
        tekstinioLaukoReiksme.textContent = 'Forma validi'
        tekstinioLaukoReiksme.style.color = 'green';

        // nusiusti duomenis i back enda
        setTimeout(function(){
            window.location.href = 'https://www.google.lt'
        }, 3000)
    } else {
        tekstinioLaukoReiksme.textContent = 'Forma nevalidi'
        tekstinioLaukoReiksme.style.color = 'red';
    }
})