import { useContext, createContext } from "react";

const Context = createContext("Default Value");

export function Main(){

    return(
        <Context.Provider value={{lang: "EN" }}>
            <Sidebar/>
        </Context.Provider>

    );
}

function Sidebar (){
    return <List/>
}

// This pattern where properties are passed and access via context is Provider pattern. 
// Value is sent in from App > Sidebar > List without actually affecting Sidebar ( no prop drilling)
function List(){
    return <Context.Consumer> 
        {({lang}) => (<span>This is list and value is - {lang}</span> )}
        </Context.Consumer>
}