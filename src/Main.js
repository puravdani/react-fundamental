import { useContext, createContext } from "react";

const Context = createContext("Default Value");

export function Main(){

    const value = "My Value 2"
    return(
        <Context.Provider value={value}>
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
    const value = useContext(Context)
    return <span>This is list and value is - {value}</span>
}