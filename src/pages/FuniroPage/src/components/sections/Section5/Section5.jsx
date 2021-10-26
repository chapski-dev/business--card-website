import { useEffect, useState } from "react"
import Section5Item from "./Section5Item";
import './Section5.scss'

const Section5 = () => {
    const [item, setItems] = useState([]);
    useEffect(() => {
      setItems([
        { title: 'How to create a living room to love', date: '20 jan 2020', img: '/HowToCreate.png' },
        { title: 'Solution for clean look working space', date: '10 jan 2020', img: '/Solution.png' },
        { title: 'Make your cooking activity more fun with good setup', date: '20 jan 2020', img: '/MakeYourCooking.png' },
      ]);
    }, []);

  return (
    <section className="section5">
      <div className="container">
        <div className="section5-content-wrapper">
          <h2 className="section5-title">Tips & Tricks</h2>
          <div className="section5-item-row">
          {item.map((item) => (
            <Section5Item
            item={item}
            title={item.title}
            date={item.date}
            img={item.img}
          />
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section5;