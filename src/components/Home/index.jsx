import Ul from "./../Reusable/Ul/index";
import img from "../../images/tree_icon.png";
import img2 from "../../images/land.png";

function Home() {
  // const arr_route = ["Home", "Services", "About us", "Contact us"]
  const arr_route = [
    { route: "home", title: "Home" },
    { route: "services", title: "Services" },
    { route: "about", title: "About us" },
    { route: "contact", title: "Contact Us" },
  ];
  return (
    <>
      <div className="back_img">
        <div className="home_div pt-5">
          <span className="inline ms-5 me-5 pt-2 cursor-pointer ">
            <img src={img} width="50" height="50" alt="tree icon" />
          </span>
          <Ul routes={arr_route} />

          <div className="grid md:grid-cols-2 grid-cols-1 m-16 text-white ">
            <div className="sm:grid-cols-2 grid-cols-12">
              <h1 className="text-4xl font-bold">The Green Yard</h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                fuga impedit, corrupti enim harum repellat id laudantium
                perspiciatis hic alias dolorum laboriosam.
              </p>

              <button className="border-2 border-white  p-1 ps-4 pe-4 mt-4 hover:text-gray-300 hover:border-gray-300">
                Read More
              </button>
            </div>
            <div className="hidden md:inline">
              <img src={img2} alt="lang image" className="pl-5" width="500px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
