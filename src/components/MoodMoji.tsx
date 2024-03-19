import Angry from '../assets/angry.svg';
import Sad from '../assets/sad.svg';
import Flat from '../assets/flat.svg';
import Okay from '../assets/okay.svg';
import Good from '../assets/happy.svg';

export default function MoodMoji({ mood }: { mood: number }) {
  switch (mood) {
    case 0:
      return <img className="w-16" src={Angry} alt="Angry" />;
    case 1:
      return <img className="w-16" src={Sad} alt="Sad" />;
    case 2:
      return <img className="w-16" src={Flat} alt="Flat" />;
    case 3:
      return <img className="w-16" src={Okay} alt="Okay" />;
    default:
      return <img className="w-16" src={Good} alt="Good" />;
  }
}
