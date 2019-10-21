import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"
import Usp from "../components/usp"
import Hero from "../components/hero"
import Card from "../components/card"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faAngleRight, faClock, faTruck, faCoffee, faThumbsUp, faCheckSquare, faNewspaper } from "@fortawesome/free-solid-svg-icons"

const LocationPage = ({ data: { location, heroImage }}) => {

  const process = [
    {
      icon: faClock, 
      title: 'Whether it’s a chip or a crack, we’ve got you covered.',
      blurb: 'Whether it’s a chip or a crack, we’ve got you covered.',
      btn: true
    },
    {
      seperator: true
    },{
      icon: faTruck,
      title: 'Repair or replacement at a time and place to suit you.',
      blurb: 'Repair or replacement at a time and place to suit you.',
      btn: false
    },
    {
      seperator: true
    },{
      icon: faCoffee,
      title: 'Insurance approved windscreen repairs and replacements.',
      blurb: 'Insurance approved windscreen repairs and replacements.',
      btn: false
    },
  ]

  const buckets = [
    { icon: faThumbsUp, title: 'Whether it’s a chip or a crack, we’ve got you covered.' },
    { icon: faClock, title: 'Repair or replacement at a time and place to suit you.' },
    { icon: faCheckSquare, title: 'Insurance approved windscreen repairs and replacements.' },
    { icon: faNewspaper, title: 'We complete all admin with your insurers to save you time.' }
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
            <FontAwesomeIcon className="text-primary" icon={faCheck} /> 24/7 service, 365 days a year
          </li>
          <li className="text-white w-full lg:w-auto lg:mx-8 2xl:mx-12">
            <FontAwesomeIcon className="text-primary" icon={faCheck} /> All makes and models
          </li>
          <li className="text-white w-full lg:w-auto lg:mx-8 2xl:mx-12">
            <FontAwesomeIcon className="text-primary" icon={faCheck} /> At home or work, we can come to you
          </li>
        </ul>
      </div>
    </div>

    {/* Hero */}
    <Hero 
      title={`Same Day Windscreen Repair & Replacement in <span class="text-primary">${location.name}</span>`}
      blurb={`A fast and reliable <span className="font-bold">insurance approved</span> service. Whether at home, work, or the side of the road!`}
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
                    <FontAwesomeIcon className="text-xl far fa-angle-right mt-1" icon={faAngleRight} />
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
                    <FontAwesomeIcon className="text-xl far fa-angle-right mt-1" icon={faAngleRight} />
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
    <div className="container container--bleed mx-auto pb-12 xl:mb-32 overflow-x-hidden">
      <div className="flex flex-wrap md:-mx-3 xl:-mx-6">
        {buckets.map(({ title, icon }, index) => (
          <div key={index} className="w-full md:w-1/2 xl:w-1/4 md:px-3 xl:px-6 md:mb-6 xl:mb-0">
            <Usp
              title={title} 
              icon={<FontAwesomeIcon className="text-3xl mt-1 text-primary" icon={icon} />}
            />
          </div>
        ))}
      </div>
    </div>

    {/* Reviews */}

    {/* Form / FAQs */}

    {/* Content */}

    {/* Footer CTA */}

    {/* Footer */}

    <h2>Location name: {location.name}</h2>
    <h2>Location associated client: {location.associatedCompany}</h2>
    <h2>Location Phone Number: {location.phoneNumber}</h2>
    <h2>Location mailto Address: {location.mailAddress}</h2>
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
      associatedCompany
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