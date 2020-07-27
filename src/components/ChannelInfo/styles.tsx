import styled from "styled-components";
import { Hashtag } from 'styled-icons/heroicons-outline';
import { Notifications, Inbox, Help, Search } from 'styled-icons/material';
import { Pushpin, Group } from 'styled-icons/remix-fill';

export const Container = styled.div`
    grid-area: CI;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary);

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 17px;
`;

export const HashtagIcon = styled(Hashtag)`
    width: 24px;
    height: 24px;

    color: var(--symbol);
`;

export const Title = styled.h1`
    margin-left: 9px;
    font-size: 16px;
    font-weight: bold;
    color: var(--white);
`;

export const Separator = styled.div`
    height: 24px;
    width: 1px;
    background-color: var(--white);
    opacity: 0.2;
    margin: 0 13px
`;

export const Description = styled.span`
    font-size: 15px;
    color: var(--gray);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 17px;
`;

export const NotificationIcon = styled(Notifications)`
    color: var(--gray);
    width: 24px;
    height: 24px;
    margin-right: 14px;
    cursor: pointer;
    transition: color .2s;

    &:hover, &.active {
        color: var(--white);
    }
`;

export const PinIcon = styled(Pushpin)`
    color: var(--gray);
    width: 24px;
    height: 24px;
    margin-right: 14px;
    cursor: pointer;
    transition: color .2s;

    &:hover, &.active {
        color: var(--white);
    }
`;

export const GroupIcon = styled(Group)`
    color: var(--gray);
    width: 22px;
    height: 22px;
    margin-right: 14px;
    cursor: pointer;
    transition: color .2s;

    &:hover, &.active {
        color: var(--white);
    }
`;

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Input = styled.input`
    width: 138px;
    height: 24px;

    padding: 0 5px;
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.9);
    background-color: var(--tertiary);

    position: relative;

    &::placeholder {
        color: var(--gray);
        font-size: 12px;
    }

    ~ svg {
        position: relative;
        top: -50%;
        left: -22px;
        transition: 180ms ease-in-out;
    }
`;

export const InputIcon = styled(Search)`
    color: var(--symbol);
    width: 16px;
    height: 16px;
`;

export const InboxIcon = styled(Inbox)`
    color: var(--gray);
    width: 24px;
    height: 24px;
    margin-right: 14px;
    cursor: pointer;
    transition: color .2s;

    &:hover, &.active {
        color: var(--white);
    }
`;

export const HelpIcon = styled(Help)`
    color: var(--gray);
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: color .2s;

    &:hover, &.active {
        color: var(--white);
    }
`;
