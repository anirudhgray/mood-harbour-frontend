import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  Fade,
  IconButton,
  Modal,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import Greeting from '../components/Greeting';
import axios from '../axios';
import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import { toast } from 'react-toastify';
import { Close, HelpOutline } from '@mui/icons-material';
import ResDesc from '../components/RecDesc';
import ResourceModal from '../components/ResourceModal';

type Resource = {
  CreatedAt: number;
  Title: string;
  Content: string;
  URL: string;
  AdminPost: boolean;
  CreatedBy: number;
};

type Review = {
  CreatedAt: string;
  Content: string;
  Rating: number;
  UserID: number;
  ResourceID: number;
};

export type ResourceResObject = {
  id: string;
  resource: Resource;
  reviews: Review[];
};

type Recommendation = {
  Resource: Resource;
  Probability: number;
};

export default function Resources() {
  const [resources, setResources] = useState([] as ResourceResObject[]);
  const [recommendations, setRecommendations] = useState(
    [] as Recommendation[]
  );
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);
  const [selectedResource, setSelectedResource] =
    useState<ResourceResObject | null>(null);

  const getResources = async () => {
    setLoading(true);

    try {
      const res = await axios('/resource/get', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setResources(res.data.reverse());
      setLoading(false);
    } catch (e: any) {
      console.error(e);
      toast.error(e.response.data.message);
      setLoading(false);
    }
  };

  const getRecommendations = async () => {
    setLoading(true);

    try {
      const res = await axios('/resource/get-reccs', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setRecommendations(res.data.recommendations.reverse());
      setLoading(false);
    } catch (e: any) {
      console.error(e);
      toast.error(e.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getResources();
    getRecommendations();
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <ResourceModal
        open={!!selectedResource}
        handleClose={() => setSelectedResource(null)}
        resource={selectedResource}
      />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="Resources" />
          <Tab label="Recommendations" />
        </Tabs>
        <IconButton onClick={handleOpen}>
          <HelpOutline />
        </IconButton>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slotProps={{ backdrop: { timeout: 500 } }}
        slots={{ backdrop: Backdrop }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: 10,
              height: '85%',
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{ position: 'absolute', right: 14, top: 14 }}
            >
              <Close />
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Recommendation Algorithm
            </Typography>
            <ResDesc />
          </Box>
        </Fade>
      </Modal>
      {loading ? (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'100%'}
        >
          <CircularProgress />
        </Box>
      ) : null}
      {!loading && tab === 0 && (
        <Box
          flexGrow={1}
          overflow="auto"
          borderRadius={10}
          mb={2}
          display={'flex'}
          flexDirection={'column'}
          gap={2}
        >
          {resources.map((resource) => (
            <Box
              key={resource.id}
              display={'flex'}
              flexDirection={'column'}
              gap={2}
              p={2}
              borderRadius={10}
              bgcolor={'background.paper'}
              onClick={() => setSelectedResource(resource)}
            >
              <Typography variant="h5">{resource.resource.Title}</Typography>
              <Typography variant="body1">
                By: User{' '}
                {resource.resource.AdminPost
                  ? 'Admin'
                  : resource.resource.CreatedBy}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
      {!loading && tab === 1 && (
        <Box
          flexGrow={1}
          overflow="auto"
          borderRadius={10}
          mb={2}
          display={'flex'}
          flexDirection={'column'}
          gap={2}
        >
          {recommendations.map((recc) => (
            <Box
              key={recc.Resource.Title}
              display={'flex'}
              flexDirection={'column'}
              gap={2}
              p={2}
              borderRadius={10}
              bgcolor={'background.paper'}
            >
              <Typography variant="h5">{recc.Resource.Title}</Typography>
              <Typography variant="body1">
                Probability: {recc.Probability}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
}
