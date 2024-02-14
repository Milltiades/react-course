import { createContext, useCallback, useContext, useState } from "react";


const FlyOutContext = createContext()

export function FlyOut(props) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const toggle = useCallback(() => setOpen((state) => !state), [])

    return (
        <FlyOutContext.Provider value={{open, toggle, value, setValue}}>
        <div>{props.children}</div>
        </FlyOutContext.Provider>
    )
}

function Input(props) {
    const {value, toggle} = useContext(FlyOutContext)

    return <input onFocus={toggle} onBlur={toggle} value={value} {...props}></input>

}

function List({children}) {
    const {open} = useContext(FlyOutContext)

    return open && <ul>{children}</ul>
}

function ListItem({children, value}) {
    const {setValue} = useContext(FlyOutContext)

    return <li onMouseDown={() => setValue(value)}>{children}</li>
}

FlyOut.Input = Input
FlyOut.List = List
FlyOut.ListItem = ListItem