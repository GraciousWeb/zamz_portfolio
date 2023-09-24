import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, delay }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + 1}`}
          style={{ animationDelay: `${delay + i * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
