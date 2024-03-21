import { Box, Button, Container, TextField, Typography } from '@mui/material';
import RegisterImage from '../assets/stareyes.svg';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIosNew } from '@mui/icons-material';
import { useState } from 'react';
import axios from '../axios';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      toast.error("Passwords don't match");
      return;
    }
    try {
      await axios.post('/auth/register', {
        name,
        email,
        password,
        profile_image: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${name}`,
      });
      toast.success(
        'Registered successfully! Please enter the OTP you recieved on your mail.'
      );
      navigate('/verify');
    } catch (e: any) {
      console.error(e);
      toast.error(e.response.data.message);
    }
  };
  return (
    <Container>
      {/* top left back button */}
      <Button
        variant="text"
        color="primary"
        onClick={() => {
          navigate('/');
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
        <img className="w-32 mb-10" src={RegisterImage} alt="Register" />
        <Typography fontWeight={700} variant="h2" gutterBottom>
          Register
        </Typography>
        <Box mb={4}>
          <Typography variant="body1" textAlign="center">
            Register now to start logging your mood
          </Typography>
        </Box>
        <Box
          component="form"
          width="100%"
          maxWidth={450}
          mt={3}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Repeat Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
