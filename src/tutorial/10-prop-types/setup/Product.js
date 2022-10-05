import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ id, name, image, price }) => {
  return (
    <article className='product'>
      <img src={image.url} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  )
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
}

Product.defaultProps = {
  id: 'default name',
  name: 'default name',
  price: 3.99,
  image: defaultImage,
}

export default Product
