import React from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import Section from "./Section";


export default class show extends  React.Component {
  
    state ={ 
        theme: "dark",
    };

    switchTheme =() =>{
        this.setState(({theme})=>{
            if(theme=='dark'){
                return {
                    theme: 'light'
                }
            }
            else if(theme=='light'){
                return {
                    theme: 'dark'
                }
            }

        });
    }

    render(){
        const{theme}=this.state;

        return (
            <>
              <ThemeContext.Provider value={{theme:theme, switchTheme:this.switchTheme}}><Section /> </ThemeContext.Provider>
            </>
          );

    }
  
    
}
