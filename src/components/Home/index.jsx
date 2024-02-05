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
        <div className="home_div  relative pt-5 z-10">
          <span className="inline ms-5 me-5 pt-2 cursor-pointer ">
            <img src={img} width="70" height="70" alt="tree icon" />
          </span>
          <Ul routes={arr_route} />

          <div className="flex m-16 text-white ">
            <div className="w-[70%]">
              <h1 className="text-4xl font-bold ">The Green Yard</h1>
              <p className="mt-5">
                Our company provides comprehensive livestock logistics
                throughout the United Arab Emirates. We deliver safe and
                efficient animal transportation
              </p>

              <button className="border-2 border-white  p-1 ps-4 pe-4 mt-4 hover:text-gray-300 hover:border-gray-300">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-white absolute right-48  top-32 hidden sm:block back_div h-80 w-80 z-0 rounded-2xl rotate-12"></div>
      </div>
    </>
  );
}

export default Home;
