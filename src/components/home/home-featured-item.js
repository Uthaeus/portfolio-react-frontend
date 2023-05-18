import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomeFeaturedItem() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  let currentSlide = 0;

  useEffect(() => {
    fetch("http://localhost:4000/home")
      .then((response) => response.json())
      .then((data) => {
        console.log("featured items", data);
        setItems([...data.blogs, ...data.portfolios]);
      })
      .catch((error) => console.log("featured items error", error));
  }, []);

    useEffect(() => {
        let slideInterval;

        if (items.length > 0) {
            slideInterval = setInterval(() => {
                slideInc();
                addAnimation();
            }, 5000);
        }

        return () => {
            clearInterval(slideInterval);
        };
    }, []);

    function addAnimation() {
        let item = document.querySelector(".home-featured-item-content");
        item.classList.add("animate-item");
    }

  function slideInc() {
    console.log("slideInc", currentSlide, items.length);
    if (currentSlide + 1 >= items.length) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    setItem(items[currentSlide]);
  }

  function slideDec() {
    if (currentSlide - 1 < 0) {
      currentSlide = items.length - 1;
    } else {
      currentSlide--;
    }
    setItem(items[currentSlide]);
  }

  return (
    <div className="home-featured-item">
      <div className="home-featured-actions">
        <button className="btn btn-inc" onClick={slideInc}>
          +
        </button>
        <p>Some recent stuff</p>
        <button className="btn btn-dec" onClick={slideDec}>
          -
        </button>
      </div>

      <div className="home-featured-item-content">
        <Link to={`/${item.user ? 'blogs' : 'portfolios'}/${item.id}`} className="home-featured-item-title">
            {item.title}
        </Link>
      </div>
    </div>
  );
}

export default HomeFeaturedItem;
