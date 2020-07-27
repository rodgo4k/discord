import React from 'react';

import { Container, TitleContainer, HashtagIcon, Title, Separator, Description, ButtonsContainer,
        NotificationIcon, PinIcon, GroupIcon, SearchWrapper, Input, InputIcon, InboxIcon, HelpIcon } from './styles';

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <HashtagIcon />

                <Title>chat-livre</Title>

                <Separator />

                <Description>Canal aberto para conversas</Description>
            </TitleContainer>

            <ButtonsContainer>
                <NotificationIcon />
                <PinIcon />
                <GroupIcon />
                <SearchWrapper>
                    <Input type="text" placeholder="Buscar" />
                    <InputIcon />
                </SearchWrapper>
                <InboxIcon />
                <HelpIcon />
            </ButtonsContainer>
        </Container>
    );
};

export default ChannelInfo;