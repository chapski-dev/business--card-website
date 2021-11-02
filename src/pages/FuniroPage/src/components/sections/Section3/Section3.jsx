import React from 'react';
import { useEffect, useState } from "react";
import "./Section3.scss";
import { Section3Item } from './Section3Item';
import { selectCart, selectWishList } from '../../../../../../store/Customer';
import { useSelector } from 'react-redux';




const Section3 = () => {
  const [item, setItems] = useState([]);
  const customerWishList = useSelector(selectWishList);
  const customerCart = useSelector(selectCart);

  useEffect(() => {
    setItems([
      { id: 1, title: 'Syltherine', description: 'Stylish cafe chair', newPrice: 2500000, oldPrice: 3500000, sale: 30, isNew: false, img: '/Syltherine.png' },
      { id: 2, title: 'Leviosa', description: 'Stylish cafe chair', newPrice: 2500000, oldPrice: null, sale: null, isNew: false, img: '/Leviosa.png'  },
      { id: 3, title: 'Lolito', description: 'Luxury big sofa', newPrice: 7000000, oldPrice: 14000000, sale: 50, isNew: false, img: '/Lolito.png'  },
      { id: 4, title: 'Respira', description: 'Minimalist fan', newPrice: 500000, oldPrice: null, sale: null, isNew: true, img: '/Respira.png'  },
      { id: 5, title: 'Grifo', description: 'Night lamp', newPrice: 1500000, oldPrice: null, sale: null, isNew: false, img: '/Grifo.png'  },
      { id: 6, title: 'Muggo', description: 'Small mug', newPrice: 150000, oldPrice: null, sale: null, isNew: true, img: '/Muggo.png'  },
      { id: 7, title: 'Pingky', description: 'Cute bed set', newPrice: 7000000, oldPrice: 14000000, sale: 50, isNew: false, img: '/Pingky.png'  },
      { id: 8, title: 'Potty', description: 'Minimalist flower pot', newPrice: 500000, oldPrice: null, sale: null, isNew: true, img: '/Potty.png'  },
    ]);
  }, []);
  return (
    <section className="section3">
      <div className="container">
        <h2 className="section3-title">Our Products</h2>
        <div className="section3-item-row">
          {item.map((item) => (
            <Section3Item
              key={item.id}
              id={item.id}
              item={item}
              title={item.title}
              description={item.description}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              sale={item.sale}
              isNew={item.isNew}
              img={item.img}
              isInWishList={customerWishList.some(el => el === item.id)}
              // inCart={customerCart.some(el => el === item.id)}
            />
          ))}
        </div>
        <div className="section3-bottom-actions">
          <button className="show-hidden empty-btn">Show More</button>
        </div>
      </div>
    </section>
  )
}

export default Section3;