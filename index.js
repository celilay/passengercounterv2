let saveEl = document.getElementById("save-el")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")
let people = document.querySelector(".people");
let toplam = localStorage.getItem("toplam")
let sayac = 0;


if( gecmisBilgi !== null) {
    saveEl.textContent = localStorage.getItem("gecmisBilgi")
    sayac += parseInt(localStorage.getItem("toplam"))
} else {
    saveEl.textContent = ""
}

if( toplam !== null) {
    people.textContent = localStorage.getItem("toplam")
} else {
    sayac.textContent = ""
}



let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    sayac += count
    localStorage.setItem("toplam",sayac)
    console.log(sayac)
    localStorage.setItem( "gecmisBilgi", saveEl.textContent )
    countEl.textContent = 0
    count = 0
    people.textContent = sayac
}



