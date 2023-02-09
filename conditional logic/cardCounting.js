var counter = 0;

function cardCount(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            counter ++
            break
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            counter--
            break
    }
    var bet = 'hold'
    if(counter > 0){
        bet = 'bet'
    }
    return counter + " " +  bet
}

cardCount(3); 
cardCount(10); 
cardCount(2); 
cardCount(7); 
cardCount('K'); 
console.log(cardCount('Q'))
