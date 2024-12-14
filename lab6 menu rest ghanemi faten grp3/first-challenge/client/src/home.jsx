import React, { useEffect, useState } from 'react';
import Header from './header';
import { Link } from 'react-router-dom'; 


const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            title: 'heart cake, a new product',
            price: '1500 da',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            imgSrc: 'am2.png',
         
        },
        {
            title: ' roll cake, a new product',
            price: '2100 da',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            imgSrc: 'am4.png',
         
        },
        {
            title: 'Strawberry cheesecake, a new product',
            price: '1250 da ',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
            imgSrc: 'am6.png',
       
        },
      
    ];

    useEffect(() => {
        const autoPlay = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(autoPlay);
    }, [activeIndex]);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div>
          <Header></Header>
      
          <main>
          
            <section className="carousel next">
              <div className="list">
                {items.map((item, index) => (
                  <article
                    key={index}
                    className={`item ${index === activeIndex ? 'active' : ''}`}
                  >
                    <div
                      className="main-content"
                      style={{
                        backgroundColor: index === activeIndex ? '#f5bfaf' : '#9c4d2f',
                      }}
                    >
                      <div className="content">
                        <h2>{item.title}</h2>
                        <p className="price">{item.price}</p>
                        <p className="description">{item.description}</p>
                       
                      </div>
                    </div>
                    <figure className="image">
                      <img src={item.imgSrc} alt={item.altText} />
                      <figcaption>{item.title}</figcaption>
                    </figure>
                  </article>
                ))}
              </div>
              <div className="arrows">
                <button id="prev" onClick={handlePrev}>&lt;</button>
                <button id="next" onClick={handleNext}>&gt;</button>
              </div>
            </section>
      
            
            <section className="register">
              <div className="container"><p>menu</p></div>
              <div className="container"><p>menu</p></div>
              <div className="container"><p>menu</p></div>
            </section>
      
            <div class="custom-shape-divider-top-1729032497">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
  </svg>
</div>
<div className="about"> 
  <div className="content-b">
    <h1>ABOUT US</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta ratione cupiditate tempore atque, similique porro alias minus, repudiandae fuga sequi quis omnis! Consequuntur cumque aperiam recusandae sapiente distinctio voluptate
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorum omnis repellat quae sit nam et animi, aspernatur mollitia dolor debitis. Voluptatum ex, veritatis est cum dolorum blanditiis eaque labore!.</p>
  </div>
  
  <img src="am4.png" alt="About us image" />
</div>
      
            <section className="feedback">
              <div className="box">feedback</div>
              <div className="box">feedback</div>
              <div className="box">feedback</div>
            </section>
      
            <footer></footer>
          </main>
        </div>
      );
    }      
    export default Home;