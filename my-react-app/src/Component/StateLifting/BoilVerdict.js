 

export default function boilingVerdict ({celcius=0}){
    console.log(celcius);
    if(celcius>=100){
        return <p>It'll start to boil</p>
    }
    else {
       return <p>No boiling</p>
    }

}