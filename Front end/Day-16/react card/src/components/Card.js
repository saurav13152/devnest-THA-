import image from "./meme.jpg";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <img src={image} alt="Meme" />
          <div className="content">
            <h2>This is React Card</h2>
            <h4>Made By-Saurav Chatterjee</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
