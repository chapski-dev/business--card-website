import './Section1.scss'
import mainPage from '../HomePage/img/section1/bg-notebook.jpeg'
// import './Section1.js'


const Section1 = () => {
// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["hard", "fun", "a journey", "LIFE"];
// const typingDelay = 200;
// const erasingDelay = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//   	setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
// 	if (charIndex > 0) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if(textArrayIndex>=textArray.length) textArrayIndex=0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//   if(textArray.length) setTimeout(type, newTextDelay + 250);
// });
  return (
    <section className='section1'>
      <img src={mainPage} alt="" className='section1__bg-image'/>
      <div className="container">
        <div className="section1-title-wrapper">
          <h1 className="section1-title">INSPIRED DESIGN. UNPARALLELED EXPERIENCE. EXEMPLARY SERVICE.</h1>
          <p>Coding is <span className="typed-text"></span><span className="cursor">&nbsp;</span></p>
        </div>
      </div>
    </section>
  )
}

export default Section1;