import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  if (!product) { 
    return <h2>Product not found</h2>;
  }
  const{ name, image, price, description } = product;
  
  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h4>${price}</h4>
      <p>{description}</p>
      <Link to='/products' className='btn'>Back to the product</Link>
    </section>
  );
};

export default SingleProduct;
