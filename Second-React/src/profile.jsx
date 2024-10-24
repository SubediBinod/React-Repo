import './index.css';

// Conditional Rendering
function Profile({ image, name, desc, isChoppa }) {
  if (isChoppa) {
    return (
      <>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{desc}</p>
      </>
    );
  } else {
    return (
      <>
        <img alt="unknown" />
        <p>Unknown</p>
        <p>Don't Know</p>
      </>
    );
  }
}

export default Profile;
