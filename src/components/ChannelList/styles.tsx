import styled from "styled-components";
import { Add } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: CL;
    
    display: flex;
    flex-direction: column;
    padding: 24px 9.5px 0 16px;
    background-color: var(--secondary);
    max-height: calc(100vh - 46px - 48px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;

    > span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }
`;

export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;
    color: var(--symbol);
    cursor: pointer;
`;