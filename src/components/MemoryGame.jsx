import './MemoryGame.css';

const MemoryGame = ({ images }) => {
  return (
    <div>
      <h1>Memory Game</h1>
      <p>Build your memory game! </p>
      <p>Here are the sample images:</p>
      <div className="game-container">
        {images.map((image) => (
          <div className='game-container__img-container' key={image}>
           <div className='game-container__img' style={{backgroundImage: `url(${image})`}}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
