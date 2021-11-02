import { Avatar } from "antd";
import "./UserActions.scss"
import { UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { selectCart, selectWishList } from "../../../../../../store/Customer";

const UserActions = () => {
  const customerWishList = useSelector(selectWishList);
  const customerCart = useSelector(selectCart);

  return (
    <div className="header-user-actions">
      <a href='#' className="user-actions-item user-actions__like">
        <span className="user-actions__like-count">{customerWishList.length}</span>
        <HeartOutlined />
      </a>
      <a href='#' className="user-actions-item user-actions__cart">
      <span className="user-actions__products-count">{customerCart.length}</span>
        <ShoppingCartOutlined />
      </a>
      <a href="#" className="user-actions-item user-actions__img">
        <UserOutlined />
      </a>
    </div>
  )
}

export default UserActions;
