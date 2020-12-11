class InventoryClass
{

    constructor(name, weight, price)
    {
        this.name =  name;
        this.weight = weight;
        this.price = price;
    
    }
    totalPrice() 
    {
        let total = this.weight * this.price;
        console.log("Total price for " + this.name + " is " +total);
        return total;
    }
}
    
    module.exports = InventoryClass;
    