import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
function SavedProducts() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" w-3/4 h-3/5 m-auto mt-0 pl-8">
      <div className=" mt-10 p-8  rounded-xl">
        <h1 className="relative -left-5 text-3xl font-semibold text-[color:var(--Green-text-color)] mb-4">
          Products
        </h1>
        <Slider {...settings} className="">
          {data.map((d) => (
            <div
              key={d.name}
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:opacity-90 bg-white h-[300px] text-black shadow-md m-2"
            >
              <div className="h-40 flex justify-center items-center rounded-t-xl mt-2">
                <img
                  src={d.img}
                  alt=""
                  className=" hover: h-40 w-11/12 rounded-t-xl"
                />
                <div className="bg-white  rounded-full w-9 h-9 p-1 flex items-center justify-center absolute top-5 right-5 cursor-pointer	">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#11875c"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="none"
                    className="w-6 h-6  caret-lime-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center relative top-4">
                <p className="text-xl font-semibold text-green-700">{d.name}</p>
                <p className="text-center ">{d.hostName}</p>
                <p className="text-center">{d.deadline}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    img: `/assets/Images/laptop.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/pc.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/pccharger.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/pin.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/laptop.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
];

export default SavedProducts;
