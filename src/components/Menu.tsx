import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { Add, Edit, ExitToApp, Minimize } from '@mui/icons-material';

const actions = [
  { icon: <Edit />, name: 'Content' },
  { icon: <Add />, name: 'New Mood' },
  {
    icon: <ExitToApp />,
    name: 'Log Out',
    onclick: () => {
      localStorage.clear();
      window.location.reload();
    },
  },
];

export default function Menu() {
  return (
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
          onClick={action.onclick ? action.onclick : () => {}}
        />
      ))}
    </SpeedDial>
  );
}
