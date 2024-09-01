import React from 'react';

const styles = {
  heroContainer: {
    position: 'relative',
    width: '100%',
    height: '500px',
    padding: '0',
    margin: '0',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  videoBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  heroText: {
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0',
  },
  heroSubText: {
    color: 'white',
    fontSize: '1.5rem',
    marginTop: '5rem',
    fontWeight: 'normal',
    textAlign: 'center',
  },
};

const Hero2 = ({ pageName, image, video, subText }) => {
  return (
    <div style={styles.heroContainer}>
      {video ? (
        <video autoPlay loop muted style={styles.videoBackground}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div style={{ ...styles.backgroundImage, backgroundImage: `url(${image})` }}></div>
      )}
      <div style={styles.overlay}>
        <h1 style={styles.heroText}>{pageName}</h1>
        {subText && <h3 style={styles.heroSubText}>{subText}</h3>}
      </div>
    </div>
  );
};

export default Hero2;
