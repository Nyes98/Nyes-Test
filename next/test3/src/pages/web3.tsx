import styled from 'styled-components';
import { useWeb3 } from '../hooks/useWeb3';
import { useState } from 'react';

const Web3 = () => {
    const { web3, account, logIn } = useWeb3();

    return (
        <div>
            <Title onClick={logIn}>지압</Title>
            <div>나으계정 {account}</div>
        </div>
    );
};

export default Web3;

const Title = styled.h1`
    color: #2f5fd1;
    margin-left: 300px;
`;
