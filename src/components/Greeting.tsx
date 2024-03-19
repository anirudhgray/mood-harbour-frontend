import { Whatshot } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export default function Greeting() {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Typography variant="h2" mt={2}>
        Hey,{' '}
        <span className="font-bold">
          {localStorage.getItem('name')?.split(' ')[0]}
        </span>
      </Typography>
      <Box
        display={'flex'}
        gap={1}
        bgcolor={'lightgray'}
        borderRadius={20}
        p={1}
        my={2}
      >
        <Whatshot color="error" />
        <Typography variant="body1">5</Typography>
      </Box>
    </Box>
  );
}
