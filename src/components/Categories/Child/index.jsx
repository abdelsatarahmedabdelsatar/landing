import { useTranslation } from "react-i18next";

function Child({ img, title }) {

  const { t } = useTranslation();

  return (
    <>
      <div
        style={{ borderColor: "#338F14", borderWidth: "3px" }}
        className="bg-white text-center w-40 mt-5 font-bold text-base mb-5 rounded-3xl p-2"
      >
        <img src={img} width="65%" alt="" />
        <h2>{t(title)}</h2>
      </div>
    </>
  );
}

export default Child;
