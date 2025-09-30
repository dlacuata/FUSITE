
// Import single CSS file with all responsive styles
import './study-hours.css';
import { Karla } from 'next/font/google';

const karla = Karla({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-karla',
});

export default function StudyHours() {
  return (
    <div className="study-hours-container">
      <div className="study-hours-header">
        <div className="study-hours-image-container">
          <img src="/study-hours-header-image.jpg" alt="Study Hours Header" className="study-hours-image" />
          <div className="study-hours-image-overlay"></div>
          <h2 className={`programs-subtitle ${karla.variable}`}>Programs</h2>
          <h1 className={`study-hours-title ${karla.variable}`}>STUDY HOURS</h1>
        </div>
      </div>
    </div>
  );
}
