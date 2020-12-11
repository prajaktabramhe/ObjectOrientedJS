class DeckofCards 
{
    cardDestribution()
    {
        let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
        let deck=[];

        let i=0,j=0;
        while( i < suits.length)  //4
        {
            while( j < ranks.length) // 13
            {
                deck.push(ranks[j]+" of "+suits[i] );
                j=j+1;
            }
            j=0;
            i=i+1;
        }
         //let k=0;
        //while(k < deck.length)52
        //{
           // console.log(deck[k]);
           // k=k+1;
       // }

        let l=0;
        while( l < deck.length) //52
        {
            let random = Math.floor(Math.random() * deck.length);
            let temp = deck[random];
            deck[random] = deck[l];
            deck[l] = temp;
            l=l+1;
        }
        let m=1,n=0;
        while(m<=4)
        {
            console.log("Player "+ m + " is having following cards:");
            while(n < 9)
            {
                console.log(deck.pop());
                n=n+1;
            }
            n=0;
            m=m+1;
        }
        
    }
}
module.exports = DeckofCards;
