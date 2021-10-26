import React from 'react';
import { useEffect, useState } from "react";
import "./Section3.scss";
import { Section3Item } from './Section3Item';




const Section3 = () => {
  const [item, setItems] = useState([])

  useEffect(() => {
    setItems([
      { title: 'Syltherine', description: 'Stylish cafe chair', newPrice: 2500000, oldPrice: 3500000, sale: 30, isNew: false, img: '/Syltherine.png' },
      { title: 'Leviosa', description: 'Stylish cafe chair', newPrice: 2500000, oldPrice: null, sale: null, isNew: false, img: '/Leviosa.png'  },
      { title: 'Lolito', description: 'Luxury big sofa', newPrice: 7000000, oldPrice: 14000000, sale: 50, isNew: false, img: '/Lolito.png'  },
      { title: 'Respira', description: 'Minimalist fan', newPrice: 500000, oldPrice: null, sale: null, isNew: true, img: '/Respira.png'  },
      { title: 'Grifo', description: 'Night lamp', newPrice: 1500000, oldPrice: null, sale: null, isNew: false, img: '/Grifo.png'  },
      { title: 'Muggo', description: 'Small mug', newPrice: 150000, oldPrice: null, sale: null, isNew: true, img: '/Muggo.png'  },
      { title: 'Pingky', description: 'Cute bed set', newPrice: 7000000, oldPrice: 14000000, sale: 50, isNew: false, img: '/Pingky.png'  },
      { title: 'Potty', description: 'Minimalist flower pot', newPrice: 500000, oldPrice: null, sale: null, isNew: true, img: '/Potty.png'  },
    ]);
  }, []);
  return (
    <section className="section3">
      <div className="container">
        <h2 className="section3-title">Our Products</h2>
        <div className="section3-item-row">
          {item.map((item) => (
            <Section3Item
              item={item}
              title={item.title}
              description={item.description}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              sale={item.sale}
              isNew={item.isNew}
              img={item.img}
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