import React from "react";

export default class Bracket extends React.Component{

    addBracket=(text)=>{
        return `[${text}]`
    }

    render(){

        return this.props.children({addBracket: this.addBracket});
    }
}