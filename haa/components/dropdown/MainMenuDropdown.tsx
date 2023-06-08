import React, { useState } from 'react';
import { HeaderDummy } from '../../data/header';

export default function MenuDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item: any) => {
        console.log(item.title);
    };

    return (
        <div onClick={toggleDropdown}>
            {HeaderDummy.map((item, index) => (
                <div key={index} onClick={() => handleItemClick(item)}>
                    {item.title}
                </div>
            ))}
        </div>
    );
}
