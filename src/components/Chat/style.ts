import styled from 'styled-components';

export const ChatContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  overflow: hidden;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  align-items: flex-end;
`;

interface MessageBubbleProps {
  isUser?: boolean;
}

export const MessageBubble = styled.div<MessageBubbleProps>`
  background-color: ${({ isUser }) => (isUser ? '#ccffcc' : '#ffffff')};
  color: ${({ isUser }) => (isUser ? '#000000' : '#000000')};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 12px;
  max-width: 70%;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  align-items: center;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;


export const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #ddd;
  background: white;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SendButton = styled.button`
  margin-left: 10px;
  padding: 0.8rem 1.2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
