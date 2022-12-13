// isi logic gamemu disini
// mengambil semua element a dengan looping 
    document.querySelectorAll("#option a").forEach((anchor) => {
    anchor.addEventListener("click", (element) => {
        computerChoice(element);
    })
})

function computerChoice(element){
    //menangkap pilihan user
    let pilihanUser = element.target.innerText;

    //menangkap pilihan komputer pada result
    let pilihanKomputer = document.querySelector('#result');

    //membuat pilihan untuk komputer
    let choices = ['Rock', 'Paper', 'Scissors'];

    //membuat pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.floor(Math.random() * choices.length)];
    pilihanKomputer =   pilihanKomputer.innerHTML;

    if(pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
        setTimeout(alert('you win'),100);
    }

    if(pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
        setTimeout(alert('you win'), 100);
    }
    if(pilihanUser == 'Scissors' && pilihanKomputer == 'paper'){
        setTimeout(alert('you win'), 100);
    }

    if(pilihanUser == 'Scissors' && pilihanKomputer == 'Rock'){
        setTimeout(alert('you lose'),100);
    }

    if(pilihanUser == 'Rock' && pilihanKomputer == 'Paper'){
        setTimeout(alert('you lose'), 100);
    }
    if(pilihanUser == 'Paper' && pilihanKomputer == 'Scissors'){
        setTimeout(alert('you lose'), 100);
    }

    //jika draw atau seri
    if(pilihanUser == pilihanKomputer){
        setTimeout(alert('Draw'), 100);
    }
}