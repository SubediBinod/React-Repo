import PropTypes from 'prop-types'; // Import PropTypes for type-checking

function Profile({ image, name, desc }) {
    return (
        <div className="container">
            <div className="Profile">
                <img src={image} alt={name} />
                <p className="name">{name}</p>
                <p className="desc">{desc}</p>
            </div>
        </div>
    );
}

// Default props: these will be used if the caller doesn't provide any value
Profile.defaultProps = {
    image: 'https://via.placeholder.com/100', // Default image if none is provided
    name: 'Unknown Character',
    desc: 'No description available',
};

// Prop types for type-checking
Profile.propTypes = {
    image: PropTypes.string.isRequired,  // The image should be a string and required
    name: PropTypes.string.isRequired,   // The name should be a string and required
    desc: PropTypes.string.isRequired,   // The description should be a string and required
};

export default Profile;
