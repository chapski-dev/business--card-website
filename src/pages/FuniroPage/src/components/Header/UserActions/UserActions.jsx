import "./UserActions.scss";
import { UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { selectCart, selectWishList } from "../../../../../../store/Customer";
import { useState } from 'react';
import { Menu, Dropdown } from 'antd';

const UserActions = () => {
  const customerWishList = useSelector(selectWishList);
  const customerCart = useSelector(selectCart);
  const [cart, setCart] = useState([]);
  const [liked, setLiked] = useState([]);

  const productsInCart = useSelector(selectCart)
  const productsInWishList = useSelector(selectWishList);
  const likedMenu = () => {
    if (productsInWishList.length > 0) {
      return(
        <Menu className='user-actions__like-dropdown'>
          {productsInWishList.map((product, index) => {
            return(
              <Menu.Item key={index}>
                <a href="#">{`${product.title} ${product.newPrice}$`}</a> <button>Delete</button>
              </Menu.Item>  
            )
          })}
          <Menu.Divider />
          <Menu.Item key="3">{`Summary price: ${productsInWishList.reduce((prev, curr) => prev + curr.newPrice, 0)}$`}</Menu.Item>
        </Menu>
      )
    } else {
      return (
        <Menu className='user-actions__like-dropdown'>
          <Menu.Item key="0">
            <p>No products yet...</p>
          </Menu.Item>
        </Menu>
      )
    }
  }
  const cartMenu = () => {
    if (productsInCart.length > 0) {
      return(
        <Menu className='user-actions__like-dropdown'>
          {productsInCart.map((product) => {
            return(
              <Menu.Item key={product.id}>
                <a href="#">{`${product.id}'st menu item`}</a> <button>Delete</button>
              </Menu.Item>  
            )
          })}
          <Menu.Divider />
          <Menu.Item key="3">{`Summary price: ${productsInCart.reduce((prev, curr) => prev + curr.newPrice, 0)}$`}</Menu.Item>
        </Menu>
      )
    } else {
      return (
        <Menu className='user-actions__like-dropdown'>
          <Menu.Item key="0">
            <p>No products yet...</p>
          </Menu.Item>
        </Menu>
      )
    }
  }
  return (
    <div className="header-user-actions">
      <div className="user-actions-item-wrapper">
        <Dropdown overlay={likedMenu} trigger={['click']}>
          <a href='#' className="user-actions-item user-actions__like">
            <span className="user-actions__like-count">{customerWishList.length}</span>
            <HeartOutlined />
          </a>
        </Dropdown>
      </div>
      <Dropdown overlay={cartMenu} trigger={['click']}>
        <div className="user-actions-item-wrapper">
          <a href='#' className="user-actions-item user-actions__cart" onClick={e => e.preventDefault()}>
            <span className="user-actions__products-count">{customerCart.length}</span>
            <ShoppingCartOutlined />
          </a>
        </div>
      </Dropdown>
      <a href="#" className="user-actions-item user-actions__img">
        <UserOutlined />
      </a>
    </div>
  )
}

export default UserActions;
