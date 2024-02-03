import { Link } from "react-router-dom";

function Ul({ routes }) {
  return (
    <>
      <ul className="inline  text-white">
        {routes?.map((r, i) => {
          return (
            <li
              key={i}
              className="inline-block ms-5 hover:text-yellow-500 font-bold cursor-pointer"
            >
              <Link to={"/" + r.route}>{r.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Ul;
