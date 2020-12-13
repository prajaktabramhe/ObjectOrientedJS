let StockShareClass = require('./StockAccountBusinessLogic.js');
const fs = require('fs');
let jsonFile = require('./StockAccount.json');
let readline = require('readline-sync');
let flag = true;
let stockdata = fs.readFileSync('./StockAccount.json');
let Sharestock = JSON.parse(stockdata);

//function to choose options
function ShareFun()
{

    while (flag == true)
    {
        console.log(" 1 : Each shares Price");
        console.log(" 2 : Total Share price");
        console.log(" 3 : Add share");
        console.log(" 4 : Exit");
        
        let choice = readline.question("Enter your choice from above : ");
        
        switch (choice) 
        {
            case "1":
                    let i=0;
                    let len=Sharestock.Stock.length;
                while( i < len)
                {
                    let ShareName = Sharestock.Stock[i].name;
                    let ShareQuantity = Sharestock.Stock[i].numberOfShares;
                    let SharePrice = Sharestock.Stock[i].price;
                    let shareObj = new StockShareClass(ShareName, ShareQuantity, SharePrice);
                    shareObj.eachsharePrice(); //for each shareprice
                    i++;
                }
            break;
            case "2":
                    let j=0,temp=0,total=0;
                    let size =Sharestock.Stock.length;
                while( j < size)
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
                     let Name = readline.question("enter name");
                     let NumberOfShare = readline.question("enter number of Share");
                     let Price = readline.question("enter price");
                     let addstockdata = {
                     "name" : Name,
                     "numberOfShares" : NumberOfShare,
                     "price" : Price};
                      Sharestock.Stock.push(addstockdata);
                      fs.writeFileSync('./Stock.json', JSON.stringify(Sharestock));
            break;
            case "4":
                      flag = false;
            break;
            
                    
            default:
                      console.log("Invalid Option");
            break;
        }
    }
}


ShareFun();