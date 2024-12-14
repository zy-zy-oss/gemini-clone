import { createContext } from "react";
import run from "../config/gemini"

const Context = createContext()
const ContextProvider = (props) =>{
    const onSent = async (prompt)=>{
       await run(prompt)
    }
    onSent("hello")
    const contextValue = {
      
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;