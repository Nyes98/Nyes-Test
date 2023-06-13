'use client';

import { styled } from 'styled-components';
import { useState } from 'react';
import NftList from '../../../components/nft/List';
import Image from 'next/image';

import SearchImg from '@/images/search.svg';
import NftFilter from '../../../components/nft/Filter';
import Pagination from '../../../components/pagination/Pagination';

export default function Nfts() {
    const dudumymy = [1, 2, 3, 4, 5, 6];
    const [filters, setFilters] = useState<string[]>([]);
    const [sort, setSort] = useState('');

    const addFilters = (item: string) => {
        setFilters((prevFilters: any) => {
            if (prevFilters.includes(item)) {
                return prevFilters.filter((filterItem: any) => filterItem !== item);
            } else {
                return [...prevFilters, item];
            }
        });
    };

    const SetSort = (item: string) => {
        setSort(item);
        console.log(item);
    };

    return (
        <Wrap>
            <PageTitle>
                <div>NFTs</div>
                <SearchBox>
                    <input type="text" placeholder="원하는 주류명으로 검색" />
                    <Image src={SearchImg} alt="search"></Image>
                </SearchBox>
            </PageTitle>
            <ConWrap>
                <NftFilter filters={filters} setFilters={setFilters} addFilters={addFilters} />
                <NftListBox>
                    <FSBox>
                        <FilterBox>
                            {filters.map((item, index) => (
                                <div key={`filters-${index}`}>
                                    <div>{item}</div>
                                    <div onClick={() => addFilters(item)}>x</div>
                                </div>
                            ))}
                        </FilterBox>
                        <SortBox>
                            <div onClick={() => SetSort('new')} className={sort === 'new' ? 'on' : ''}>
                                최신순
                            </div>
                            <div onClick={() => SetSort('high')} className={sort === 'high' ? 'on' : ''}>
                                가격 높은 순
                            </div>
                            <div onClick={() => SetSort('low')} className={sort === 'low' ? 'on' : ''}>
                                가격 낮은 순
                            </div>
                        </SortBox>
                    </FSBox>
                    <ListBox>
                        {dudumymy.map((item, index) => (
                            <NftList key={`list-${index}`} />
                        ))}
                    </ListBox>
                    <Pagination />
                </NftListBox>
            </ConWrap>
        </Wrap>
    );
}

const Wrap = styled.div`
    margin-top: 50px;
`;

const FSBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ConWrap = styled.div`
    margin-top: 41px;
    display: flex;
    justify-content: space-between;
`;

const NftListBox = styled.div`
    width: 74%;
`;

const SortBox = styled.div`
    width: 40%;
    display: flex;
    margin: 20px 0;
    justify-content: flex-end;
    div {
        margin: 0 13px;
        &.on {
            font-weight: 500;
        }
    }
`;

const ListBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 31px;

    & > div {
        margin-bottom: 28px;
    }
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
    align-items: center;
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
        cursor: pointer;
    }
`;

const FilterBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 65%;

    & > div {
        display: flex;
        margin-right: 10px;
        border-radius: 5px;
        padding: 10px;
        background-color: #f1f3f5;
        margin-bottom: 5px;

        & > div:first-child {
            margin-right: 15px;
        }

        & > div:last-child {
            cursor: pointer;

            &:hover {
                color: #646d75;
            }
        }
    }
`;
