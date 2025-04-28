import React, { useState } from 'react';
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

const FileUploadSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-out;
`;

const FileDropzone = styled.div`
  width: 100%;
  height: 200px;
  border: 2px dashed ${props => props.isDragActive ? '#4facfe' : 'rgba(255, 255, 255, 0.3)'};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.isDragActive ? 'rgba(79, 172, 254, 0.1)' : 'transparent'};
  margin-bottom: 1rem;

  &:hover {
    border-color: #4facfe;
    background: rgba(79, 172, 254, 0.1);
  }
`;

const UploadText = styled.p`
  color: #e6f0ff;
  font-size: 1.2rem;
  margin: 1rem 0;
  text-align: center;
`;

const GuidelineCard = styled.div`
  width: 100%;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-top: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const GuidelineTitle = styled.h3`
  color: #4facfe;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const GuidelineText = styled.p`
  color: #e6f0ff;
  line-height: 1.6;
`;

const SectionList = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionItem = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
  }
`;

const StartButton = styled.button`
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
  width: fit-content;
  align-self: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(79, 172, 254, 0.4);
  }
`;

const IntroductionPage = () => {
  const navigate = useNavigate();
  const [isDragActive, setIsDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [guideline, setGuideline] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragActive(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
      // TODO: Replace with actual API call
      try {
        // Simulated API response
        setTimeout(() => {
          setGuideline({
            title: "Course Guidelines",
            content: "Based on your course material, here are the sections for your virtual classroom experience:",
            sections: [
              {
                id: 1,
                title: "Introduction to the Subject",
                description: "Basic concepts and fundamental principles"
              },
              {
                id: 2,
                title: "Core Concepts",
                description: "Deep dive into main topics"
              },
              {
                id: 3,
                title: "Advanced Topics",
                description: "Complex concepts and applications"
              }
            ]
          });
        }, 1000);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      // TODO: Replace with actual API call
      try {
        // Simulated API response
        setTimeout(() => {
          setGuideline({
            title: "Course Guidelines",
            content: "Based on your course material, here are the sections for your virtual classroom experience:",
            sections: [
              {
                id: 1,
                title: "Introduction to the Subject",
                description: "Basic concepts and fundamental principles"
              },
              {
                id: 2,
                title: "Core Concepts",
                description: "Deep dive into main topics"
              },
              {
                id: 3,
                title: "Advanced Topics",
                description: "Complex concepts and applications"
              }
            ]
          });
        }, 1000);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
    // You can store the selected section in localStorage or context
    // to access it in the classroom component
    localStorage.setItem('selectedSection', sectionId);
  };

  const handleStartClass = () => {
    navigate('/main-classroom');
  };

  const handleRoomClick = (roomName) => {
    navigate(`/${roomName.toLowerCase()}`);
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <Title>Welcome to Your Virtual Classroom</Title>
        
        <Section>
          <SectionTitle>Upload Your Course Material</SectionTitle>
          <FileUploadSection>
            <FileDropzone
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              isDragActive={isDragActive}
              onClick={() => document.getElementById('fileInput').click()}
            >
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleFileSelect}
                accept=".pdf,.doc,.docx,.txt"
              />
              <UploadText>
                {uploadedFile 
                  ? `File uploaded: ${uploadedFile.name}`
                  : 'Drag and drop your course material here or click to browse'}
              </UploadText>
            </FileDropzone>

            {guideline && (
              <>
                <GuidelineTitle>{guideline.title}</GuidelineTitle>
                <GuidelineText>{guideline.content}</GuidelineText>
                <SectionList>
                  {guideline.sections.map((section) => (
                    <SectionItem 
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      style={{
                        background: selectedSection === section.id 
                          ? 'rgba(79, 172, 254, 0.2)' 
                          : 'rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <h3 style={{ color: '#4facfe', marginBottom: '0.5rem' }}>
                        Section {section.id}: {section.title}
                      </h3>
                      <p style={{ color: '#e6f0ff' }}>{section.description}</p>
                    </SectionItem>
                  ))}
                </SectionList>
                <StartButton onClick={handleStartClass}>
                  Start Class
                </StartButton>
              </>
            )}
          </FileUploadSection>
        </Section>

        <Section>
          <SectionTitle>Available Rooms</SectionTitle>
          <Grid>
            <Card onClick={() => handleRoomClick('main-classroom')}>
              <RoomImage style={{ backgroundImage: "url('/classroom-bg.jpg')" }} />
              <Name>Main Classroom</Name>
              <Description>Enter the main virtual classroom for an immersive learning experience.</Description>
              <RoomButton>Enter Room</RoomButton>
            </Card>
            <Card onClick={() => handleRoomClick('Discussion')}>
              <RoomImage style={{ backgroundImage: "url('/discussion-room-bg.png')" }} />
              <Name>Discussion Room</Name>
              <Description>Join interactive discussions with your virtual classmates and teacher.</Description>
              <RoomButton>Enter Room</RoomButton>
            </Card>
            <Card onClick={() => handleRoomClick('Quiz')}>
              <RoomImage style={{ backgroundImage: "url('/quiz-room-bg.png')" }} />
              <Name>Quiz Room</Name>
              <Description>Test your knowledge and get instant feedback on your progress.</Description>
              <RoomButton>Enter Room</RoomButton>
            </Card>
          </Grid>
        </Section>
      </ContentWrapper>
    </PageContainer>
  );
};

export default IntroductionPage; 