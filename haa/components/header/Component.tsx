'use client';

import React, { useState } from 'react';
import { styled } from 'styled-components';
import { HeaderDummy } from '../../data/header';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
interface DropBoxProps {
    isvisible: boolean;
    item?: any;
}

const HeaderComponent: React.FC = () => {
    const pathname = usePathname().slice(1);
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    console.log(pathname);

    const handleMouseEnter = (index: number) => {
        setActiveMenu(index);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const MenuDropdown: React.FC<DropBoxProps> = ({ isvisible, item }) => {
        return (
            <DropBox isvisible={isvisible}>
                {item.sub.map((subItem: any, index: number) => (
                    <div key={index}>{subItem}</div>
                ))}
            </DropBox>
        );
    };

    return (
        <Wrap>
            <Link href={'/'}>
                <LogoBox>
                    <img src="/imgs/logo.png" alt="Logo" />
                </LogoBox>
            </Link>
            <MenuBox>
                {HeaderDummy.map((item, index) => (
                    <div
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        key={`header-${index}`}
                        className={pathname === item.title ? 'cur' : ''}
                    >
                        <Link href={`/${item.title}`}>{item.title}</Link>
                        {activeMenu === index && item.sub && <MenuDropdown isvisible={true} item={item} />}
                    </div>
                ))}
            </MenuBox>
            <WalletBtn>
                <img src="/imgs/main_wallet.png" alt="wallet" />
                CONNECT WALLET
            </WalletBtn>
        </Wrap>
    );
};

const Wrap = styled.div`
    padding: 55px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
`;

const LogoBox = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 195px;
    }
`;

const WalletBtn = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 50px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);

    img {
        margin-right: 10px;
        width: 22px;
    }
`;

const MenuBox = styled.div`
    display: flex;

    > div {
        margin: 0 20px;
        padding: 10px 0;
        position: relative;
    }

    & > div:hover {
        color: #ffab00;
    }

    .cur {
        color: #ffab00;
    }
`;

const DropBox = styled.div<DropBoxProps>`
    position: absolute;
    width: 200px;
    background-color: white;
    padding: 16px 26px;
    display: ${(props) => (props.isvisible ? 'block' : 'none')};
    top: 40px;
    left: 0;
    color: black;

    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    div {
        margin: 10px 0;
    }

    div:hover {
        color: #ffab00;
    }
`;
export default HeaderComponent;
