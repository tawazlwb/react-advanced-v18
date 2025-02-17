import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ name, image, price }) => {
  const url = image && image.url

  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
}

// Product.defaultProps = {
//   id: 'default name',
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// }

export default Product
