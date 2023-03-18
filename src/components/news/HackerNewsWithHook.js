import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
import useHackerNewAPI from "../../hooks/UseHackerNewsAPI";
const HackerNewsWithHook = () => {
  const [query, setQuery] = useState("");
  const { data, loading, errMessage, setUrl } = useHackerNewAPI(
    ` https://hn.algolia.com/api/v1/search?query=react`,
    { hits: [] }
  );
  return (
    <>
      <div className="bg-white mx-auto p-5 mb-5 rounded-lg shadow-md w-2/4">
        <div className="flex mb-5 gap-x-5">
          <input
            type="text"
            className="border border-gray-200 block w-full p-5 outline-none rounded-md mb-5 focus:border-blue-400 transition-all"
            defaultValue={query}
            placeholder="Search for keywords..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={() =>
              setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
            }
            className="bg-blue-500 text-white font-semibold p-5 rounded-md transition-all flex-shrink-0"
          >
            Search
          </button>
        </div>
        {loading && (
          <div className="loading w-8 h-8 rounded-full border-4 border-blue-500 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
        )}
        {!loading && errMessage && <p>{errMessage}</p>}
        <div className="flex flex-wrap gap-5">
          {!loading &&
            data.length > 0 &&
            data?.map((item, index) => {
              if (!item.title || item.title.length <= 0) return null;
              return (
                <h3 className="p-3 bg-gray-100 rou rounded-md" key={index}>
                  {item?.title}
                </h3>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default HackerNewsWithHook;
