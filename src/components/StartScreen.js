import "./StartScreen.css";
import logo from "../assets/LETRECO.png";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <img src={logo} alt="logo" />
      <h1>Clique no botão abaixo para começar a jogar!</h1>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
