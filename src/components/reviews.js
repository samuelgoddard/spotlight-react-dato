import React from "react"
import PropTypes from "prop-types"
import axios from 'axios';
import EmblaCarouselReact from 'embla-carousel-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Reviews extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      stats: [],
      isLoading: true,
      storeId: props.storeId,
    };
  }

  fetchReviews() {
    axios.get(`https://api.reviews.co.uk/merchant/reviews?per_page=10&order=desc&store=${ this.state.storeId }`)
    
    .then(res => 
      this.setState({
        reviews: res.data.reviews,
        stats: res.data.stats,
        isLoading: false
      })
    )
    .catch((err) => {
      console.log(err + ': Error accessing Reviews API');
    });
  }

  componentDidMount() {
    this.fetchReviews();
  }
  
  render() {
    return (
      <>
        {!this.state.isLoading ? (
          <div className="max-w-full">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 xl:w-1/4">
                <div className="mb-4">
                  {[...Array(Math.round(this.state.stats.average_rating))].map((i) => {
                    return <FontAwesomeIcon key={i} className="text-primary text-lg xl:text-xl mr-1" icon="star" />
                  })}
                </div>

                <div className="flex flex-wrap mb-6 md:mb-0">
                  <div className="mr-12">
                    <span className="text-grey">Rated</span>
                    <span className="text-2xl text-black font-display font-bold block leading-tight">{this.state.stats.average_rating}</span>
                  </div>

                  <div className="mr-12">
                    <span className="text-grey">Based on</span>
                    <span className="text-2xl text-black font-display font-bold block leading-tight">{this.state.stats.total_reviews} reviews</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 xl:w-3/4 relative px-12">
                <EmblaCarouselReact
                  emblaRef={c => (this.embla = c)}
                  htmlTagName={`div`}
                  options={{ 
                    align: 'start',
                    slidesToScroll: 1,
                    draggable: true,
                    loop: true,
                    speed: 5,
                    containScroll: true,
                  }}
                  className="embla"
                >
                  <div className="embla__container max-w-full">
                    {this.state.reviews.map((review =>
                      <div key={review.store_review_id} className="embla__slide">
                        <p className="text-base mb-3">{ review.comments }</p>

                        {[...Array(Math.round(review.rating))].map((i) => {
                          return <FontAwesomeIcon key={i} className="text-primary mr-1 text-sm" icon="star" />
                        })}
                      </div>
                    ))}
                  </div>
                </EmblaCarouselReact>
                <button className="absolute top-0 left-0 btn--reset" onClick={() => this.embla.scrollPrev()}><FontAwesomeIcon className="text-primary text-lg xl:text-xl mt-12" icon="angle-left" /></button>
                <button className="absolute top-0 right-0 btn--reset" onClick={() => this.embla.scrollNext()}><FontAwesomeIcon className="text-primary text-lg xl:text-xl mt-12" icon="angle-right" /></button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading Reviews&hellip;</p>
        )}
      </>
    );
  }
}
Reviews.propTypes = {
  storeId: PropTypes.string,
}

Reviews.defaultProps = {
  storeId: ``,
}

export default Reviews;