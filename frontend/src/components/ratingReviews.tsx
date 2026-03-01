import React from "react";
import { Star, ChevronDown, Filter, Camera } from "lucide-react";

const RatingReviews = () => {
  const ratingData = [
    { stars: 5, count: 8, percentage: 80 },
    { stars: 4, count: 3, percentage: 30 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  return (
    <div className="w-full lg:max-w-3xl   py-4 bg-white border border-gray-200 rounded-xl shadow-sm font-sans">
      {/* Header */}
      <h2 className="text-xl font-bold p-5 border-b text-gray-800 border-gray-100">
        Rating & Reviews
      </h2>

      {/* Summary Section */}
      <div className="flex flex-col md:flex-row items-center p-6 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-800">4.73/5</span>
            <div className="flex items-center gap-1 px-3 py-1 border  rounded-full text-sm  text-gray-700">
              <Star size={12} className="fill-[#FEC84B] text-[#FEC84B]" />
              Satisfactory
            </div>
          </div>
          <div className="flex mt-2 text-[#FEC84B]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < 4 ? "fill-[#FEC84B]" : "text-gray-300"}
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-2">11 Ratings</p>
        </div>

        {/* Vertical Divider (Desktop) */}
        <div className="hidden md:block w-px h-24 bg-gray-100"></div>

        {/* Progress Bars */}
        <div className="flex-1 w-full space-y-2">
          {ratingData.map((item) => (
            <div key={item.stars} className="flex items-center gap-4">
              <div className="flex gap-0.5 w-24">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={
                      i < item.stars
                        ? "fill-[#FEC84B] text-[#FEC84B]"
                        : "text-gray-200"
                    }
                  />
                ))}
              </div>
              <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FEC84B] rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 w-4">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="mx-6 border-gray-100" />

      {/* Filter Section */}
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 cursor-pointer rounded-lg text-gray-600 text-sm hover:bg-gray-50">
            <Filter size={16} /> Clear
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 cursor-pointer rounded-lg text-gray-600 text-sm hover:bg-gray-50">
            <Camera size={16} /> Photos
          </button>
          {[5, 4, 3, 2, 1].map((num) => (
            <button
              key={num}
              className="flex items-center  cursor-pointer gap-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 text-sm hover:bg-gray-50"
            >
              <Star size={14} className="text-gray-400" /> {num}
            </button>
          ))}

          <div className="ml-auto flex items-center gap-3">
            <span className="text-sm cursor-pointer text-gray-500">
              Sort By:
            </span>
            <button className="flex cursor-pointer items-center justify-between w-48 px-4 py-2 border border-gray-200 rounded-lg text-teal-600 text-sm">
              Select an option <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Review List */}
        <div className="space-y-6">
          {[1, 2].map((review) => (
            <div
              key={review}
              className="flex items-center justify-between py-4 border-t border-gray-50 first:border-t-0"
            >
              <div className="flex items-center gap-4">
                <div className="flex text-[#FEC84B]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < 4 ? "fill-[#FEC84B]" : "text-gray-300 fill-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-gray-600">Md. Sabbir Hossain</span>
              </div>
              <span className="text-gray-400 text-sm">5 days ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingReviews;
