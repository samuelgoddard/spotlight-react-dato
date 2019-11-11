import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
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
      title: 'Speak to our friendly team.',
      blurb: `Call <span className="text-primary">${location.phoneNumber}</span> or`,
      btn: true
    },
    {
      seperator: true
    },{
      icon: 'truck',
      title: 'Respond within 60 minutes.',
      blurb: 'Whether at home or work we will come to you and complete the necessary work.',
      btn: false
    },
    {
      seperator: true
    },{
      icon: 'coffee',
      title: 'Sit back and relax.',
      blurb: 'Our highly skilled and trained technicians will complete the job to the highest standard.',
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
      
                  <div className="bg-primary rounded-full text-white w-12 h-12 flex flex-wrap items-center justify-center lg:mx-6 2xl:mx-16 relative z-10">
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
        <p className="text-lg lg:text-xl mb-0">Open 24/7, call on <a className="inline-block no-underline" href={`tel:${location.phoneNumber}`}>{location.phoneNumber}</a> or <a href="#callback" className="btn inline-block text-base ml-2">Get a <strong>Callback</strong></a>
        </p>
      </div>
    </div>
    
    {/* Buckets */}
    <div className="md:border-b border-grey-light pb-12 lg:pb-24 mb-12 lg:mb-24">
      <div className="container container--bleed mx-auto overflow-x-hidden">
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
    </div>

    {/* Reviews */}
    {location.associatedClient.reviewsStoreId && (
      <div className="container mb-8 md:mb-16 lg:mb-32">
        <div className="flex flex-wrap">
          <Reviews storeId={location.associatedClient.reviewsStoreId} />
        </div>
      </div>
    )}

    {/* Form / Content */}
    <div className="bg-grey-light" id="callback">
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
                  <label htmlFor="name" className="text-black sr-only">Name</label>
                  <input 
                    type="text"
                    name="name"
                    className="form-input p-5 mb-3 block w-full"
                    placeholder="Name"
                  />
                </label>

                <label className="block">
                  <label htmlFor="phone" className="text-black sr-only">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input p-5 mb-3 block w-full"
                    placeholder="Phone Number"
                  />
                </label>

                <label className="block">
                  <label htmlFor="email" className="text-black sr-only">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input p-5 mb-5 block w-full"
                    placeholder="Email Address"
                  />
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
            <p className="text-lg mb-0 text-white">Call <a className="no-underline inline-block" href={`tel:${location.phoneNumber}`}>{location.phoneNumber}</a> or <a href="#callback" className="btn inline-block text-base ml-2">Get a <strong>Callback</strong></a></p>
          </div>
        </div>
      </div>
    </div>


    {/* Footer */}
    <Footer
      companyName={location.associatedClient.name}
    />
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