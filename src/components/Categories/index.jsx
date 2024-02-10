import img from "./../../images/categories/services2.png";
import img2 from "./../../images/categories/222.png";
import img3 from "./../../images/categories/3.png";
import img4 from "./../../images/categories/4.png";
import Child from "./Child";

function Categories() {
  const catArr = [
    { img: img, title: "24 hour service" },
    { img: img2, title: "Different live stock" },
    { img: img3, title: "Green Tecnology" },
    { img: img4, title: "Faster delivery" },
  ];
  return (
    <>
      <div className=" catedoeies__div flex sm:flex-row xs:flex-col mx-auto  xs:justify-center sm:justify-around xs:items-center md:items-stretch">
        {catArr.map((c, i) => {
          return <Child img={c.img} title={c.title} />;
        })}

        <div className="md:inline hidden"></div>
      </div>
    </>
  );
}

export default Categories;
