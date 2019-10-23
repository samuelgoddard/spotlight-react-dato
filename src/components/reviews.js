import React from "react"
import axios from 'axios';

export default class TestComponent extends React.Component {
  componentWillMount() {
    axios.get(`http://api.reviews.co.uk/merchant/reviews?per_page=10&order=desc&store=adtrak-llp`)
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
        <div className="flex flex-wrap">
          {this.state.reviews.map(({ comments }, index) => (
            <div key={index} className="w-1/3 mb-10">
              { comments }
            </div>
          ))}
        </div>
      </div>
    );
  }
}