import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/banner/pexels-suzy-hazelwood-1098592.jpg";
import img2 from "../../../assets/banner/pexels-vo-thuy-tien-2536967.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img1} />
      </div>
      <div>
      <img src={img2} />
      </div>

    </Carousel>
  );
};

export default Banner;
