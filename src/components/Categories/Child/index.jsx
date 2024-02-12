function Child({ img, title }) {
  return (
    <>
      <div
        style={{ borderColor: "#338F14", borderWidth: "3px" }}
        className="bg-white text-center w-40 mt-5 font-bold text-base mb-5 rounded-3xl p-2"
      >
        <img src={img} width="65%" alt="" />
        <h2>{title}</h2>
      </div>
    </>
  );
}

export default Child;
