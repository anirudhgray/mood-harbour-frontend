import {
  Button,
  Container,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { styled } from '@mui/system';
import { RocketLaunch } from '@mui/icons-material';
import LoginImage from '../assets/huggingface.svg';
import RegisterImage from '../assets/stareyes.svg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const FeatureList = styled('ul')`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled('li')`
  margin-bottom: 1rem;
`;

const HomePage = () => {
  return (
    <>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={8}
          mb={4}
        >
          <Typography
            variant="h2"
            fontWeight="700"
            textAlign="center"
            gutterBottom
          >
            Mood Harbour
          </Typography>
          <Typography variant="body1" textAlign="center" gutterBottom>
            An app for navigating and tracking your moods and feelings through
            various means, and curating a set of helpful resources, recommended
            for your well being.
          </Typography>
        </Box>
        <FeatureList
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FeatureItem>
            <FormControlLabel
              control={<Checkbox checked checkedIcon={<RocketLaunch />} />}
              label="Built using Golang, Gin, Gorm and PostgreSQL on the backend, and React+TypeScript on the frontend."
            />
          </FeatureItem>
          <FeatureItem>
            <FormControlLabel
              control={<Checkbox checked checkedIcon={<RocketLaunch />} />}
              label="Dockerised via docker-compose."
            />
          </FeatureItem>
          <FeatureItem>
            <FormControlLabel
              control={<Checkbox checked checkedIcon={<RocketLaunch />} />}
              label="Auth: Login, Register, Forgot Password, Reset Password, Delete Account"
            />
          </FeatureItem>
          <FeatureItem>
            <FormControlLabel
              control={<Checkbox checked checkedIcon={<RocketLaunch />} />}
              label="Mood Tracking Features: Add Mood Entries at any time, and see your mood history."
            />
          </FeatureItem>
          <FeatureItem>
            <FormControlLabel
              control={<Checkbox checked checkedIcon={<RocketLaunch />} />}
              label="Facial Expression Detection to detect your mood in real time."
            />
          </FeatureItem>
          <FeatureItem>
            <FormControlLabel
              control={<Checkbox checked checkedIcon={<RocketLaunch />} />}
              label="Publish helpful resources, and vote on resources present in the community."
            />
          </FeatureItem>
          <FeatureItem>
            <FormControlLabel
              control={<Checkbox checked checkedIcon={<RocketLaunch />} />}
              label="Get personalised recommendations via collaborative-filtering for mood related resources."
            />
          </FeatureItem>
          <FeatureItem>
            <FormControlLabel
              control={<Checkbox checked checkedIcon={<RocketLaunch />} />}
              label="Send mails for Auth related matters."
            />
          </FeatureItem>
          <FeatureItem>
            <FormControlLabel
              control={<Checkbox checked checkedIcon={<RocketLaunch />} />}
              label="Certain users can have admin access."
            />
          </FeatureItem>
        </FeatureList>
        <Box
          display={{ xs: 'block', md: 'flex' }}
          justifyContent="space-between"
          mt={4}
          mb={4}
        >
          <Link to="/login">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                height: '100%',
                aspectRatio: '1/1',
                mb: { xs: 2, md: 0 },
                mr: { md: 2 },
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <img className="w-32" src={LoginImage} alt="Login" />
              <Typography fontWeight={700} color="white" variant="body1">
                Login
              </Typography>
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                height: '100%',
                aspectRatio: '1/1',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <img className="w-32" src={RegisterImage} alt="Register" />
              <Typography fontWeight={700} color={'white'} variant="body1">
                Register
              </Typography>
            </Button>
          </Link>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
