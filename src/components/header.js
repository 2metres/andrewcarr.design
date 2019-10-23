import PropTypes from "prop-types"
import React from "react"

const Header = ({
  title,
  description,
}) => (
  <header
    className="px-12 py-24"
  >
    <div className="container mx-auto">
      <h1 className="text-5xl font-display leading-none break-words uppercase mb-5 font-black">
        {title}
      </h1>
      <h3>
        {description}
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
