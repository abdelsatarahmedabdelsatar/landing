import { useTranslation } from "react-i18next";

function Ul({ routes }) {

  const { t } = useTranslation();


  return (
    <>
      <ul className="inline  text-white">
        {routes?.map((r, i) => {
          return (
            <li
              key={i}
              className="inline-block xs:ms-2 sm:ms-5 hover:text-yellow-500 font-bold cursor-pointer"
            >
              <a href={"#" + r.route}>{t(r.title)}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Ul;
