import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Profile from './profile.jsx';

// Importing images
import robinImage from './assets/robin.png';
import luffyImage from './assets/luffy.png';
import zoroImage from './assets/zoro.png';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>All about Props</h1>
    <h1 >The Straw Hats</h1>
    <div className="container">
      <Profile 
        image={robinImage} 
        name="Nico Robin" 
        desc="Demon child Nico Robin, Straw Hats Archeologist" 
      />
      <Profile 
        image={luffyImage} 
        name="Monkey D. Luffy" 
        desc="Captain of the Straw Hat Pirates" 
      />
      <Profile 
        image={zoroImage} 
        name="Roronoa Zoro" 
        desc="Swordsman of the Straw Hat Pirates" 
      />
    </div>
  </StrictMode>
);
