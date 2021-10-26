import { Avatar } from "antd";
import "./UserActions.scss"
import { UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const UserActions = () => {
  return (
    <div className="header-user-actions">
      <a href='#' className="user-actions-item user-actions__like">
        <HeartOutlined />
      </a>
      <a href='#' className="user-actions-item user-actions__baskt">
        <ShoppingCartOutlined />
      </a>
      <a href="#" className="user-actions-item user-actions__img">
        <UserOutlined />
      </a>
    </div>
  )
}

export default UserActions;
