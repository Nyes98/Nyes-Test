'use client';

import React, { useState } from 'react';
import { styled } from 'styled-components';
import { HeaderDummy } from '../../data/dummy';

interface DropBoxProps {
    isvisible: string;
}

export default function HeaderComponent() {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setActiveMenu(index);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    function MenuDropdown({ isvisible }: DropBoxProps) {
        return <DropBox isvisible={isvisible}>ssfssss</DropBox>;
    }

    return (
        <Wrap>
            <LogoBox>
                <img src="/imgs/wWLogo.svg" alt="Logo" />
            </LogoBox>
            <MenuBox>
                {HeaderDummy.map((item, index) => (
                    <div
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        key={`header-${index}`}
                    >
                        {item.title}
                        {activeMenu === index && <MenuDropdown isvisible={'true'} />}
                    </div>
                ))}
            </MenuBox>
            <WalletBtn>
                <img src="/imgs/main_wallet.svg" alt="wallet" />
                CONNECT WALLET
            </WalletBtn>
        </Wrap>
    );
}

const Wrap = styled.div`
    padding: 55px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
`;

const LogoBox = styled.div``;

const WalletBtn = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 50px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);

    img {
        margin-right: 10px;
    }
`;

const MenuBox = styled.div`
    display: flex;

    > div {
        margin: 0 20px;
        padding: 10px 0;
        position: relative;
    }
`;

const DropBox = styled.div<DropBoxProps>`
    position: absolute;
    width: 200px;
    background-color: white;
    border: 1px solid #ccc;
    padding: 16px 26px;
    display: ${(props) => (props.isvisible ? 'block' : 'none')};
    top: 40px;
    left: 0;

    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;
