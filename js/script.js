

/* 
KONTROLLER:
'1' - Ändra bakgrundsfärg på knapp nummer 2.
'2' - Ändra bild på den mellersta tröjan till grön.
'3' - Ändra h2 'Sinus Hoodie' till 'Nlå Hoodie' i art-3.
'4' - Lägger till en ul som innehåller tre li som listar de olika tröjorna.
Tryck på 'buy 1' knapp 1 för att ändra bakgrund på art-1.
Tryck på 'buy 2' knapp 2 för att ta bort adressen.
RESET - Återställer allt i sin originalform.
*/

// Återställsknappen - som vi gjorde under föreläsningen
let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';
reset.addEventListener('click', resetAll)

// Eventlistener för första knappen 'buy-1'.
let knapp1 = btns[0];
knapp1.addEventListener('click',
    function(event){
        knappA();
    }
);

// Eventlistener för andra knappen 'buy 2'.
let knapp2 = btns[1];
knapp2.addEventListener('click',
    function(event){
        knappB();
    }
);

// Funktionen som resetar ALLT! Här har jag då lagt motsatserna till de ändringar som görs
// alltså när man trycker på 'RESET' så körs koden nedan och då återställs allt.
function resetAll(){
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'white';
    let hoodie = document.querySelector('.art-2 img');
    hoodie.setAttribute('src', 'img/hoodie-fire.png');
    let btn = document.querySelector('.art-2 button');
    btn.style.backgroundColor = 'black';
    let h2 = document.querySelector('.art-3 h2');
    h2.innerText = 'Sinus Hoodie';
    
    let selectLi = document.querySelectorAll('li');

    selectLi[0].remove();
    selectLi[1].remove();
    selectLi[2].remove();

    let removeAdressd = document.querySelectorAll('p')
    removeAdressd[3].style.display = 'flex';  
}



// Funktionen för den första knappen 'buy-1'. Alltså om man trycker på buy 1 så kommer bakgrundsfärgen ändras på .art-1.
function knappA(){
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'rebeccapurple';
}

// Funktionen för den andra knappen 'buy-2'. Alltså kommer adressen att försvinna när man trycker på buy 2.
function knappB(){
    let removeAdress = document.querySelectorAll('p')
    removeAdress[3].style.display = 'none';
    
}

// Här finns funktionen som gör att man kan trycka på tangenterna mellan 1 och 4 så händer olika saker.
// jag valde att ha med eventlistener där användaren får trycka på olika knappar för att saker ska hända.
// Det innebär att om något av dessa påståendena är sanna så kommer koden i kodblocket att köras.
// Om då användaren trycker på tangenten '3' så kommer då koden i det tredje kodblocket att köras.
let htmlElement = document.querySelector('html');
htmlElement.addEventListener('keydown', 
    function(event){
        
        let art2 = document.querySelector('.art-2');
        let btn = document.querySelector('.art-2 button');
        let hoodie = document.querySelector('.art-2 img');

        if(event.key === '1'){
            btn.style.backgroundColor = 'blue';
        }
        else if(event.key === '2'){
            hoodie.setAttribute('src', 'img/hoodie-forrest.png');
        }
        else if(event.key === '3'){
            let h2 = document.querySelector('.art-3 h2');
            h2.innerText = 'Blå Hoodie';
        }
        else if(event.key === '4'){
            let bodyElement = document.querySelector('body');
            let newUl = document.createElement('ul');
            bodyElement.appendChild(newUl);

            let newLiOne = document.createElement('li');
            let newLiTwo = document.createElement('li');
            let newLiThree = document.createElement('li');

            newUl.appendChild(newLiOne);
            newUl.appendChild(newLiTwo);
            newUl.appendChild(newLiThree);

            newLiOne.innerText = 'Sinus Hoodie Ash';
            newLiTwo.innerText = 'Sinus Hoodie Fire';
            newLiThree.innerText = 'Sinus Hoodie Water';

            newLiOne.style.border = 'thick solid red';
            newLiTwo.style.border = 'thick solid blue';
            newLiThree.style.border = 'thick solid red';
        }
    }
);

