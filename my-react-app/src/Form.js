import React from 'react';

export default class Form extends React.Component{
   
    state ={
        title: "Hasib",
        text: "write something....",
    };
    handleChange=(e)=>{
        if(e.target.type==='text'){
            this.setState({
                title: e.target.value
            });
        }else if(e.target.type==='textarea'){
            this.setState({
                text: e.target.value
            });

        }
    };
   
    render(){
        const{title,text} =this.state;

        return(
            <div>
                <form>
                    <input type='text' placeholder='Enter name..' 
                    value={title} onChange={this.handleChange}
                    />
                    <br/>
                    <br/>

                    <textarea name='text' placeholder='Enter text' 
                    value={text} onChange={this.handleChange}
                     
                    />
                </form>
                <p> {this.state.title}</p>

            </div>
        );
    }
}