
        // find knap i dom
        const calculateButton = document.getElementById('calculateButt');

        // event handler
        calculateButton.addEventListener('click', (e) => {
        e.preventDefault();
        //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
        gatherInputData();
        }); 
    

function gatherInputData(){
    const myDanishAmount = document.getElementById("danishAmount").value;
    const myDollarRate = document.getElementById("dollarRate").value;
    const myEuroRate = document.getElementById("euroRate").value;

makeExchange(myDanishAmount, myDollarRate, myEuroRate);
}



function calculateExchange(danishAmount, exchangeRate){
    const exchangedAmount = danishAmount/exchangeRate;
    return exchangedAmount;
    
}



function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';
    
}


function makeExchange(myDanishAmount, myDollarRate, myEuroRate ){
    let myDollar = calculateExchange(myDanishAmount, myDollarRate);
    let myEuros = calculateExchange(myDanishAmount, myEuroRate);

    showResult(myEuros, myDollar, myDanishAmount);

}