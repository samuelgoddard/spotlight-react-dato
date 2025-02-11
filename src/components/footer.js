import PropTypes from "prop-types"
import React from "react"

const Footer = ({ companyName }) => (
  <footer className="bg-tertiary-dark py-6 lg:py-12">
    <div className="container">
      <div className="flex flex-wrap">
        <span className="w-full md:w-auto mb-4 md:mb-0 text-white">&copy; Copyright {companyName} {new Date().getFullYear()} | All Rights Reserved</span>
        
        <a
          href="https://adtrak.co.uk"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Read more about Adtrak"
          className="block w-20 lg:w-24 opacity-75 md:ml-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323.1 74.6"><path fill="#FFFFFF" d="M54 73H41.3v-6l-.3-.3c-4 4.8-10.5 7.9-17.1 7.9C6.6 74.6 0 65.7 0 54.7 0 43 6.6 34.8 23.8 34.8c8.5 0 13.1 3.9 16.1 7l.3-.2v-7.2c0-3.9-5.4-7.1-12.3-7.1-8.2 0-14.6 2-18 4.1L4.1 21.1c6-3.7 14.6-6.2 23.8-6.2C41.6 14.9 54 23 54 34.4V73zM27 46.9c-10.3 0-12.6 3.2-12.6 7.8 0 4.8 2.3 8.1 12.6 8.1 8.1 0 13.1-3.8 13.1-8.1.1-4.1-5-7.8-13.1-7.8zm83.3 16.6h-.2c-4.1 6-10.4 11.1-19.8 11.1C74.6 74.6 62 61.9 62 44.8S74.6 15 90.3 15c9 0 14.8 4.6 18.8 9.8h.2V0h13.8v73h-12.7v-9.5zM92.8 28.2c-9.2 0-16.4 7.5-16.4 16.5 0 9.1 7.2 16.6 16.4 16.6 9.1 0 16.4-7.5 16.4-16.6.1-9-7.2-16.5-16.4-16.5zm38.6.5V16.6h5.2V3.9h13.8v12.7h9.6v12.1h-9.6v27.6c0 1.9 1.6 3.4 3.3 3.4h6.3V73h-6.3c-10.1 0-17.1-6.4-17.1-16.6V28.7h-5.2zm73.9-12.4l-4.4 12.6c-1.3-.4-2.7-.7-4.2-.7-8 0-14.3 6.5-14.3 14.6V73h-13.8V16.6h12.8v7.8c2.9-5 7.7-9.4 15.3-9.4 3 0 5.9.5 8.6 1.3zm54 56.7h-12.7v-6l-.3-.2c-4 4.8-10.5 7.9-17.1 7.9-17.2 0-23.8-9-23.8-19.9 0-11.7 6.6-19.8 23.8-19.8 8.5 0 13.1 3.9 16.1 7l.3-.2v-7.2c0-3.9-5.4-7.1-12.3-7.1-8.2 0-14.6 2-18 4.1l-5.8-10.3c6-3.7 14.6-6.2 23.8-6.2 13.7 0 26.1 8.1 26.1 19.6V73zm-26.9-26.1c-10.3 0-12.6 3.2-12.6 7.8 0 4.8 2.3 8.1 12.6 8.1 8.1 0 13.1-3.8 13.1-8.1 0-4.1-5-7.8-13.1-7.8zM269.2 0H283v44.8l22.8-28.1h17.3l-23 28.1 23 28.2h-17.3L283 44.8V73h-13.8V0z"/></svg>
        </a>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  companyName: PropTypes.string,
}

Footer.defaultProps = {
  companyName: ``,
}

export default Footer
