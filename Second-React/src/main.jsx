import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import choppa from './assets/1.jpg';
import Profile from './profile.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="cont1">
      <Profile
        image={choppa}
        name="Chopper"
        desc="Tony Tony Chopper (pet) Ship Doctor"
        isChoppa={true}
      />
    </div>
  </StrictMode>
);
