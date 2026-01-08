    let noofRose = 70;
    let noofLily = 50;
    let noofTulip = 120;
    // const priceRose = 8;
    // const PriceLily = 10;
    // const priceTulip = 2;
{
    let priceRose = 8;
    let PriceLily = 10;
    let priceTulip = 2;
    

    let tpRose = priceRose * noofRose;
    let tpLily = PriceLily * noofLily;
    let tpTulip = priceTulip * noofTulip;
    let tpFlowers = tpRose + tpLily + tpTulip;

    console.log("Rose - ", "unit price: ", priceRose, "," , "quantity: ", noofRose, ",", "value: ", tpRose);
    console.log("Lily - ", "unit price: ", PriceLily, "," , "quantity: ", noofLily, ",", "value: ", tpLily);
    console.log("Tulip - ", "unit price: ", priceTulip, "," , "quantity: ", noofTulip, ",", "value: ", tpTulip);
    console.log("Total:", tpFlowers);
}
{
    const priceRose = 8;
    const PriceLily = 10;
    const priceTulip = 2;
    noofRose = 50;
    noofLily = 20;
    noofTulip = 120;

    let tpRose = priceRose * noofRose;
    let tpLily = PriceLily * noofLily;
    let tpTulip = priceTulip * noofTulip;
    let tpFlowers = tpRose + tpLily + tpTulip;

    console.log("Rose - ", "unit price: ", priceRose, "," , "quantity: ", noofRose, ",", "value: ", tpRose);
    console.log("Lily - ", "unit price: ", PriceLily, "," , "quantity: ", noofLily, ",", "value: ", tpLily);
    console.log("Tulip - ", "unit price: ", priceTulip, "," , "quantity: ", noofTulip, ",", "value: ", tpTulip);
    console.log("Total:", tpFlowers);

}