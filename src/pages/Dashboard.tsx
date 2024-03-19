import {
  Container,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';
import Greeting from '../components/Greeting';
import CheckInStatus from '../components/CheckInStatus';
import Quote from '../components/Quote';
import { Add, Edit, ExitToApp, Minimize } from '@mui/icons-material';

const actions = [
  { icon: <Edit />, name: 'Content' },
  { icon: <Add />, name: 'New Mood' },
  { icon: <ExitToApp />, name: 'Log Out' },
];

export default function Dashboard() {
  return (
    <Container>
      <Greeting />
      <CheckInStatus status={false} />
      <Quote />
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<Minimize />} />}
      >
        {actions.map((action: any) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Container>
  );
}
