import {Container,Table,Button,Image} from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from "../slices/Cart-slices";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate the total price
  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0).toFixed(2);

  return (
    <Container>
      <h1 className="cart">Welcome to your cart</h1>
      <Button variant="danger" onClick={handleClearCart}>
        Clear All
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Image src={product.image} alt={product.title} style={{ height: '50px', width: '50px' }} />
              </td>
              <td>{product.price} $</td>
              <td>{product.quantity}</td>
              <td>{(product.price * product.quantity).toFixed(2)} $</td>
              <td>
                <Button variant="danger" onClick={() => handleRemoveFromCart(product.id)}>
                  Remove
                </Button>
                <Button variant="success" onClick={() => handleIncrementQuantity(product.id)}>
                  +
                </Button>
                <Button variant="warning" onClick={() => handleDecrementQuantity(product.id)}>
                  -
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <h4>Total Price: {totalPrice} $</h4>
      </div>
    </Container>
  );
}

export default Cart;