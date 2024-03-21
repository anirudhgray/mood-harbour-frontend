import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import axios from '../axios';
import { toast } from 'react-toastify';
import { MuiOtpInput } from 'mui-one-time-password-input';

const VerifyAccount = () => {
  const [otp, setOtp] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('/auth/verify', {
        otp,
      });
      toast.success('Account verified successfully');
    } catch (e: any) {
      console.error(e);
      toast.error(e.response.data.message);
    }
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Verify Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <MuiOtpInput value={otp} onChange={setOtp} />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Verify
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default VerifyAccount;
