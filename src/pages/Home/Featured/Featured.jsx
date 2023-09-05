import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/featured/pexels-nastyasensei-821398.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>

        <img src={featured} alt="" />
        </div>
      
      <div className="md:ml-10">
        <p>Aug 20, 2024</p>
        <p className="uppercase">Where can i get some?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum
          ab quis ut! Qui aut eaque rerum illum dolor. Debitis inventore tempora
          ipsam animi accusamus, quas aliquam unde labore ipsum, nisi id maxime?
          Quia recusandae, aliquam autem quisquam quas accusamus repudiandae
          nostrum ex esse, nihil vitae neque dolorum libero blanditiis!
        </p>
        <button className="btn  btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>

      </div>
      </div>
    </div>
  );
};

export default Featured;
