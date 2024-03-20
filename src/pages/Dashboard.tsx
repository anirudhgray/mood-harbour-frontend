import { Box, CircularProgress, Container } from '@mui/material';
import Greeting from '../components/Greeting';
import CheckInStatus from '../components/CheckInStatus';
import Quote from '../components/Quote';
import axios from '../axios';
import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import { toast } from 'react-toastify';
import MoodBox from '../components/MoodBox';

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

export default function Dashboard() {
  const [moods, setMoods] = useState([] as MoodResObject[]);
  const [loading, setLoading] = useState(false);
  const getMoods = async () => {
    setLoading(true);

    try {
      const res = await axios('/mood/get', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMoods(res.data.reverse());
      setLoading(false);
    } catch (e: any) {
      console.error(e);
      toast.error(e.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoods();
  }, []);
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
      <CheckInStatus status={false} />
      <Quote />
      {loading ? (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'100%'}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box flexGrow={1} overflow="auto" borderRadius={10} mb={2}>
          {moods.map((mood) => (
            <MoodBox mood={mood} key={mood.id} />
          ))}
        </Box>
      )}
    </Container>
  );
}
