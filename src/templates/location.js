import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"
import Usp from "../components/usp"
import Hero from "../components/hero"
import Card from "../components/card"
import Reviews from "../components/reviews"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LocationPage = ({ data: { location, heroImage }}) => {

  const process = [
    {
      icon: 'clock', 
      title: 'Whether it’s a chip or a crack, we’ve got you covered.',
      blurb: `Same Day Windscreen Repair & Replacement in <span className="text-primary">${location.phoneNumber}</span>`,
      btn: true
    },
    {
      seperator: true
    },{
      icon: 'truck',
      title: 'Repair or replacement at a time and place to suit you.',
      blurb: 'Repair or replacement at a time and place to suit you.',
      btn: false
    },
    {
      seperator: true
    },{
      icon: 'coffee',
      title: 'Insurance approved windscreen repairs and replacements.',
      blurb: 'Insurance approved windscreen repairs and replacements.',
      btn: false
    },
  ]

  return (
  <>
    <SEO 
      title={location.name}
    />
    
    {/* Header */}
    <Header
      location={location.name}
      phoneNumber={location.phoneNumber}
    />

    {/* USPs Bar */}
    <div className="bg-secondary py-4">
      <div className="container">
        <ul className="flex flex-wrap text-center justify-center items-center max-w-6xl mx-auto">
          <li className="text-white w-full lg:w-auto lg:mx-8 2xl:mx-12">
            <FontAwesomeIcon className="text-primary" icon="check" /> 24/7 service, 365 days a year
          </li>
          <li className="text-white w-full lg:w-auto lg:mx-8 2xl:mx-12">
            <FontAwesomeIcon className="text-primary" icon="check" /> All makes and models
          </li>
          <li className="text-white w-full lg:w-auto lg:mx-8 2xl:mx-12">
            <FontAwesomeIcon className="text-primary" icon="check" /> At home or work, we can come to you
          </li>
        </ul>
      </div>
    </div>

    {/* Hero */}
    <Hero 
      title={`Same Day Windscreen Repair & Replacement in <span class="text-primary">${location.name}</span>`}
      blurb={`A fast and reliable <span class="font-bold">insurance approved</span> service. Whether at home, work, or the side of the road!`}
      heroImage={heroImage}
      phoneNumber={location.phoneNumber}
    />

    {/* Process List */}
    <div className="container mx-auto relative z-10 pb-12 xl:mb-16 -mt-20">
      <div className="p-6">
        <div className="flex flex-wrap xl:px-24 md:-mx-6 lg:-mx-0">
          {process.map(({ title, blurb, icon, btn, seperator }, index) => (
            <div 
              key={index}
              className={`${ seperator  ? 'hidden lg:block self-center relative' : 'w-full md:flex-1 mb-6 lg:mb-0 md:px-6 lg:px-0' }`}
            >
              {index === 1 && (
                <>
                  <svg className="absolute top-0 z-0 -mt-1" width="303" height="38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 18.889s55 38 150.5 0 150.5 0 150.5 0" stroke="#D1DD45" strokeWidth="3" strokeDasharray="10 10"/></svg>
      
                  <div className="bg-primary rounded-full text-white w-12 h-12 flex flex-wrap items-center justify-center lg:mx-6 2xl:mx-16 relative z-10">
                    <FontAwesomeIcon className="text-xl far fa-angle-right mt-1" icon="angle-right" />
                  </div>
                </>
              )}
              {title && (
                <Card
                  icon={<FontAwesomeIcon className="text-secondary text-3xl md:text-4xl xl:text-5xl" icon={icon} />}
                  title={title}
                  blurb={blurb}
                  btn={btn}
                />
              )}
              {index === 3 && (
                <>
                  <svg className="absolute top-0 z-0 -mt-1" width="303" height="38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 18.889s55 38 150.5 0 150.5 0 150.5 0" stroke="#D1DD45" strokeWidth="3" strokeDasharray="10 10"/></svg>
      
                  <div className="bg-primary rounded-full text-white w-12 h-12 flex flex-wrap items-center justify-center lg:mx-6 2xl:mx-16 relative z-10" style={` background-color: ${location.client.bgColor};` }>
                    <FontAwesomeIcon className="text-xl far fa-angle-right mt-1" icon="angle-right" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Call */}
    <div className="container mx-auto pb-12 xl:mb-16">
      <div className="w-full md:w-3/4 mx-auto text-center align-middle">
        <p className="text-lg lg:text-xl mb-0">Open 24/7, call on {location.phoneNumber} or <a href="#" className="btn inline-block text-base ml-2">Get a <strong>Callback</strong></a>
        </p>
      </div>
    </div>
    
    {/* Buckets */}
    <div className="container container--bleed mx-auto md:mb-12 lg:mb-32 overflow-x-hidden">
      <div className="flex flex-wrap md:-mx-3 xl:-mx-6">
        {location.usps.map(({ heading, icon }, index) => (
          <div key={index} className="w-full md:w-1/2 xl:w-1/4 md:px-3 xl:px-6 md:mb-6 xl:mb-0">
            <Usp
              title={heading} 
              icon={<FontAwesomeIcon className="text-3xl mt-1 text-primary" icon={`${icon}`} />}
            />
          </div>
        ))}
      </div>
    </div>

    {/* Reviews */}
    <div className="container">
      <div className="flex flex-wrap">
        <Reviews />
      </div>
    </div>

    {/* Form / Content */}
    <div className="bg-grey-light lg:mb-32">
      <div className="container">
        <div className="flex flex-wrap py-12 lg:py-0 items-center">
          <div className="w-full lg:w-1/2 bg-white py-12 lg:py-16 lg:py-24">
            <div className="max-w-xs mx-auto">
              <div className="mb-12">
                <h2 className="text-center">Get a callback and a free qoute today!</h2>
                <p className="text-center text-secondary text-lg">Fill in the form below and one of our friendly team will be in touch.</p>
              </div>
            </div>

            <div className="max-w-sm mx-auto">
              <form name="contact" method="POST" data-netlify="true">
                
                <label className="block">
                  <span className="text-black hidden">Name</span>
                  <input className="form-input p-5 mb-3 block w-full" placeholder="Name" />
                </label>

                <label className="block">
                  <span className="text-black hidden">Phone Number</span>
                  <input className="form-input p-5 mb-3 block w-full" placeholder="Phone Number" />
                </label>

                <label className="block">
                  <span className="text-black hidden">Email Address</span>
                  <input className="form-input p-5 mb-5 block w-full" placeholder="Email Address" />
                </label>
                <div className="text-center">
                  <button type="submit" className="btn text-base mx-auto">Request <strong>Callback</strong></button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-12 lg:py-16 lg:py-24">
            <div className="max-w-xl mx-auto content px-8 lg:px-24 2xl:px-12">
              <h2 className="text-secondary-dark">Windscreens in {location.name}</h2>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam erat. Nulla volutpat elementum velit at suscipit.</p>

              <p>Aenean tristique sed sem quis elementum. Vestibulum convallis dolor id diam vehicula, a ultricies dui accumsan. Donec ut metus iaculis, mollis ex ac, sodales felis. Morbi in condimentum massa, vitae efficitur massa.</p>
              
              <p>Cras vestibulum eu leo eget pharetra. In hac habitasse platea dictumst. Ut et nulla tincidunt, hendrerit ex sed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer CTA */}
    <div className="m-usp-banner bg-secondary-dark py-12">
      <div className="container 2xl:pl-56 relative z-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-8/12 mb-6 xl:mb-0">
            <h2 className="text-white">Operating in {location.name} and the surrounding areas.</h2>
            <p className="text-lg lg:text-xl text-primary mb-0">We offer a 24/7 service, 365 days a year</p>
          </div>
          <div className="w-full xl:w-4/12 xl:text-right">
            <p className="text-lg mb-0 text-white">Call <span className="no-underline inline-block">{location.phoneNumber}</span> or <a href="#" className="btn inline-block text-base ml-2">Get a <strong>Callback</strong></a></p>
          </div>
        </div>
      </div>
    </div>


    {/* Footer */}
    <footer className="bg-tertiary-dark py-6 lg:py-12">
      <div className="container">
        <div className="flex flex-wrap">
          <span className="w-full md:w-auto mb-4 md:mb-0 text-white">&copy; Copyright 2019 Company Name | All Rights Reserved</span>
          
          <a
            href="https://adtrak.co.uk"
            rel="noopener norefered"
            target="_blank"
            className="block w-20 lg:w-24 opacity-75 md:ml-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323.1 74.6"><path fill="#FFFFFF" d="M54 73H41.3v-6l-.3-.3c-4 4.8-10.5 7.9-17.1 7.9C6.6 74.6 0 65.7 0 54.7 0 43 6.6 34.8 23.8 34.8c8.5 0 13.1 3.9 16.1 7l.3-.2v-7.2c0-3.9-5.4-7.1-12.3-7.1-8.2 0-14.6 2-18 4.1L4.1 21.1c6-3.7 14.6-6.2 23.8-6.2C41.6 14.9 54 23 54 34.4V73zM27 46.9c-10.3 0-12.6 3.2-12.6 7.8 0 4.8 2.3 8.1 12.6 8.1 8.1 0 13.1-3.8 13.1-8.1.1-4.1-5-7.8-13.1-7.8zm83.3 16.6h-.2c-4.1 6-10.4 11.1-19.8 11.1C74.6 74.6 62 61.9 62 44.8S74.6 15 90.3 15c9 0 14.8 4.6 18.8 9.8h.2V0h13.8v73h-12.7v-9.5zM92.8 28.2c-9.2 0-16.4 7.5-16.4 16.5 0 9.1 7.2 16.6 16.4 16.6 9.1 0 16.4-7.5 16.4-16.6.1-9-7.2-16.5-16.4-16.5zm38.6.5V16.6h5.2V3.9h13.8v12.7h9.6v12.1h-9.6v27.6c0 1.9 1.6 3.4 3.3 3.4h6.3V73h-6.3c-10.1 0-17.1-6.4-17.1-16.6V28.7h-5.2zm73.9-12.4l-4.4 12.6c-1.3-.4-2.7-.7-4.2-.7-8 0-14.3 6.5-14.3 14.6V73h-13.8V16.6h12.8v7.8c2.9-5 7.7-9.4 15.3-9.4 3 0 5.9.5 8.6 1.3zm54 56.7h-12.7v-6l-.3-.2c-4 4.8-10.5 7.9-17.1 7.9-17.2 0-23.8-9-23.8-19.9 0-11.7 6.6-19.8 23.8-19.8 8.5 0 13.1 3.9 16.1 7l.3-.2v-7.2c0-3.9-5.4-7.1-12.3-7.1-8.2 0-14.6 2-18 4.1l-5.8-10.3c6-3.7 14.6-6.2 23.8-6.2 13.7 0 26.1 8.1 26.1 19.6V73zm-26.9-26.1c-10.3 0-12.6 3.2-12.6 7.8 0 4.8 2.3 8.1 12.6 8.1 8.1 0 13.1-3.8 13.1-8.1 0-4.1-5-7.8-13.1-7.8zM269.2 0H283v44.8l22.8-28.1h17.3l-23 28.1 23 28.2h-17.3L283 44.8V73h-13.8V0z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  </>
  )
}

export default LocationPage

export const query = graphql`
  query LocationQuery($slug: String!) {
    location: datoCmsLocation(slug: { eq: $slug }) {
      name
      phoneNumber
      mailAddress
      associatedClient {
        name
        reviewsStoreId
      }
      usps {
        heading
        icon
      }
    }
    heroImage: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`