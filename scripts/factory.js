const metals = [
    { metal: "Sterling Silver", price: 12.42 },
    { metal: "14K Gold", price: 736.4 },
    { metal: "24K Gold", price: 1258.9 },
    { metal: "Platinum", price: 795.45 },
    { metal: "Palladium", price: 1241.0 }
]

const diamonds = [
    { carets: 0.5, price: 405 },
    { carets: 0.75, price: 782 },
    { carets: 1, price: 1470 },
    { carets: 1.5, price: 1997 },
    { carets: 2, price: 3638 }
]

const ringStyles = [
    { style: "Classic", price: 500 },
    { style: "Modern", price: 710 },
    { style: "Vintage", price: 965 }
]

// factory function creating new object of custom ring
const createCustomRing = (style, carets, metal) => {
    return {
        style: style.style,
        carets: carets.carets,
        metal: metal.metal,
        price: metal.price + style.price + carets.price
    }
}

// store new ring in newRingOrder
const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2])


//create html representation
const createHTML = (currOrder) => {
    
    document.querySelector(".MyOrder").innerHTML = 
    `
    <section>
        <ul>Jewelry Order</ul>
            <li>Style: ${newRingOrder.style}</li>
            <li>Stone Size: ${newRingOrder.carets}</li>
            <li>Metal: ${newRingOrder.metal}</li>
            <li>Price: ${newRingOrder.price}</li>
    </section>
    `
}

// Run html
createHTML(newRingOrder)