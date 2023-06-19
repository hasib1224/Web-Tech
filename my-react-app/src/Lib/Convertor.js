export  function toCelcius(Farenhit){
    return ((Farenhit-32)*5)/9;
}


export  function toFarenhit(celcius){
    return (celcius*9)/5 +32;
}

export function convert(temparature,convertTo){
    const input = parseFloat(temparature);
    if(Number.isNaN(input)){
        return '';
    }

    const output =convertTo(input);
    const rounded=Math.round(output*1000)/1000;
    return rounded.toString();

}