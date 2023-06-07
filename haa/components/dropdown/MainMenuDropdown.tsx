import React, { useState } from 'react';
import { HeaderDummy } from '../../data/dummy';

export default function MenuDropdown() {
    const [isOpen, setIsOpen] = useState(false); // 드롭다운 메뉴 열림 여부 상태

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
