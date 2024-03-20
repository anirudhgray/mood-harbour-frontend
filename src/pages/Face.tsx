import { Box, Container } from '@mui/material';
import Greeting from '../components/Greeting';
import { MainFace } from '../face.js';

import Menu from '../components/Menu';
import { useEffect } from 'react';

type Mood = {
  CreatedAt: string;
  ID: number;
  Mood: number;
  Notes: string;
  UserID: number;
};

export type MoodResObject = {
  id: string;
  attributes: [{ Name: string }];
  mood: Mood;
};

export default function Face() {
  useEffect(() => {
    MainFace();
  });
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Menu />
      <Greeting />
      <Box position={'relative'}>
        <video id="video" playsInline className="video"></video>
        <canvas
          id="canvas"
          className="canvas"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: 10,
          }}
        ></canvas>
        <div
          id="log"
          style={{
            overflowY: 'scroll',
            height: '16.5rem',
          }}
        ></div>
      </Box>
    </Container>
  );
}
