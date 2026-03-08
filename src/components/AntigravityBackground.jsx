import Antigravity from './Antigravity';
import './AntigravityBackground.css';

const AntigravityBackground = () => {
  return (
    <div className="antigravity-bg">
      <Antigravity
        count={800}
        magnetRadius={7}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.5}
        lerpSpeed={0.05}
        color="#5227FF"
        autoAnimate
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        particleShape="capsule"
        fieldStrength={10}
      />
    </div>
  );
};

export default AntigravityBackground;
