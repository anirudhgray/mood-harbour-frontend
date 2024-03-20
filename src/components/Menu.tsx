import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import {
  Add,
  Edit,
  ExitToApp,
  Face,
  Home,
  Minimize,
  TextSnippet,
} from '@mui/icons-material';
import { useState } from 'react';
import NewMoodModal from './newMoodModal/NewMoodModal';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <TextSnippet />, name: 'Content' },
  { icon: <Edit />, name: 'Add Resource' },
  { icon: <Add />, name: 'New Mood' },
  {
    icon: <ExitToApp />,
    name: 'Log Out',
    onclick: () => {
      localStorage.clear();
      window.location.reload();
    },
  },
  {
    icon: <Face />,
    name: 'Face Analysis',
  },
  {
    icon: <Home />,
    name: 'Home',
  },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  actions[0].onclick = () => navigate('/resources');
  actions[2].onclick = handleOpen;
  actions[3].onclick = () => navigate('/face');
  actions[5].onclick = () => navigate('/dashboard');

  return (
    <>
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
      <NewMoodModal open={open} handleClose={handleClose} />
    </>
  );
}
