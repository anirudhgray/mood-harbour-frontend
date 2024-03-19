import { Box, Typography } from '@mui/material';
import { moodToColour, moodToText } from '../utils';
import MoodMoji from './MoodMoji';
import { MoodResObject } from '../pages/Dashboard';

export default function MoodBox({ mood }: { mood: MoodResObject }) {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={1}
      bgcolor={moodToColour(mood.mood.Mood)}
      sx={{ backgroundColor: moodToColour(mood.mood.Mood) }}
      borderRadius={10}
      justifyContent={'center'}
      p={2}
      px={3}
      my={2}
    >
      <Box display={'flex'} flexDirection={'row'} gap={2} alignItems={'center'}>
        <MoodMoji mood={mood.mood.Mood} />
        <Box display={'flex'} flexDirection={'column'}>
          <Typography fontWeight={600} variant={'h6'}>
            {moodToText(mood.mood.Mood)}
          </Typography>
          <Typography variant={'caption'}>
            {new Date(mood.mood.CreatedAt).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>
      {mood.attributes && (
        <Typography variant="body2">
          Factors affecting your mood:{' '}
          {mood.attributes.map((attr) => attr.Name).join(', ')}
        </Typography>
      )}
      <Typography variant="body2">{mood.mood.Notes}</Typography>
    </Box>
  );
}
