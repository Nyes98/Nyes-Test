import styled from 'styled-components';

const AppLayout = (props: { children: React.ReactNode }) => {
    return (
        <Centering>
            <FixedWidth>{props.children}</FixedWidth>
        </Centering>
    );
};

const Centering = styled.div`
    display: flex;
    justify-content: center;
`;
const FixedWidth = styled.div`
    width: 320px;
    @media (max-width: 320px) {
        width: 100%;
    }
`;
export default AppLayout;
