import {
  Backdrop,
  Box,
  Fade,
  Modal,
  IconButton,
  Typography,
  Button,
  TextareaAutosize,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import axios from '../../axios';
import { toast } from 'react-toastify';

export default function NewMoodModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState<null | number>(null);
  const [attributes, setAttributes] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  const isNextDisabled = () => {
    if (step === 1) {
      return mood === null;
    }
    if (step === 2) {
      return false;
    }
    return false;
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        '/mood/create',
        {
          mood_type: mood,
          notes: notes,
          attributes: attributes,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setStep(1);
      setMood(null);
      setAttributes([]);
      setNotes('');
      handleClose();
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
            sx={{ position: 'absolute', left: 16, top: 16 }}
            variant="body1"
            component="div"
          >
            {step}/3
          </Typography>
          <Typography
            textAlign={'center'}
            mt={4}
            mb={2}
            fontWeight={300}
            variant="h4"
            component="div"
          >
            {step === 1
              ? 'How are you feeling today?'
              : step === 2
              ? "What's making you feel this way? What activites did you do?"
              : 'Any additional notes?'}
          </Typography>
          <Box overflow={'auto'}>
            {step === 1 && (
              <StepOne setSelectedMood={setMood} selectedMood={mood} />
            )}
            {step === 2 && (
              <StepTwo
                setSelectedAttributes={setAttributes}
                selectedAttributes={attributes}
              />
            )}
            {step === 3 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  }}
                >
                  <Typography variant="h6">Additional Notes</Typography>
                  <TextareaAutosize
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    style={{
                      borderRadius: 10,
                      padding: 10,
                      border: '1px solid #ccc',
                    }}
                    placeholder="Write anything you want to remember about today."
                  />
                </Box>
              </Box>
            )}
          </Box>
          <Box>
            {step > 1 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    py: 2,
                    borderRadius: 10,
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '100%',
                  }}
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </Button>
              </Box>
            )}
            <Button
              variant="contained"
              sx={{
                mt: 3,
                py: 2,
                borderRadius: 10,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
              }}
              disabled={isNextDisabled()}
              onClick={() => {
                if (step === 3) handleSubmit();
                setStep(step + 1);
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
