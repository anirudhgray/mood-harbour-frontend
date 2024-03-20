import { alpha } from '@mui/material';

// add a "dark" param to the func below with default value of false
export const moodToColour = (mood: number, dark = false) => {
  if (mood === 0) {
    return alpha('#F89595', dark ? 0.9 : 0.44);
  }
  if (mood === 1) {
    return alpha('#F895EE', dark ? 0.9 : 0.44);
  }
  if (mood === 2) {
    return alpha('#9599F8', dark ? 0.9 : 0.44);
  }
  if (mood === 3) {
    return alpha('#95F8EC', dark ? 0.9 : 0.44);
  }
  return alpha('#A3F895', dark ? 0.9 : 0.44);
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
