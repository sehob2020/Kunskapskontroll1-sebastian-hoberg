
// återställsknappen
let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';

reset.addEventListener('click', resetAll)

//sätt event listener för första knappen
let knapp1 = btns[0];
knapp1.addEventListener('click',
    function(event){
        changeArt1toHotPink();
        changeH2inArt2();
    }
);

function resetAll(){
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'white';

    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Sinus Hoodie';
    //tror man måste göra om alla sina ändringar här
}

function changeH2inArt2(){
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Radikalt';
}

//ändra art-1 bakgrundsförg till hot pink
function changeArt1toHotPink(){
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'hotpink';
}