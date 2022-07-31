import React from "react";
import MyOption from "../MyOption/MyOption";
import cl from "./MySelect.module.scss";

function MySelect(props) {
    return (<select className={cl.MySelect} {...props}>
        {props.option.map(option => (
            <MyOption key={option.value} value={option.value}>{option.value}</MyOption>
        ))}
    </select>)
}

export default MySelect;
