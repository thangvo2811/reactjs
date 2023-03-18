import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Photos = () => {
  // api :https://picsum.photos/v2/list
  // https://picsum.photos/v2/list?page=2&limit=100
  const [photo, setPhoto] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const callAllPhoto = async (page) => {
    try {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=8`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleLoadMore = useRef({});
  handleLoadMore.current = async () => {
    console.log("Click");
    const res = await callAllPhoto(nextPage);
    const newPhotos = [...photo, ...res];
    setPhoto(newPhotos);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    handleLoadMore.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {photo?.length > 0 &&
          photo?.map((item, index) => (
            <div key={item?.id} className="p-3 bg-white shadow-md rounded-lg">
              <img
                src={item?.download_url}
                alt={item?.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore.current}
          className="inline-block px-8 py-4 bg-purple-700 text-white "
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photos;
