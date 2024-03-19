import { Box, Typography, alpha } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Quote() {
  const currDate = new Date();
  const [quote, setQuote] = useState('');
  const getQuote = async () => {
    try {
      const response = await axios.get('https://zenquotes.io/api/random');
      console.log(response.data[0].q);
      setQuote(response.data[0].quote);
    } catch {
      setQuote(
        'Waste no more time arguing about what a good man should be. Be one.'
      );
    }
  };
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <Box
      display={'flex'}
      gap={1}
      sx={{ backgroundColor: alpha('#AE7FFB', 0.9) }}
      borderRadius={5}
      p={3}
      pt={9}
      my={2}
      justifyContent={'center'}
      alignContent={'center'}
      position={'relative'}
    >
      <Box
        display={'flex'}
        gap={1}
        bgcolor={'white'}
        borderRadius={20}
        p={1}
        m={2}
        position={'absolute'}
        top={0}
        right={0}
      >
        <Typography variant="body1">{currDate.toUTCString()}</Typography>
      </Box>
      <Typography color={'white'} textAlign={'center'} variant="body1">
        {quote}
      </Typography>
    </Box>
  );
}
