import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const Footer = () => {
    const [select, setSelect] = useState(0);
    const categoryArr = [
        { Img: 'home', text: '홈', href: '/' },
        { Img: 'market', text: '마켓', href: '/market' },
        { Img: 'spot', text: '위스키 스팟', href: '/spot' },
        { Img: 'mypage', text: '마이페이지', href: '/mypage' },
    ];

    return (
        <FooterBox>
            {categoryArr.map((item, index) => (
                <Link href={item.href}>
                    <Category
                        onClick={() => {
                            setSelect(index);
                        }}
                        className={index == select ? 'on' : ''}
                    >
                        <img src={`/imgs/${item.Img}.svg`} alt={item.text} />
                        <div>{item.text}</div>
                    </Category>
                </Link>
            ))}
        </FooterBox>
    );
};

export default Footer;

const FooterBox = styled.div`
    display: flex;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
    a {
        flex: 1;
        margin: 0 10px;
        color: gray;
    }
`;

const Category = styled.div`
    text-align: center;
    font-size: 0.6rem;
    font-weight: 700;
    padding-bottom: 5px;

    &.on {
        color: black;
        img {
            filter: invert(100%) sepia(100%) saturate(14%) hue-rotate(273deg) brightness(99%) contrast(104%);
        }
    }

    img {
        margin: 5px auto;
        width: 16px;
        height: 16px;
    }

    @media screen and (max-width: 245px) {
        div {
            display: none;
        }
    }
`;
