import "./App.css";

import equilibrium from "./images/image-equilibrium.jpg";
import iconView from "./images/icon-view.svg";
import ethereum from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import avatar from "./images/image-avatar.png"

function App() {
    return (
        <div className="App">
            <div className="card__image">
                <img src={equilibrium} alt="Equilibrium" />
                <div className="card__image__cover">
                    <img
                        src={iconView}
                        alt="Icon View"
                        className="card__image__icon"
                    />
                </div>
            </div>
            <div className="card__information">
                <div className="card__information__content">
                    <h1>Equilibrium #3429</h1>
                    <p>Our Equilibrium collection promotes balance and calm.</p>
                    <div className="card__information__content_footer">
                        <span className="cryptocurrency">
                            <img src={ethereum} alt="Ethereum" /> 0.041ETH
                        </span>
              <span className="time_left">
                <img src={clock} alt="Clock"/> 3 days left
                        </span>
                    </div>
                </div>
          <div className="card__information__footer">
            <img src={avatar} alt="Avatar" /> 
            <p>Creation of <span>Jules Wyvern</span></p>
                </div>
            </div>
        </div>
    );
}

export default App;
