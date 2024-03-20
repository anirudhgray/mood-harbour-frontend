import {
  Backdrop,
  Box,
  Fade,
  Modal,
  IconButton,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useState } from 'react';
import axios from '../axios';
import { toast } from 'react-toastify';
import { ResourceResObject } from '../pages/Resources';

type ResourceModalProps = {
  open: boolean;
  handleClose: () => void;
  resource: ResourceResObject | null;
};

export default function ResourceModal({
  open,
  handleClose,
  resource,
}: ResourceModalProps) {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(4);

  const handleSubmit = async () => {
    if (!review) {
      toast.error('Review cannot be empty');
      return;
    }
    if (rating < 1 || rating > 5) {
      toast.error('Rating must be between 1 and 5');
      return;
    }
    try {
      await axios.post(
        '/resource/review/add/' + resource?.id,
        {
          content: review,
          rating: rating,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setReview('');
      handleClose();
      toast.success('Review added successfully');
    } catch (e: any) {
      console.error(e);
      toast.error(e.response.data.message);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '90%',
            bottom: '0',
            left: '0',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: '25px 25px 0 0',
            p: 4,
          }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <Close />
          </IconButton>
          <Typography
            textAlign={'center'}
            mt={4}
            mb={2}
            fontWeight={300}
            variant="h4"
            component="div"
          >
            {resource?.resource.Title}
          </Typography>
          <Box overflow={'auto'}>
            <Typography variant="body1">
              {resource?.resource.Content}
            </Typography>
            <TextField
              label="Add a review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Rating"
              type="number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
            />
            <Typography variant="h6">Reviews:</Typography>
            {resource?.reviews.map((review, index) => (
              <Box key={index} sx={{ mt: 2 }}>
                <Typography variant="body1">{review.Content}</Typography>
                <Typography variant="body2">Rating: {review.Rating}</Typography>
              </Box>
            ))}
          </Box>
          <Box>
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                py: 2,
                borderRadius: 10,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
              }}
            >
              Submit Review
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
