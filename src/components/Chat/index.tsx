import { useEffect, useState } from 'react';
import {
  ChatContainer,
  MessagesContainer,
  InputContainer,
  MessageBubble,
  InputField,
  SendButton,
} from './style';
import { BackGroundContainer, MenuTitle } from '../styles';

export function ChatForm() {
  const [messages, setMessages] = useState<{ text: string; from: 'bot' | 'user' }[]>([]);
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName') || 'Anônimo';
    setUserName(storedName);
    setMessages([
      { text: 'Olá! Como posso ajudar você hoje?', from: 'bot' },
      { text: 'Sinta-se à vontade para enviar suas dúvidas.', from: 'bot' },
    ]);
  }, []);

  function handleSendMessage() {
    if (input.trim() === '') return;

    setMessages(prev => [...prev, { text: `${input}`, from: 'user' }]);
    setInput('');
  }

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  }

  return (
    <BackGroundContainer>
      <MenuTitle>
        <h1>ChatReact</h1>
      </MenuTitle>
      <ChatContainer>
        <MessagesContainer>
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} isUser={msg.from === 'user'}>
              {msg.from === 'user' ? `Você diz: ${msg.text}` : `Atendente diz: ${msg.text}`}
            </MessageBubble>
          ))}
        </MessagesContainer>

        <InputContainer>
          <InputField
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua mensagem..."
          />
          <SendButton onClick={handleSendMessage}>Enviar</SendButton>
        </InputContainer>
      </ChatContainer>
    </BackGroundContainer>
  );
}
