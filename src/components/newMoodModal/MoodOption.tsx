import { Box, Typography } from '@mui/material';
import { moodToColour, moodToText } from '../../utils';
import MoodMoji from '../MoodMoji';

export default function MoodOption({
  mood,
  onClick,
  selected,
}: {
  mood: number;
  onClick: () => void;
  selected: boolean;
}) {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={1}
      bgcolor={moodToColour(mood, selected)}
      borderRadius={10}
      justifyContent={'center'}
      p={2}
      px={3}
      onClick={onClick}
      sx={{ cursor: 'pointer' }}
    >
      <Box display={'flex'} flexDirection={'row'} gap={2} alignItems={'center'}>
        <MoodMoji mood={mood} />
        <Box display={'flex'} flexDirection={'column'}>
          <Typography fontWeight={selected ? 600 : 400} variant={'h6'}>
            {moodToText(mood)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
