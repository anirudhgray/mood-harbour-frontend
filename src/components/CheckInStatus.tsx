import { AutoAwesome, Whatshot } from '@mui/icons-material';
import { Box, Typography, alpha } from '@mui/material';

export default function CheckInStatus({ status }: { status: boolean }) {
  return (
    <Box
      display={'flex'}
      gap={1}
      sx={{ backgroundColor: alpha(status ? '#00FF00' : '#F89595', 0.44) }}
      borderRadius={20}
      p={2}
      justifyContent={'space-between'}
      my={2}
    >
      <Box display={'flex'} gap={1}>
        <AutoAwesome color="warning" />
        <Typography variant="body1">Today's Check In</Typography>
      </Box>
      <Box display={'flex'} gap={1}>
        <Typography variant="body1">{status ? '1' : '0'}/1</Typography>
        <Whatshot />
      </Box>
    </Box>
  );
}
