import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  console.log('hello')
  return (
    data.reduce((total, item) => {
      const price = item.fields.price

      if (price > total) {
        total = price
      }

      return total
    }, 0) / 100
  )
}

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  const addTocart = useCallback(() => {
    setCart((prevCart) => prevCart + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])

  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  )

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}> cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addTocart={addTocart} />
    </>
  )
}

const BigList = React.memo(({ products, addTocart }) => {
  useEffect(() => {
    console.count('big list called')
  })

  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addTocart={addTocart}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addTocart }) => {
  useEffect(() => {
    console.count('single item called')
  })

  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addTocart}>add to cart</button>
    </article>
  )
}
export default Index
