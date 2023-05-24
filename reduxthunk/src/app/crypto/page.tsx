'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CryptoTest() {
    const [maticPrice, setMaticPrice] = useState(null);
    const [magnification, setMagnification] = useState(100);

    useEffect(() => {
        async function fetchMaticPrice() {
            try {
                const response = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD`);
                const { USD } = response.data;
                setMaticPrice(USD);
            } catch (error) {
                console.error('Failed to fetch MATIC price', error);
            }
        }

        fetchMaticPrice();
    }, [magnification]);

    const calculatePrice = (amount: number) => {
        if (!maticPrice) return 'Loading...';
        const totalPrice = ((maticPrice * amount * magnification) / 100).toFixed(2);
        return `${Math.ceil((amount * magnification) / 100)}MATIC 와인 : $${totalPrice}USD`;
    };

    const handleIncrease = () => {
        setMagnification((prevMagnification) => prevMagnification + 1);
    };

    const handleDecrease = () => {
        setMagnification((prevMagnification) => prevMagnification - 1);
    };

    return (
        <>
            <div>{maticPrice ? `MATIC Price: $${maticPrice}` : 'Loading...'}</div>
            <div>{calculatePrice(300)}</div>
            <div>{calculatePrice(500)}</div>
            <div>현재 배율: {magnification / 100}</div>
            <button onClick={handleIncrease}>상승</button>
            <button onClick={handleDecrease}>하락</button>
        </>
    );
}

export default CryptoTest;
