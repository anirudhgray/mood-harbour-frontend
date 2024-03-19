import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material';
import LoginImage from '../assets/huggingface.svg';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIosNew } from '@mui/icons-material';
import axios from '../axios';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/auth/login', { email, password });
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('admin', res.data.user.Admin);
      localStorage.setItem('name', res.data.user.Name);
      localStorage.setItem('userid', res.data.user.ID);
      toast.success('Logged in successfully!');
      navigate('/dashboard');
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
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
        <img className="w-32 mb-10" src={LoginImage} alt="Login" />
        <Typography fontWeight={700} variant="h2" gutterBottom>
          Login
        </Typography>
        <Box mb={4}>
          <Typography variant="body1" textAlign="center">
            Login to access your account
          </Typography>
        </Box>
        <Box
          component="form"
          width="100%"
          maxWidth={450}
          mt={3}
          onSubmit={handleLogin}
        >
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
