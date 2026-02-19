import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const ListingItems = ({ listing }) => {
  return (
    <div className="bg-white w-[280px] shadow-md hover:shadow-2xl transition-shadow overflow-hidden rounded-lg">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://tse3.mm.bing.net/th?id=OIP.ou4JatDxkOZ1P9sZKyjxjAHaFj&pid=Api&P=0&h=220"
          }
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-3 w-full">
          <p className="truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-red-600 " />
            <p className="text-sm text-gray-600 truncate">{listing.address}</p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-3">
            {listing.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold">
            $
            {listing.offer
              ? listing.regularPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-xs">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds`
                : `${listing.bedrooms} beds`}
            </div>
            <div className="font-bold text-xs">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} bath`
                : `${listing.bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingItems;
