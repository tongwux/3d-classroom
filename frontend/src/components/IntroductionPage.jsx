import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;

  /* Customize scrollbar */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #4facfe;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-out;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
  transition: transform 0.3s ease;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};

  &:hover {
    transform: translateY(-5px);
  }
`;

const CharacterImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: #2a5298;
  margin-bottom: 1rem;
  overflow: hidden;
  border: 3px solid #4facfe;
`;

const RoomImage = styled.div`
  width: 200px;
  height: 120px;
  border-radius: 15px;
  background-color: #2a5298;
  margin-bottom: 1rem;
  overflow: hidden;
  border: 3px solid #4facfe;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  color: #4facfe;
  margin-bottom: 0.5rem;
`;

const Role = styled.h3`
  font-size: 1.2rem;
  color: #ff9966;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #e6f0ff;
  line-height: 1.6;
  font-size: 1rem;
`;

const ContinueButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: ${fadeIn} 1s ease-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(79, 172, 254, 0.4);
  }
`;

const RoomButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 25px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(79, 172, 254, 0.4);
  }
`;

const characters = [
  {
    name: "Miss Wood",
    role: "Virtual Teacher",
    description: "An experienced educator with a passion for interactive learning. Miss Wood brings subjects to life with her engaging teaching style.",
    image: "/teacher-avatar.png"
  },
  {
    name: "Mrs. Quiz",
    role: "Teaching Assistant",
    description: "Your helpful AI assistant who ensures you understand the material through interactive quizzes and personalized feedback.",
    image: "/assistant-avatar.png"
  },
  {
    name: "Raina",
    role: "Classmate",
    description: "A curious and creative student who loves to explore new ideas and share different perspectives in group discussions.",
    image: "/student1-avatar.png"
  },
  {
    name: "Eddie",
    role: "Classmate",
    description: "An analytical thinker who excels at problem-solving and enjoys helping others understand complex concepts.",
    image: "/student2-avatar.png"
  },
  {
    name: "Gracie",
    role: "Classmate",
    description: "An enthusiastic learner with a talent for making connections between different subjects and real-world applications.",
    image: "/student3-avatar.png"
  }
];

const rooms = [
  {
    name: "Main Classroom",
    role: "Learning Space",
    description: "A dynamic virtual classroom where you'll engage in interactive lessons, participate in real-time discussions, and experience immersive learning with Miss Wood.",
    buttonText: "Enter Classroom"
  },
  {
    name: "Quiz Room",
    role: "Assessment Space",
    description: "Test your knowledge and track your progress with interactive quizzes and assessments guided by Mrs. Quiz.",
    buttonText: "Take a Quiz"
  },
  {
    name: "Discussion Room",
    role: "Collaborative Space",
    description: "Join your classmates in engaging discussions, share ideas, and work together on group projects.",
    buttonText: "Join Discussion"
  }
];

const IntroductionPage = () => {
  const navigate = useNavigate();

  const handleRoomClick = (roomName) => {
    switch(roomName) {
      case "Main Classroom":
        navigate('/main-classroom');
        break;
      case "Quiz Room":
        navigate('/quiz');
        break;
      case "Discussion Room":
        navigate('/discussion');
        break;
      default:
        break;
    }
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <Title>Welcome to the Virtual Classroom</Title>
        
        <Section>
          <SectionTitle>Meet Your Virtual Classmates</SectionTitle>
          <Grid>
            {characters.map((character, index) => (
              <Card key={index}>
                <CharacterImage>
                  {/* Character image will be added here */}
                </CharacterImage>
                <Name>{character.name}</Name>
                <Role>{character.role}</Role>
                <Description>{character.description}</Description>
              </Card>
            ))}
          </Grid>
        </Section>

        <Section>
          <SectionTitle>Explore Learning Spaces</SectionTitle>
          <Grid>
            {rooms.map((room, index) => (
              <Card key={index} onClick={() => handleRoomClick(room.name)} clickable>
                <RoomImage>
                  {/* Room image will be added here */}
                </RoomImage>
                <Name>{room.name}</Name>
                <Role>{room.role}</Role>
                <Description>{room.description}</Description>
                <RoomButton onClick={(e) => {
                  e.stopPropagation();
                  handleRoomClick(room.name);
                }}>
                  {room.buttonText}
                </RoomButton>
              </Card>
            ))}
          </Grid>
        </Section>

        <ContinueButton onClick={() => handleRoomClick("Main Classroom")}>
          Start Learning
        </ContinueButton>
      </ContentWrapper>
    </PageContainer>
  );
};

export default IntroductionPage; 