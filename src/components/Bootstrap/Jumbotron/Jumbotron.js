import React, {useRef} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './Jumbotron.css';

const Jumbotron_ = () => {
  let bgColor = '';
  const bgColorChange = () => {
    bgColor = "red";
  }
  const jumbotronTextRef = useRef();
  const mouseHandler = () => {
    const width = jumbotronTextRef.Jumbotron-Text.clientWidth;
    const height = jumbotronTextRef.Jumbotron-Text.clientHeight;
    console.log(width, height)
  }
  return (
          <Jumbotron className="Jumbotron">
              <div className="container Jumbotron-Text"
              onMouseMove={mouseHandler}
              ref={jumbotronTextRef}
              >
                <h1 className="display-4 Jumbotron-heading">HYGIENE FIRST </h1>
                {/* <p className="emoji d-inline">😇</p> */}
                <div className="row">
                <p className="col-sm-8">We make sure that the food you get is clean and cooked with love and proper hygiene.
                Have our word and start ordering our delicious cuisines. </p>
                </div>
                <hr/>
                <h5 >DON'T LET COVID-19 SCARE AWAY YOUR HUNGER 😋</h5>
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <Button className="Button-front">Learn more</Button>
                    </div>
                    <div onClick={bgColorChange} style={{color: bgColor}} className="flip-box-back">
                      <Button className="Button-back">NOW!!</Button>
                    </div>
                  </div>
                </div>
              </div>
          </Jumbotron>
  )
}

export default Jumbotron_;