import {Container,Table,Button,Image} from "react-bootstrap";
import { useSelector } from "react-redux";

function Carts() {
    const cart = useSelector(state => state.cart);
    console.log(cart);
    return (

        <Container>
        <h1 className="cart"> Welcome to cart</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Img</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product)=>(
             <tr key={product.id}>
             <td>{product.id}</td>
             <td>{product.title}</td>
             <td><Image src={product.image} alt={product.title} style={{height:"50px",width:"50px"}}/></td>
             <td>{product.price} $</td>
             <td> <Button variant="danger">Delete</Button></td>
           </tr>
        ))}
       
      </tbody>
    </Table>
        </Container>
     
    )

}
export default Carts;