// import CategoryCard from "./CategoryCard";

// const data = [
//     {
//         id: 0,
//         Price: 43,
//         name: "Pure white Polo",
//         img: "/Category/1.png",
//     },
//     {
//         id: 1,
//         Price: 43,
//         name: "Pure white Polo",
//         img: "/Category/1.png",
//     },
//     {
//         id: 2,
//         Price: 43,
//         name: "Pure white Polo",
//         img: "/Category/1.png",
//     },
//     {
//         id: 3,
//         Price: 43,
//         name: "Pure white Polo",
//         img: "/Category/1.png",
//     },
//     {
//         id: 4,
//         Price: 43,
//         name: "Pure white Polo",
//         img: "/Category/1.png",
//     },
//     {
//         id: 5,
//         Price: 43,
//         name: "Pure white Polo",
//         img: "/Category/1.png",
//     },
//     {
//         id: 6,
//         Price: 43,
//         name: "Pure white Polo",
//         img: "/Category/1.png",
//     },
//     {
//         id: 7,
//         Price: 43,
//         name: "Pure white Polo",
//         img: "/Category/1.png",
//     },
//     {
//         id: 8,
//         Price: 43,
//         name: "Pure white Polo",
//         img: "/Category/1.png",
//     },

// ];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="flex">
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/1.png"
          alt="banner"
        />
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/2.png"
          alt="banner"
        />
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/3.png"
          alt="banner"
        />
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/4.png"
          alt="banner"
        />
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/5.png"
          alt="banner"
        />
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/6.png"
          alt="banner"
        />
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/7.png"
          alt="banner"
        />
      </div>
      <div className="flex p-4">
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/8.png"
          alt="banner"
        />
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/9.png"
          alt="banner"
        />
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/10.png"
          alt="banner"
        />
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/11.png"
          alt="banner"
        />
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/12.png"
          alt="banner"
        />
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/13.png"
          alt="banner"
        />
        <img
          className="pl-5 h-auto max-w-full rounded-lg"
          src="/Category/14.png"
          alt="banner"
        />
      </div>
      {/* {data.map(el => 
            <CategoryCard 
            key= {el.id}
            img={el.img}
            count={el.Price}
            name={el.name}
            />)} */}
    </div>
  );
};

export default Category;
