import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';

const slowZoom = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.2) 0%, rgba(22, 33, 62, 0.75) 100%);
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/discussion-room-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.9;
    filter: contrast(1.1) brightness(1.1);
    animation: ${slowZoom} 30s alternate infinite ease-in-out;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2rem;
  gap: 2rem;
  z-index: 1;
`;

const CharactersSection = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: rgba(26, 26, 46, 0);
  border-radius: 20px;
  padding: 1.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CharacterImage = styled.div`
  width: 180px;
  height: 250px;
  border-radius: 15px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const CharacterInfo = styled.div`
  text-align: center;
  background: rgba(26, 26, 46, 0.7);
  padding: 1rem;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  width: 100%;
`;

const CharacterName = styled.div`
  font-size: 1.5rem;
  color: #4facfe;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const FirstName = styled.span`
  font-weight: bold;
`;

const LastName = styled.span`
  font-weight: bold;
`;

const CharacterRole = styled.h3`
  font-size: 1rem;
  color: #ff9966;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ChatSection = styled.div`
  flex: 1;
  background: rgba(26, 26, 46, 0.85);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  position: relative;

  iframe {
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }

  &:hover iframe {
    opacity: 1;
  }
`;

const QuitButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 25px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(79, 172, 254, 0.4);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const classmates = [
  {
    firstName: "Alex",
    lastName: "Chen",
    role: "Group Leader",
    image: "/classmate1-avatar.png"
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    role: "Note Taker",
    image: "/classmate2-avatar.png"
  },
  {
    firstName: "Michael",
    lastName: "Rodriguez",
    role: "Time Keeper",
    image: "/classmate3-avatar.png"
  }
];

const DiscussionRoom = () => {
  const navigate = useNavigate();

  const handleQuit = () => {
    navigate('/introduction');
  };

  return (
    <PageContainer>
      <QuitButton onClick={handleQuit}>
        <IoExitOutline />
      </QuitButton>
      <ContentContainer>
        <CharactersSection>
          {classmates.map((classmate, index) => (
            <CharacterCard key={index}>
              <CharacterImage image={classmate.image} />
              <CharacterInfo>
                <CharacterName>
                  <FirstName>{classmate.firstName}</FirstName>
                  <LastName>{classmate.lastName}</LastName>
                </CharacterName>
                <CharacterRole>{classmate.role}</CharacterRole>
              </CharacterInfo>
            </CharacterCard>
          ))}
        </CharactersSection>
        <ChatSection>
          <iframe
            src="http://localhost:8000"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            title="Chainlit Chat"
          />
        </ChatSection>
      </ContentContainer>
    </PageContainer>
  );
};

export default DiscussionRoom; 