'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CoincapTest() {
    const [maticPrice, setMaticPrice] = useState(null);

    useEffect(() => {
        async function fetchMaticPrice() {
            try {
                const response = await axios.get('https://api.coincap.io/v2/assets/polygon/');
                const USD = response.data.data.priceUsd;
                setMaticPrice(USD);
            } catch (error) {
                console.error('Failed to fetch MATIC price', error);
            }
        }

        fetchMaticPrice();
    }, []);

    const calculatePrice = (amount: number) => {
        if (!maticPrice) return 'Loading...';
        const totalPrice = (maticPrice * amount).toFixed(2);
        return `${amount}MATIC 와인 : $${totalPrice}USD`;
    };

    return (
        <>
            <div>{maticPrice ? `MATIC Price: $${maticPrice}` : 'Loading...'}</div>
            <div>{calculatePrice(300)}</div>
            <div>{calculatePrice(500)}</div>
        </>
    );
}

export default CoincapTest;
