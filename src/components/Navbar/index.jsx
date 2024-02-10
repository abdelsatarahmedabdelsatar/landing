import logo from "./../../images/tree_icon.png";
import { useContext } from 'react';
import langContext from "../../context";

function Navbar() {


  // const [lang,setLang] = useState('en');
  const { lang, updateLang } = useContext(langContext);
  const changeLang = (lng) => {
    localStorage.setItem('lang', lng=='en'?'ar':'en')
    lng=='en'?updateLang('ar'):updateLang('en');
    console.log(lang)
  }

  const toggleLang = () => {
    document.getElementById("langs").classList.toggle("hidden");
  };
  return (
    <nav className="bg-green-800 p-3 fixed top-0 z-50 w-full shadow-xl">
      <div className=" mx-auto flex justify-between items-center">
        <a
          href="#"
          style={{ width: "2.5rem", height: "2.5rem" }}
          className="border border-gray-300  rounded-full"
        >
          <img src={logo} alt="" />
        </a>
        <div className="relative">
          <div>
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 text-white"
            >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor" height="20" width="20"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" id="mainIconPathAttribute" fill="#ffffff"></path></svg>
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
          </div>
          <ul
            id="langs"
            className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg hidden"
          >
            <li>
              <span
                onClick={()=>changeLang('en')}
                className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                العربية
              </span>
            </li>
            <li>
              <span
                onClick={()=>changeLang('ar')}
                className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                English
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
