import React, { useRef } from 'react';
import Hero2 from '../components/Hero2';
import img from '../assets/img/blog1.jpg';
import '../css/Blog.css';

const BlogCategories = () => {
  const destinationRef = useRef(null);
  const generalRef = useRef(null);
  const infinityRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100, // Adjusting scroll to account for header
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Hero2 pageName="OUR BLOGS" image={img} />

      <div className="containers">
        <aside className="sidebar">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li onClick={() => scrollToSection(destinationRef)}>Destination Blogs</li>
              <li onClick={() => scrollToSection(generalRef)}>General Blogs</li>
              <li onClick={() => scrollToSection(infinityRef)}>WingPoints Blogs</li>
            </ul>
          </div>
        </aside>

        <div className="blog-content">
          {/* Destination Blogs Section */}
          <section ref={destinationRef}>
            <h2>Destination Blogs</h2>
            <div className="blog-row">
              {/* Blog Posts */}
              <div className="blog-post card">
                <div className="card-image">
                  <img src="src/assets/img/blog2.jpeg" alt="Destination Post 1" />
                </div>
                <div className="card-content">
                  <h4>Discover Stunning Destinations</h4>
                  <div className="underline"></div>
                  <p>Discover the world's most stunning destinations, where adventure meets tranquility. Whether you're seeking the thrill of new experiences or the calm of secluded getaways.</p>
                </div>
              </div>
              <div className="blog-post card">
                <div className="card-image">
                  <img src="src/assets/img/blog3.jpeg" alt="Destination Post 2" />
                </div>
                <div className="card-content">
                  <h4>Unveil Hidden Gems</h4>
                  <div className="underline"></div>
                  <p>Discover lesser-known travel destinations that offer unique experiences and breathtaking beauty. From secluded beaches to charming mountain and villages.</p>
                </div>
              </div>
            </div>
          </section>

          {/* General Blogs Section */}
          <section ref={generalRef}>
            <h2>General Blogs</h2>
            <div className="blog-row">
              <div className="blog-post card">
                <div className="card-image">
                  <img src="src/assets/img/blog4.jpeg" alt="General Post 1" />
                </div>
                <div className="card-content">
                  <h4>General Travel Tips</h4>
                  <div className="underline"></div>
                  <p>Enhance your travel experience with these practical tips. From packing efficiently to navigating unfamiliar cities, these essentials will help travel smarter and comfortably.</p>
                </div>
              </div>
              <div className="blog-post card">
                <div className="card-image">
                  <img src="src/assets/img/blog5.jpeg" alt="General Post 2" />
                </div>
                <div className="card-content">
                  <h4>Explore New Horizons</h4>
                  <div className="underline"></div>
                  <p>Expand your travel experiences by venturing beyond the familiar. Discover new cuisines, and landscapes that inspire growth and broaden your perspective.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Infinity Wings Blogs Section */}
          <section ref={infinityRef}>
            <h2>WingsPoints Blogs</h2>
            <div className="blog-row">
              <div className="blog-post card">
                <div className="card-image">
                  <img src="src/assets/img/blog6.png" alt="Infinity Wings Post 1" />
                </div>
                <div className="card-content">
                  <h4>Earn points</h4>
                  <div className="underline"></div>
                  <p>Every Flight gets you up to 10% Cashback as AirRewards points.</p>
                </div>
              </div>
              <div className="blog-post card">
                <div className="card-image">
                  <img src="src/assets/img/blog8.jpg" alt="Infinity Wings Post 2" />
                </div>
                <div className="card-content">
                  <h4>Spend points</h4>
                  <div className="underline"></div>
                  <p>Use your points online easily for flights, meals and baggage.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogCategories;
