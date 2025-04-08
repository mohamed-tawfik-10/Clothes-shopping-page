import { createContext, useState } from "react";


export let CounterContext = createContext(0);

export default function CounterContextProvider(props) {
    const [Counter, setCounter] = useState(0);
    const [UserName, setUserName] = useState('');

    function changeCounter() {
        setCounter( Math.round(Math.random()*100) );
    }

    return <CounterContext.Provider value={{ Counter, UserName ,changeCounter,setCounter}}>
        {props.children}
    </CounterContext.Provider>
}