import React from "react";
import { useState } from "react";
import icon from '../img/dropdown-open.svg'

function Collapse({ title, content }) {
    const [active, setActive] = useState(false);

    const handleToggle = e => {
        setActive(!active)
    }



    return (
        <div className="accordion-container">
            <div className={`accordion ${active && "active"}`}>
                <div className="accordion__title" onClick={handleToggle}>
                    {title} <img src={icon} className="accordion__icon" alt="icone du menu déroulant" />
                </div>
                <div className="accordion__content">{content.map((item, i) => {
                    return (
                        <li key={i}>{item}</li>
                    )
                })}</div>
            </div>
        </div>
    )
}

export default Collapse;