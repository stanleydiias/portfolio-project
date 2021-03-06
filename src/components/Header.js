import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className= "header-wraper">
            <div className= "main-info">
                <h1>web developer</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Front-end Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <br />
                <a class="btn btn-secondary" href="#" role="button">contact me</a>
            </div>

        </div>
    )
}

export default Header
