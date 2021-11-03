
import { useSelector } from 'react-redux';
import { selectCart } from '../../../../../../../store/Customer';
import './CartMenu.scss'

const CartMenu = () => {
  const productsInCart = useSelector(selectCart)

  if (productsInCart.length !== 0) {
    return (
      <div className="user-actions__cart-wrapper">
      <ul className="user-actions__cart-list">
        {productsInCart.map((product: any) => {
          return (
            <li className="user-actions__cart-item">
             Name:{product.title} 
            </li>
          )
        })}
      </ul>
    </div>
    )
  } else {
    return (
      <div className="user-actions__cart-wrapper">
        <p>No Products in Cart yeat.</p>
      </div>
    )
  }
}

export default CartMenu;