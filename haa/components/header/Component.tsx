'use client';

import React, { useState } from 'react';
import { styled } from 'styled-components';
import { HeaderDummy } from '../../data/header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import LogoImg from '@/images/wWLogo.png';
import WalletImg from '@/images/main_wallet.png';

interface DropBoxProps {
    isvisible: boolean;
    item?: any;
}

const HeaderComponent: React.FC = () => {
    let pathname = usePathname();
    if (pathname) pathname = pathname?.slice(1);

    const [activeMenu, setActiveMenu] = useState<number | null>(null);

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
                    <Link key={`headerSub-${index}`} href={subItem.href}>
                        <div>{subItem.title}</div>
                    </Link>
                ))}
            </DropBox>
        );
    };

    return (
        <Wrap>
            <Link href={'/'}>
                <LogoBox>
                    <Image src={LogoImg} width={195} alt="logo"></Image>
                </LogoBox>
            </Link>
            <MenuBox>
                {HeaderDummy.map((item, index) => (
                    <div
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        key={`header-${index}`}
                        className={pathname?.includes(item.title) ? 'cur' : ''}
                    >
                        <Link href={`/${item.title}`}>{item.title}</Link>
                        {activeMenu === index && item.sub && <MenuDropdown isvisible={true} item={item} />}
                    </div>
                ))}
            </MenuBox>
            <WalletBtn>
                <Image src={WalletImg} width={22} alt="logo"></Image>
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
`;

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
