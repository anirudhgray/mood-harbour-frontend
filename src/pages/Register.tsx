import { Box, Button, Container, TextField, Typography } from '@mui/material';
import RegisterImage from '../assets/stareyes.svg';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIosNew } from '@mui/icons-material';

const RegisterPage = () => {
  const navigate = useNavigate();
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
        <Box component="form" width="100%" maxWidth={450} mt={3}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Repeat Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
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
