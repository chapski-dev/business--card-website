import { Avatar } from "antd";
import { FireOutlined } from '@ant-design/icons';

import "./Section2Item.scss"





export const Section2Item = (props) => {
  return (
    <div className="section2-item">
          <div className="section2-item__img">
            <FireOutlined  style={{ fontSize: '36px', color: '#08c', margin:'0 24px 0 0' }}/>
          </div>
          <div className="section2-item-info">
            <div className="section2-item__title">{props.title}</div>
            <div className="section2-item__discr">{props.text}</div>
          </div>
        </div>
  )
}

export default Section2Item;
