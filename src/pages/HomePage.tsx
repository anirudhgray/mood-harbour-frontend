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
              label="Feature 1"
            />
          </FeatureItem>
          <FeatureItem>
            <FormControlLabel
              control={<Checkbox checked checkedIcon={<RocketLaunch />} />}
              label="Feature 1"
            />
          </FeatureItem>
          <FeatureItem>
            <FormControlLabel
              control={<Checkbox checked checkedIcon={<RocketLaunch />} />}
              label="Feature 1"
            />
          </FeatureItem>
        </FeatureList>
        <Box
          display={{ xs: 'block', md: 'flex' }}
          justifyContent="space-between"
          mt={4}
          mb={4}
        >
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
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
