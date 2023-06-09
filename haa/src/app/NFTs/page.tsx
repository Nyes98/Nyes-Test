'use client';

import { styled } from 'styled-components';
import CheckBox from '../../../components/checkbox/Checkbox';
import { useState } from 'react';
import { FilterData } from '../../../data/filter';
import NftList from '../../../components/nft/List';

export default function Nfts() {
    const [isFilterClick, setIsFilterClick] = useState(-1);

    const FilterClick = (index: number) => {
        setIsFilterClick(index);
    };

    const dudumymy = [1, 2, 3, 4, 5, 6];

    return (
        <Wrap>
            <PageTitle>
                <div>NFTs</div>
                <SearchBox>
                    <input type="text" placeholder="원하는 주류명으로 검색" />
                    <img src="/imgs/search.svg" alt="search" />
                </SearchBox>
            </PageTitle>
            <ConWrap>
                <FilterBox>
                    <FTitle>
                        Filter
                        <img src="/imgs/reset.svg" alt="reset" />
                    </FTitle>
                    {FilterData.map((item, index) => (
                        <FContents key={`CT-${index}`}>
                            <CheckTitle onClick={() => FilterClick(index)}>
                                {item.title}
                                <img src="/imgs/filter_btn.svg" alt="fbtn" />
                            </CheckTitle>
                            <CheckLine className={isFilterClick === index ? 'open' : ''}>
                                {item.sub?.map((item, index) => (
                                    <SubItem key={`CL-${index}`}>
                                        <CheckBox /> {item}
                                    </SubItem>
                                ))}
                            </CheckLine>
                        </FContents>
                    ))}
                </FilterBox>
                <NftListBox>
                    <SortBox>
                        <div>최신순</div>
                        <div>가격 높은 순</div>
                        <div>가격 낮은 순</div>
                    </SortBox>
                    <ListBox>
                        {dudumymy.map((item, index) => (
                            <NftList key={`list-${index}`} />
                        ))}
                    </ListBox>
                </NftListBox>
            </ConWrap>
        </Wrap>
    );
}

const Wrap = styled.div`
    margin-top: 50px;
`;
const ConWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FilterBox = styled.div`
    width: 18%;
`;

const SubItem = styled.div`
    display: flex;
    padding: 10px 0;
`;

const NftListBox = styled.div`
    width: 75%;
`;

const SortBox = styled.div`
    display: flex;
    justify-content: flex-end;
    div {
        margin: 0 13px;
    }
`;

const ListBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const CheckTitle = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CheckLine = styled.div`
    font-size: 0.9rem;
    display: flex;
    padding: 10px 0;

    display: none;

    &.open {
        display: block;
    }
`;

const FContents = styled.div`
    padding: 15px 0;
    border-bottom: 1px solid #eeeeee;
`;

const FTitle = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    padding: 20px 0;

    border-bottom: 1px solid #eeeeee;
`;

const PageTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

    font-size: 2.3rem;
    padding-bottom: 27px;
    border-bottom: 2px solid #333333;
`;

const SearchBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20%;
    height: 23px;

    input {
        border: none;
        width: 80%;
    }
    input:focus {
        outline: none;
    }
    img {
        width: 19px;
        cursor: pointer;
    }
`;
