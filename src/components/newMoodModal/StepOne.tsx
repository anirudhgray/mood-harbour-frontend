import { Box } from '@mui/material';
import MoodOption from './MoodOption';

export default function StepOne({
  setSelectedMood,
  selectedMood,
}: {
  setSelectedMood: React.Dispatch<React.SetStateAction<number | null>>;
  selectedMood: number | null;
}) {
  const moods: number[] = [0, 1, 2, 3, 4];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      {moods.map((mood) => (
        <MoodOption
          key={mood}
          mood={mood}
          onClick={() => setSelectedMood(mood)}
          selected={selectedMood === mood}
        />
      ))}
    </Box>
  );
}
