import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import sliderPNG from './slider-image.png';
import sliderJPG4 from './slider-image2.jpg';
import rightSVG from '@plone/volto/icons/right-key.svg';
import leftSVG from '@plone/volto/icons/left-key.svg';

const NextArrow = ({ className, style, onClick }) => (
  <Button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <Icon name={rightSVG} size="70px" color="#fff" />
  </Button>
);

const PrevArrow = ({ className, style, onClick }) => (
  <Button
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  >
    <Icon name={leftSVG} size="70px" color="#fff" />
  </Button>
);

const View = props => {
  return (
    <div
      className="tile view mainslider full-width"
      style={{
        background: `url(${sliderPNG}) center no-repeat`,
      }}
    >
      <Slider
        customPaging={dot => <div />}
        dots={true}
        fade
        dotsClass="slick-dots slick-thumb"
        infinite
        speed={500}
        slidesToShow={5}
        slidesToScroll={5}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        autoplay={true}
        pauseOnHover={true}
        mobileFirst={true}
      >

        <div>
          <div className="slide slide1">
            <h3>Enjoy high-quality</h3>
            <h1>Articles</h1>
            <Link to="/articles">Read our latest articles</Link>
          </div>
        </div>

        <div>
          <div className="slide slide2">
            <h3>View top-notch</h3>
            <h1>Rankings</h1>
            <Link to="/rankings">View our rankings</Link>
          </div>
        </div>

        <div>
          <div className="slide slide3">
            <h3>Dive into our</h3>
            <h1>Fantasy Leagues</h1>
            <Link to="/fantasy-leagues">Join our community</Link>
          </div>
        </div>
        
        <div>
          <div className="slide slide4">
            <h3>Analyze the</h3>
            <h1>Projections</h1>
            <Link to="/projections">Browse player stats</Link>
          </div>
        </div>
        <div>
          <div className="slide slide5">
            <h3>Listen to our</h3>
            <h1>Podcasts</h1>
            <Link to="/podcasts">Hear us speak</Link>
          </div>
        </div>
      </Slider>

    </div>

  );

};

export default View;
