import img from "./../../images/categories/services.png";
import img2 from "./../../images/categories/2.png";
import img3 from "./../../images/categories/3.png";
import img4 from "./../../images/categories/4.png";
import Child from "./Child";

function Categories() {
  const catArr = [
    { img: img, title: "24 hour service" },
    { img: img2, title: "Different live stock" },
    { img: img3, title: "Modern Tecnology" },
    { img: img4, title: "Faster delivery" },
  ];
  return (
    <>
      <div
        style={{ backgroundColor: "#6DAC6D" }}
        className="grid grid-cols-2 md:grid-cols-6 gap-0 place-content-center"
      >
        <div className="md:inline hidden"></div>

        {catArr.map((c, i) => {
          return <Child img={c.img} title={c.title} />;
        })}

        <div className="md:inline hidden"></div>
      </div>
    </>
  );
}

export default Categories;
