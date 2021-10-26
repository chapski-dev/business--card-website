import React from 'react';
import { useEffect, useState } from "react";
import { Section2Item } from './Section2Item';
import "./Section2.scss";




const Section2 = () => {

const [item, setItems] = useState([]);



  useEffect(() => {
    setItems([
      { title: 'Hign Quality', text: 'crafted from top materials', iconName: 'cup' },
      { title: 'Warrany Protection', text: 'Over 2 years', iconName: 'protection' },
      { title: 'Free Shipping', text: 'Order over 150 $', iconName: 'shipping' },
      { title: '24 / 7 Support', text: 'Dedicated support', iconName: 'support' },
    ]);
  }, []);
  return (
    <section className="section2">
      <div className="container">
        <div className="section2-item-row">
          {item.map((item) => (
            <Section2Item 
              item={item}
              title={item.title}
              text={item.text}
              iconName={item.iconName}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section2;

// {props.item.title}
// {props.item.text}
// {props.item.iconName}