import { alpha } from '@mui/material';

export const moodToColour = (mood: number) => {
  if (mood === 0) {
    return alpha('#F89595', 0.44);
  }
  if (mood === 1) {
    return alpha('#F895EE', 0.44);
  }
  if (mood === 2) {
    return alpha('#9599F8', 0.44);
  }
  if (mood === 3) {
    return alpha('#95F8EC', 0.44);
  }
  return alpha('#A3F895', 0.44);
};

export const moodToText = (mood: number) => {
  if (mood === 0) {
    return 'Terrible';
  }
  if (mood === 1) {
    return 'Bad';
  }
  if (mood === 2) {
    return 'Okay';
  }
  if (mood === 3) {
    return 'Good';
  }
  return 'Great';
};
