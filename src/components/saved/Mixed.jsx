import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Mixed() {
  return (
    <div className=" w-3/4 h-3/5 m-auto mt-0 mb-0 pl-8">
      <div className="mt-20 p-8 bg-slate-50 rounded-xl relative ">
        <h1 className="-left-6 text-3xl font-semibold text-[color:var(--Green-text-color)] mb-4 relative left-0">
          Mixed
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((d) => (
            <div
              key={d.name}
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:opacity-90 hover:opacity-90 bg-white h-[300px] text-black shadow-md m-2 relative "
            >
              <div className="h-40 flex justify-center items-center rounded-t-xl mt-2 ">
                <img
                  src={d.img}
                  alt=""
                  className=" h-40 w-11/12 rounded-t-xl"
                />
              </div>
              <div className="bg-white rounded-full w-9 h-9 p-1 flex items-center justify-center absolute top-5 right-5 overflow-hidden cursor-pointer	">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#11875c"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="none"
                  className="w-6 h-6 text-black caret-lime-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </div>

              <div className="flex flex-col items-center justify-center relative top-4">
                <p className="text-xl font-semibold text-green-700">{d.name}</p>
                <p className="text-center ">{d.hostName}</p>
                <p className="text-center">{d.deadline}</p>
              </div>
            </div>
          ))}
        </div>{" "}
        <div className="flex gap-2 absolute right-20 mt-3">
          <button className="transition duration-300 ease-in-out hover:scale-110 hover:opacity-90 hover:bg-emerald-50 text-[color:var(--Green-text-color)] text-xl rounded-sm border border-[color:var(--Green-text-color)] w-14 h-10 flex items-center justify-center">
            &#11207;
          </button>
          <button className="transition duration-300 ease-in-out hover:scale-110 hover:opacity-90 hover:bg-emerald-50 hover:shadow-sm text-[color:var(--Green-text-color)] text-xl rounded-sm border border-[color:var(--Green-text-color)] w-14 h-10 flex items-center justify-center">
            &#11208;
          </button>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    img: `/assets/Images/pc.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/event1.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/earphoneservice.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/phoneservice.jpg`,
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
    img: `/assets/Images/pc.jpg`,
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
    img: `/assets/Images/earphoneservice.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/phoneservice.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/ps.jpg`,
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
    img: `/assets/Images/event1.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/earphoneservice.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/phoneservice.jpg`,
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
  {
    img: `/assets/Images/phoneservice.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
];

export default Mixed;
