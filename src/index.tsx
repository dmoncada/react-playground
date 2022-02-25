import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./scss/app.scss";

const HelloMessage = (props: any) => {
    return (
        <>
            <Header />
            <div className="container">
                <h1>Hello {props.name}</h1>
            </div>
        </>
    );
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="world" />, App);
