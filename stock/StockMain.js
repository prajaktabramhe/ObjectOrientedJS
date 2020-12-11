let StockShareClass = require('./StockBusinessLogic.js');
const fs = require('fs');
let jsonFile = require('./Stock.json');
let readline = require('readline-sync');
let flag = true;
let stockdata = fs.readFileSync('./Stock.json');
let Sharestock = JSON.parse(stockdata);

//function to choose options
function ShareFun()
{

    while (flag == true)
    {
        console.log(" 1 : Each shares Price");
        console.log(" 2 : Total Share price");
        console.log(" 3 : Exit");
        
        let choice = readline.question("Enter your choice from above : ");
        
        switch (choice) 
        {
            case "1":
                let i=0;
                while( i < 7)
                {
                    let ShareName = Sharestock.Stock[i].name;
                    let ShareQuantity = Sharestock.Stock[i].numberOfShares;
                    let SharePrice = Sharestock.Stock[i].price;
                    let shareObj = new StockShareClass(ShareName, ShareQuantity, SharePrice);
                    shareObj.eachsharePrice();
                    i++;
                }
                break;
            case "2":
                let j=0,temp=0,total=0;
                while( j < 7)
                {
                    let ShareName = Sharestock.Stock[j].name;
                    let ShareQuantity = Sharestock.Stock[j].numberOfShares;
                    let SharePrice = Sharestock.Stock[j].price;
                    let shareObj = new StockShareClass(ShareName, ShareQuantity, SharePrice);
                    temp=shareObj.eachsharePrice();
                    total=total+temp;
                    j++;
                    temp=0;
                }
                console.log("Total value of all Stock is : "+total);
                break;
            case "3":
                flag = false;
                break;
            
                    
            default:
                console.log("Invalid Option");
                break;
        }
    }
}
ShareFun();