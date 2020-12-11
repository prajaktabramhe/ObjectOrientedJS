class StockShareClass
{

    constructor(name, numberOfShares, price)
    {
        this.name =  name;
        this.numberOfShares = numberOfShares;
        this.price = price;
    }
    eachsharePrice()
    {
        let total = this.numberOfShares * this.price;
        console.log("Price for Stock " + this.name + " is " +total);
        return total;
    }
    
}
    
    module.exports = StockShareClass;
    