import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slices/Products-slices';
import { addToCart } from '../slices/Cart-slices';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ProductsSlices from '../slices/Products-slices';

function Product() {
  const allProducts = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  console.log(allProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const getItemQuantity = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  const [category, setCategory] = useState('All'); // Default category is 'All'
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const cardsPerPage = 4; // Number of cards to display per page

  // Ensure allProducts is an array before filtering
  const filteredProducts = Array.isArray(allProducts)
    ? allProducts.filter((product) => {
        if (category === 'All') {
          return true; // Show all products when 'All' is selected
        }
        return product.category === category || product.title.toLowerCase().includes(category.toLowerCase());
      })
    : [];

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredProducts.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className='pt-5 py-5 px-5'>
      <div className='mb-3'>
        {/* Category buttons */}
        {/* ... (same as before) */}
      </div>
      <div className='row '>
        {currentCards.map((product) => (
          <div className='col' key={product.id}>
            <Card style={{ width: '18rem', height: '100%' }}>
              <div className='d-flex justify-content-center align-items-center' style={{ height: '200px' }}>
                <Card.Img style={{ maxWidth: '100%', maxHeight: '100%' }} variant='top' src={product.image} />
              </div>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className='d-flex justify-content-center text-center'>
                  {product.description.slice(0, 50)}
                </Card.Text>
                <Card.Text>{product.price} $</Card.Text>
                <OverlayTrigger
                  placement='bottom'
                  overlay={<Tooltip>{`Added: ${getItemQuantity(product.id)} items`}</Tooltip>}
                >
                  <Button
                    variant='primary'
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to cart
                    <span className='badge bg-success ms-2'>
                      {getItemQuantity(product.id)}
                    </span>
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <ul className='pagination'>
          {Array(Math.ceil(filteredProducts.length / cardsPerPage))
            .fill()
            .map((_, index) => (
              <li key={index} className='page-item'>
                <button onClick={() => paginate(index + 1)} className='page-link'>
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
}

export default Product;