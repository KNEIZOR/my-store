import React from "react";
import cl from "./MyOption.module.scss"

function MyOption({children, value}) {
    return <option  className={cl.MyOption} value={value}>{children}</option>
}

export default MyOption