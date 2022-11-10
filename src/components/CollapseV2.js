/*import { useState, useEffect } from 'react';
import icon from '../img/dropdown-open.svg';


const Collapse = ({ items }) => {

    const [active, setActive] = useState(false);

    const handleToggle = e => {
        setActive(!active)
    }


    return (
        <div className='items-container'>
            {
                items.map((item, i) => (
                    <div className={`accordion ${active && "active"}`}>
                        <div className="accordion__title" onClick={handleToggle}>
                            {item.title} <img src={icon} className="accordion__icon" alt="icone du menu déroulant" />
                        </div>
                        <div className="accordion__content">{item.content}</div>
                    </div>
                ))
            }
        </div >

    );
};



export default Collapse;*/