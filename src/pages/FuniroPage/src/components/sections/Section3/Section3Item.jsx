import "./Section3Item.scss";
import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, addToCart } from './../../../../../../store/Customer/actions';
import { selectCart, selectWishList } from "../../../../../../store/Customer";


// Rp. {props.oldPrice}
function CreateOldPrice (oldPrice) {
  if (!oldPrice) return false;
  return (
    <div className="section3-item__price_new">
        Rp {oldPrice}
    </div>
  )
}

function CreateProductLabel (labelType) {
  if (labelType === null || labelType === false) return false;
  if (labelType === true) {
    return (
      <div className="section3-item__lable new">
        New
      </div>
    )
  }
  return (
    <div className="section3-item__lable sale">
        -{labelType}%
    </div>
  )
}

export const Section3Item = (props) => {
  const productsInCart = useSelector(selectCart);
  const productsInWishList = useSelector(selectWishList);
  
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({id: props.id,title: props.title,newPrice: props.newPrice}))
    console.log(productsInCart);

  }

  const handleAddToWishList = (event) => {
    event.preventDefault();
    dispatch(addToWishList({id: props.id,title: props.title,newPrice: props.newPrice})) 
    console.log(productsInWishList);
  }

  return (
    <div className="section3-item">
      {CreateProductLabel(props.sale || props.isNew)}
      <div className="section3-item-hiden">
          <button className="section3-item-hiden__btn empty-btn" onClick={handleAddToCart}>{`${props.isCart ? "Remove from cart" : "Add to cart"}`}</button>
        <div className="section3-item-hiden__link-wrapper">
          <a href="#" className="section3-item-hiden__link share">
            <ShareAltOutlined />
            <span className="text">Share</span>
          </a>
          <a href="#" onClick={handleAddToWishList} className="section3-item-hiden__link like">
            <HeartOutlined />
            <span className="text">{props.isInWishList ? "Dislike" : "Like"}</span>
          </a>
        </div>
      </div>
      <div className="section3-item__img-wrapper">
        <img src={`FuniroPage/img/section3${props.img}`} alt="?????????????????????? ????????????" />
      </div>
      <div className="section3-item__info">
        <div className="section3-item__title">{props.title}</div>
        <div className="section3-item__discr">{props.description}</div>
        <div className="section3-item__price-row">
          <div className="section3-item__price_old">Rp. {props.newPrice}</div>
          {CreateOldPrice(props.oldPrice)}
        </div>
      </div>
  </div>
  )
}