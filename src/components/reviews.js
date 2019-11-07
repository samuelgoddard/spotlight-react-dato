import React from "react"
import axios from 'axios';
import Glide, { Controls, Breakpoints, Swipe, Images, Anchors } from '@glidejs/glide/dist/glide.modular.esm';

export default class TestComponent extends React.Component {
  componentDidMount() {
    axios.get(`https://api.reviews.co.uk/merchant/reviews?per_page=10&order=desc&store=adtrak-llp`)
    .then(res => {
      let data = res.data
      let formattedData = data.reviews
      
      this.setState({
        reviewsOverview: res.data,
        reviews: formattedData
      });
    })
    .catch( (error) => {
      console.log('error accessing reviews api');
    });

    new Glide('.glide').mount();
    const glide = new Glide('.glide', {
      type: 'carousel',
      perView: 3,
      rewind: false,
      breakpoints: {
        1280: {
          perView: 2
        },
        1024: {
          perView: 1
        }
      },
    });
    glide.mount({ Controls, Breakpoints, Swipe, Images, Anchors })
  }

  constructor(props) {
    super(props);

    this.state = {
      reviewsOverview: [],
      reviews: []
    };
  }
  
  render() {
    return (
      <div className="container">
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {this.state.reviews.map(({ comments }, index) => (
                <li key={index} className="glide__slide">
                  { comments }
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}