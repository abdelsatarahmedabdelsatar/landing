import Ul from "./../Reusable/Ul/index";
import img from "../../images/tree_icon.png";
import img2 from "../../images/112.png";
<<<<<<< HEAD
import { useContext } from "react";
import LangContext from "../../context";
=======
>>>>>>> b7eba8af2b5dd4e7ac7b9022adcde0526f3ec4ee
import { useTranslation } from "react-i18next";

function Home() {
  // const arr_route = ["Home", "Services", "About us", "Contact us"]
<<<<<<< HEAD
  const { lang } = useContext(LangContext);

  const { t, i18n } = useTranslation();

=======
  const {t} = useTranslation();
>>>>>>> b7eba8af2b5dd4e7ac7b9022adcde0526f3ec4ee
  const arr_route = [
    { route: "home", title: "Home" },
    { route: "services", title: "Services" },
    { route: "about", title: "About us" },
    { route: "contact", title: "Contact Us" },
  ];
  return (
    <>
<<<<<<< HEAD
      <div dir={lang == "en" ? "ltr" : "rtl"} className="back_img" id="home">
=======
      <div className="back_img" id="home">
>>>>>>> b7eba8af2b5dd4e7ac7b9022adcde0526f3ec4ee
        <div className="home_div xs:text-center sm:text-left relative pt-5 z-10">
          <span className="hidden xs:inline xs:h-12 sm:ms-5 sm:me-5 pt-2 cursor-pointer ">
            <img
              src={img}
              className="sm:h-20 sm:w-20 xs:h-10 xs:w-10"
              alt="tree icon"
            />
          </span>
          <Ul routes={arr_route} />

          <div className="flex m-8 text-white ">
            <div className="sm:w-[70%] mt-8">
<<<<<<< HEAD
              <h1 className="text-4xl font-bold ">{t("The Green Yard")}</h1>
=======
              <h1 className="text-4xl font-bold ">{t('title')}</h1>
>>>>>>> b7eba8af2b5dd4e7ac7b9022adcde0526f3ec4ee
              <p className="mt-5">
                {t(
                  "Our company provides comprehensive livestock logistics throughout the United Arab Emirates. We deliver safe and efficient animal transportation"
                )}
              </p>

              <button className="border-2 border-white  p-1 ps-4 pe-4 mt-4 hover:text-gray-300 hover:border-gray-300">
                {t("Read More")}
              </button>
            </div>
            <div className=" hidden md:block">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
