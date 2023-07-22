/*Title: Price of Mangoes
Description:

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
Examples

mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free*/

function mango(quantity, price){
    console.log("Quantity:",quantity, "Price :",price)
    //Number of sets (3 mangoes each)
    const sets = Math.floor(quantity / 3)
    console.log("Number of sets:",sets)
    //Remaining mangoes outside the sets
    const leftover =quantity %3
    console.log("Remaining mangoes:",leftover)
    //Total cost
    const totalCost = (sets*2 + leftover) * price
    console.log("Total cost:",totalCost)
    return totalCost  
}