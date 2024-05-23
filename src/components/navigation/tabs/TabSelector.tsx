import React from "react"

type TSelector ={
    children: any,
    hiddenState: boolean,
}

const TabSelector: React.FC<TSelector> = ({hiddenState, children}) => {
    return(
        <div className={hiddenState ? "block" : "hidden"}>{children}</div>
    )
}

export default TabSelector