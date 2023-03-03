let access_key = "fdf532ab940b4dbd6721355d946331b4"

/**
 * @param img_index
 * @param item_index
 */
async function clickedEvent(img_index, item_index) {
    let crypto_price = document.getElementsByTagName('img')[img_index].attributes[1].value;

    let request = new Request(`http://api.coinlayer.com/live?access_key=${access_key}`, {
        method: 'GET',
        // headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();
    console.log(response);
    let data = response.rates.BTC
    console.log(data)

    // Prints Bitcoin rate
    BTC = document.getElementById("BTC")
    BTC.innerHTML = `${response.rates.BTC}`

    // Prints Ethereum rate
    ETH = document.getElementById("ETH")
    ETH.innerHTML = `${response.rates.ETH}`

    // Prints Dogecoin rate
    DOGE = document.getElementById("DOGE")
    DOGE.innerHTML = `${response.rates.DOGE}`

    // Prints Stellar Lumens rate
    XLM = document.getElementById("XLM")
    XLM.innerHTML = `${response.rates.XLM}`

    // Prints Litecoin rate
    LTC = document.getElementById("LTC")
    LTC.innerHTML = `${response.rates.LTC}`
}

/**
 * @param id
 * @param event
 */

function getPrice(id, event) {
    switch(id){
        case 'fig-1': {
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'fig-2': {
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'fig-3': {
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'fig-4': {
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig-5': {
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
    }
}
