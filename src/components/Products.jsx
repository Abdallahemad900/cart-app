import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slices/Products-slices';
import { addToCart } from '../slices/Cart-slices';


function Product() {
const products = useSelector((state)=> state.products) ;
console.log(products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    } ,[]);

    return (
       <Container className='py-5 px-5'>
        <div className='row '>
            {products.map((product)=>(

                 <div className='col ' key={product.id}>
            <Card style={{ width: '18rem' }}>
        <Card.Img  style={{height:"200px",width:"200px"}} variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text  className='d-flex justify-content-center text-center'>
          {product.description.slice(0,50)}
          </Card.Text>
          <Card.Text>
          {product.price} $
          </Card.Text>
          <Button variant="primary" onClick={()=> dispatch(addToCart(product))} >Add to cart</Button>
        </Card.Body>
      </Card>

            </div>
            ))}
           
        </div>
       </Container>
    )

    
}
export default Product