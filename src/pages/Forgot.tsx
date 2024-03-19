import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  //   CircularProgress,
} from '@mui/material';
import LoginImage from '../assets/huggingface.svg';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIosNew } from '@mui/icons-material';

const ForgotPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  return (
    <Container>
      <Button
        variant="text"
        color="primary"
        onClick={() => {
          navigate('/login');
        }}
        className="!absolute p-8 top-5 left-0"
      >
        <ArrowBackIosNew /> Back
      </Button>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <img className="w-32 mb-10" src={LoginImage} alt="Login" />
        <Typography fontWeight={700} variant="h2" gutterBottom>
          Oops
        </Typography>
        <Box mb={4}>
          <Typography variant="body1" textAlign="center">
            Request a new password here:)
          </Typography>
        </Box>
        <Box
          component="form"
          width="100%"
          maxWidth={450}
          mt={3}
          //   onSubmit={handleLogin}
        >
          <TextField
            label="Email associated with your account"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            // disabled={loading}
          >
            {/* {loading ? <CircularProgress size={24} /> : 'Send OTP'} */}
            Send OTP
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPage;
