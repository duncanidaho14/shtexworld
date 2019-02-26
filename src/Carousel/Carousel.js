import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

import banierrehunter from './../Logo/banierrehunter.jpg';
import bannierehunterxhunter from './../Logo/bannierehunterxhunter.jpg';
import logosamourai from './../Logo/samourai.gif';
import logostreet2 from './../Logo/streetfighter2.gif';
import logosonic from './../Logo/sonic.gif';
import logoobelix from './../Logo/obelixfrapperomain.gif';
import logomariokart from './../Logo/mariokart.gif';
import logoglobeallemagne from './../Logo/globeallemagne.gif'

class ControlledCarousel extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          className='carouselBox'
        >
          <Carousel.Item>
            <img
              className="d-block w-100 carousel"
              src={ banierrehunter }
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Hunter X Hunter</h3>
              <p>Son nom vient de l'anglais (Chasseur X Chasseur)</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel"
              src={ bannierehunterxhunter }
              alt="Third slide"
              
            />
  
            <Carousel.Caption>
              <h3>Chapitre de l'areignée</h3>
              <p>Une organisation dangereuse dont doit faire face gon et ses amis</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel"
              src={ logosamourai }
              alt="Third slide"
              width={400}
              height={600}
            />
  
            <Carousel.Caption>
              <h3>Samouraï</h3>
              <p>
                Un samouraï tellement rapide qu'il possède les propriétés d'un ninja
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ logosonic }
              alt="Third slide"
              width={400}
              height={600}
            />
  
            <Carousel.Caption>
              <h3>Sonic</h3>
              <p>
                A la base un jeux vidéo (on le voit à l'image d'ailleurs xD )
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ logostreet2 }
              alt="Third slide"
              width={400}
              height={600}
            />
  
            <Carousel.Caption>
              <h3>Street Fighter</h3>
              <p>
                Un jeu ou que la bagarre existe
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ logoobelix }
              alt="Third slide"
              width={400}
              height={600}
            />
  
            <Carousel.Caption>
              <h3>Obelix</h3>
              <p>
                Obelix met comme d'habitude la raclée aux romains
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ logomariokart }
              alt="Third slide"
              width={400}
              height={600}
            />
  
            <Carousel.Caption>
              <h3>Mario Kart</h3>
              <p>
                Mario fait du draft avec son karting
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ logoglobeallemagne }
              alt="Third slide"
              width={400}
              height={600}
            />
  
            <Carousel.Caption>
              <h3>Allemagne</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
  export default ControlledCarousel;