import React from 'react'
import Slider from "react-slick";
import './ind.css'
import logo from './logoo1.png'
class Industry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFooter: 1
    };

    this.settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 470,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
        }
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <SimpleSlider settings={this.settings} />
      </div>
    );
  }
}

export default Industry

class SimpleSlider extends React.Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    console.log("slider render");
    return (
      <Slider {...this.props.settings}>
        <div>
          <div className="slider">
            <div className="product">
              <img src={logo} alt="image" />
              <div className="pro-desc">
                <h4>VIP/Celebrity cyber protection, E-commerce</h4>
                <button className="btn btn-outline Btn--ghost-2 Btn--transparent">Explore</button>
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className="slider">
            <div className="product">
              <img src={logo} alt="image" />
              <div className="pro-desc">
                <h4>SMB’s</h4>
                <button className="btn btn-outline Btn--ghost-2 Btn--transparent">Explore</button>
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className="slider">
            <div className="product">
              <img src={logo} alt="image" />
              <div className="pro-desc">
                <h4>Banking & Financial</h4>
                <button className="btn btn-outline Btn--ghost-2 Btn--transparent">Explore</button>
              </div>

            </div>
          </div>
        </div>

        <div>
          <div className="slider">
            <div className="product">
              <img src={logo} alt="image" />
              <div className="pro-desc">
                <h4>Education</h4>
                <button className="btn btn-outline Btn--ghost-2 Btn--transparent">Explore</button>
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className="slider">
            <div className="product">
              <img src={logo} alt="image" />
              <div className="pro-desc">
                <h4>Health</h4>
                <button className="btn btn-outline Btn--ghost-2 Btn--transparent">Explore</button>
              </div>

            </div>
          </div>
        </div>
        <div>
          <div className="slider">
            <div className="product">
              <img src={logo} alt="image" />
              <div className="pro-desc">
                <h4>Government agencies</h4>
                <button className="btn btn-outline Btn--ghost-2 Btn--transparent">Explore</button>
              </div>

            </div>
          </div>
          
        </div>
        <div>
          <div className="slider">
            <div className="product">
              <img src={logo} alt="image" />
              <div className="pro-desc">
                <h4>Technology & Telecoms verticals </h4>
                <button className="btn btn-outline Btn--ghost-2 Btn--transparent">Explore</button>
              </div>

            </div>
          </div>
        </div>

        


      </Slider>
    );
  }
}




