import { useState } from 'react';
import icon from '../img/dropdown-open.svg';


const Collapse = ({ items }) => {

    const [selected, setSelected] = useState(false);


    const handleToogle = (i) => {
        if (selected === i) {
            return setSelected(false)
        }
        setSelected(i)
    };

    return (
        <div className='items-container'>
            {
                items.map((item, i) => (
                    <div className="items-container__item">
                        <div className="items-container__item__title" onClick={() => handleToogle(i)}>
                            <span>{item.title}</span>
                            <span className={selected === i ? 'items-container__item__title__icon' : ''}>
                                <img src={icon} alt="" />
                            </span>
                        </div>
                        <div className={selected === i ? 'items-container__item__text-show' : 'items-container__item__text'}>{item.content}</div>
                    </div>
                ))
            }
        </div>

    );
};



export default Collapse;