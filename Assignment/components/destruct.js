var arr=[1,2,3,4];

export function arrDestrcut()
{
    let [a, ...rest ]=arr;
    console.log(a);
}

var org={
    name:"SCOE",
    address:{
        city:"pune",
        pin:411041
    }
}

export function objDestruct()
{
    let {address: {city, pin}} = org;
    console.log(pin);
}