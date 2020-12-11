let InventoryClass = require('./InventoryManagementBusinessLogic.js');
let fs = require('fs');
let dataJsonFile = require('./InventoryManagement.json');
let readline = require('readline-sync');
let flag = true;
let rawData = fs.readFileSync('./InventoryManagement.json');
let grains = JSON.parse(rawData);

//function to choose options
function InventoryFun()
{

while (flag == true)
 {
    console.log(" 1 : Rice");
    console.log(" 2 : Pulses");
    console.log(" 3 : Wheats");
    console.log(" 4 : Exit");
    let choice = readline.question("Enter your choice from above : ");

    switch (choice) 
    {
        case "1":
            let i=0;
            while( i < 3)
            {
                let riceName = grains.rice[i].name;
                let riceWeight = grains.rice[i].weight;
                let ricePrice = grains.rice[i].price;
                let riceObj = new InventoryClass(riceName, riceWeight, ricePrice);
                riceObj.totalPrice();
                i++;
            }
        break;
            
        case "2":
            let j=0;
            while( j < 3)
            {
            let pulsesName = grains.pulses[j].name;
            let pulsesWeight = grains.pulses[j].weight;
            let pulsesPrice = grains.pulses[j].price;
            let pulsesObj = new InventoryClass(pulsesName, pulsesWeight, pulsesPrice);
            pulsesObj.totalPrice();
            j++;
            }
        break;

        case "3":
            let k=0;
            while( k < 3)
            {
            let wheatName = grains.wheats[k].name;
            let wheatWeight = grains.wheats[k].weight;
            let wheatPrice = grains.wheats[k].price;
            let pulsesObj = new InventoryClass(wheatName, wheatWeight, wheatPrice);
            pulsesObj.totalPrice();
            k++;
            }
            
        break;
        
        case "4":
            flag = false;
            break;
        default:
            console.log("Invalid Option");
    }
}
}
InventoryFun();