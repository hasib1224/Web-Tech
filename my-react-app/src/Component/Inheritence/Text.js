import Emoji from "./Emoji";

export default class Text extends Emoji{
    constructor(props){
        super(props);
    }

    render(){
        let decoratedText=this.addEmoji("I'm Monti",'❤️');

        return super.render(decoratedText);

    }
    

         
    

}