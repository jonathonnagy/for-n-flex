

const generateArray = function (amount) {
    let returnArray = [];
    
    if (!Number.isNaN(amount)) {
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);
            // console.log(returnArray);
        }
     return returnArray

    }
    else{
        returnArray.push('error')
    }

    // if (typeof amount === 'number') {
    //     for (let i = 0; i < amount; i++) {
    //         returnArray.push(`${i}`);
    //         // console.log(returnArray);
    //     }
    //     return returnArray
    // }


    // console.log(returnArray);
    return returnArray;
}


function loadEvent() {
    console.log('az oldal betoltodott');
    let root = document.querySelector('#root')
    let arr = generateArray('100');
   
    for (const arrElement of arr) {
        root.insertAdjacentHTML('beforeend', `
        <p>${arrElement}</p>`)
    }
}

window.addEventListener('load', loadEvent)