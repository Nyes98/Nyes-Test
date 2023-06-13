import Image from 'next/image';
import { useState } from 'react';
import { styled } from 'styled-components';

import { FilterData } from '../../data/filter';
import ResetImg from '@/images/reset.svg';
import FilterImg from '@/images/filter_btn.svg';
import CheckBox from '../checkbox/Checkbox';

type Props = {
    filters: string[];
    setFilters: React.Dispatch<React.SetStateAction<string[]>>;
    addFilters: (item: string) => void;
};

export default function NftFilter({ filters, setFilters, addFilters }: Props) {
    const [isFilterClick, setIsFilterClick] = useState(-1);
    const [openFilters, setOpenFilters] = useState<number[]>([]);

    const FilterClick = (index: number) => {
        setIsFilterClick(index);
        setOpenFilters((prevFilters: any) => {
            if (prevFilters.includes(index)) {
                return prevFilters.filter((item: any) => item !== index);
            } else {
                return [...prevFilters, index];
            }
        });
    };

    const resetFilters = () => {
        setIsFilterClick(-1);
        setOpenFilters([]);
        setFilters([]);
    };

    const getSelectedCount = (subItems: string[]): number => {
        return subItems.filter((item) => filters.includes(item)).length;
    };

    return (
        <Wrap>
            <FilterBox>
                <FTitle>
                    Filter
                    <Image src={ResetImg} alt="reset" onClick={resetFilters}></Image>
                </FTitle>
                {FilterData.map((item, index) => (
                    <FContents key={`CT-${index}`}>
                        <CheckTitle
                            onClick={() => FilterClick(index)}
                            className={openFilters.includes(index) ? 'open' : ''}
                        >
                            <div>{item.title}</div>
                            <div>
                                <div>{getSelectedCount(item.sub)}</div>
                                <div>
                                    <Image src={FilterImg} alt="filter"></Image>
                                </div>
                            </div>
                        </CheckTitle>
                        <CheckLine className={openFilters.includes(index) ? 'open' : ''}>
                            {item.sub?.map((item: string, index: number) => (
                                <SubItem key={`CL-${index}`} onClick={() => addFilters(item)}>
                                    <CheckBox select={filters.includes(item)} /> {item}
                                </SubItem>
                            ))}
                        </CheckLine>
                    </FContents>
                ))}
            </FilterBox>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 234px;
    font-weight: 500;
`;

const FilterBox = styled.div``;

const SubItem = styled.div`
    display: flex;
    margin: 15px 0;
    cursor: pointer;
`;

const CheckTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    & > div:last-child {
        display: flex;
        line-height: 14px;

        div:first-child {
            margin-right: 10px;
        }
    }

    &.open {
        img {
            transition: transform 0.1s;
            transform: rotate(45deg);
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(239deg) brightness(97%) contrast(107%);
        }
    }
`;

const CheckLine = styled.div`
    font-size: 0.9rem;
    display: flex;

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
    align-items: center;
    font-size: 1.4rem;
    padding: 20px 0;

    border-bottom: 1px solid #eeeeee;

    img {
        cursor: pointer;
    }
`;
