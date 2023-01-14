
import "./Cards.css";
import { images } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => (
  AOS.init({
    // initialise with other settings
    duration: 500,
  }),
  (
    <div className="app__gallery flex__center app__header  section__padding2 ">


      <div className="productList">
        <div>
          <h1
            className="headtext__cormorant-2 content-padding-2"
            data-aos="fade-up"
          >
            <font color="#006DDD">
              Explore with<font color="#24FEEE"> Technophile</font> Lad
              !
            </font>
          </h1>
        </div>
        <div className="productListFlex">
          <div className="productCard" data-aos="fade-up">
            <img
              src={images.CardImg}
              alt="product-img"
              className="productImage"
            ></img>
            <div className="productCard__content">
             
              <div className="displayStack__1">
                <h3 className="productName">My Portfolio</h3>
            
              </div>
              <div className="displayStack__2">
                <div className="productPrice">
                  Get Ready you are going to redirect to Behance{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="productCard" data-aos="fade-up">
            <img
              src={images.CardImg1}
              alt="product-img"
              className="productImage"
            ></img>



            <div className="productCard__content">
             
              <div className="displayStack__1">
                <h3 className="productName">My Podcast</h3>

               
              </div>
              <div className="displayStack__2">
                <div className="productPrice">
                  List to Technophile Lad in Spotify and other platforms.
                </div>
              </div>
            </div>
          </div>
          <div className="productCard" data-aos="fade-up">
            <img
              src={images.CardImg2}
              alt="product-img"
              className="productImage"
            ></img>



            <div className="productCard__content">
              
              <div className="displayStack__1">
                <h3 className="productName">View Courses</h3>
                
              </div>
              <div className="displayStack__2">
                <div className="productPrice">
                  Make your learning curve easier with our project based courses.
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
);

export default Cards;
