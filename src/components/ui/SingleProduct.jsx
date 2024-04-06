import React from "react";
import laptop from '../../../public/Images/laptop.jpg';

const SingleProduct = (props) => {
  return (
    <div className="w-48 border border-gray-300 rounded-lg mb-4 ">
        <div className="w-full h-32 overflow-hidden mb-2">
          <img
            src={props.image}
            alt="Laptop"
            className="w-full h-full object-cover"
          />
        </div>
      <div className="flex pl-3 pb-3 flex-col items-start">
        <p className="text-center mt-2 max-h-16 overflow-hidden whitespace-normal">
          {props.title}
        </p>
        <p className="text-gray-600">Rating: {props.rating}</p>
        <p className="text-gray-600 text-center">Price: ${props.price}</p>
        <p className="text-gray-600 text-center">Seller: {props.username}</p>
      </div>
    </div>
  );
};

export default SingleProduct;