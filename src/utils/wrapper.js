import React from "react";
import { Provider } from "react-redux";

function Wrapper({ storeRef, children }) {
    console.log("children", children)
    return (
        <Provider store={storeRef}>
            {children}
        </Provider>
    )
}


export default Wrapper