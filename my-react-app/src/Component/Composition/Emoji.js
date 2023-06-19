import React from "react";

export default class Emoji extends React.Component{

    addEmoji=(text,emoji)=>{
        return `${emoji}${text}${emoji}`
    }

    render(){

        return this.props.children({addEmoji: this.addEmoji});
    }
}