import ICardData from '@/interfaces/card.interface';
import styled from 'styled-components';

type Props = {
    item: ICardData;
};

const MainCarousel_item: React.FC<Props> = ({ item }) => {
    return (
        <Wrap>
            <ImgBox>
                <img src={`imgs/${item.img1}.png`} alt={item.img1} />
            </ImgBox>
            <SubImgBox>
                <img src={`imgs/${item.img2}.png`} alt={item.img2} />
            </SubImgBox>
            <TextBox>
                <div>{item.title}</div>
                {item.contents.split('\n').map((item, index) => {
                    return (
                        <div key={`cont-${index}`}>
                            {item}
                            <br />
                        </div>
                    );
                })}
            </TextBox>
        </Wrap>
    );
};

export default MainCarousel_item;

const Wrap = styled.div`
    position: relative;
    margin: 10px 0;
`;

const ImgBox = styled.div`
    img {
        border-radius: 10px;
        filter: brightness(50%);
    }
`;

const TextBox = styled.div`
    font-size: 0.7rem;
    position: absolute;
    color: white;
    top: 10px;
    padding: 0 15px;

    & > div:first-child {
        font-weight: 600;
        margin: 10px 0;
    }
`;

const SubImgBox = styled.div`
    position: absolute;
    right: 20px;
    bottom: 10px;
`;
