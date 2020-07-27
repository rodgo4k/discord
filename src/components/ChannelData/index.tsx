import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;
        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef} >
                {/* <ChannelMessage
                    author="Rodrigo Prestes"
                    date="26/06/2020"
                    content="Aniversário"
                /> */}

                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                    key={n}
                    author="Rodrigo Prestes"
                    date="26/06/2020"
                    content="Aniversário"
                />
                ))}


                <ChannelMessage hasMention isBot
                    author="Guilhermo Bartolomeu"
                    date="26/06/2020"
                    content={
                        <>
                            <Mention>@Rodrigo Prestes</Mention> Vem aí
                        </>
                    }
                /> 
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;