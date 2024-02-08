import { Link } from "react-router-dom";

function Ul({ routes }) {
  return (
    <>
      <ul className="inline  text-white">
        {routes?.map((r, i) => {
          return (
            <li
              key={i}
              className="inline-block xs:ms-2 sm:ms-5 hover:text-yellow-500 font-bold cursor-pointer"
            >
              <a href={"#" + r.route}>{r.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Ul;
