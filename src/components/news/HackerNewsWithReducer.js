import React, { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};
const hackerNewReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }

    default:
      break;
  }
};
const HackerNewsWithReducer = () => {
  // api: https://hn.algolia.com/api/v1/search?query=react
  const [state, dispatch] = useReducer(hackerNewReducer, initialState);

  const callApi = useRef({});
  // const [url, setUrl] = useState(
  //   `https://hn.algolia.com/api/v1/search?query=${query}`
  // );
  callApi.current = async () => {
    // setLoading(true);
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await axios.get(state.url);
      dispatch({ type: "SET_DATA", payload: res.data?.hits || [] });
      dispatch({ type: "SET_LOADING", payload: false });

      // setData(res.data?.hits || []);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_ERROR", payload: `The error happned ${error}` });
      // setErrMessage(`The error happened: ${error}`);
    }
  };

  useEffect(() => {
    callApi.current();
  }, [state.url]);

  return (
    <>
      <div className="bg-white mx-auto p-5 mb-5 rounded-lg shadow-md w-2/4">
        <div className="flex mb-5 gap-x-5">
          <input
            type="text"
            className="border border-gray-200 block w-full p-5 outline-none rounded-md mb-5 focus:border-blue-400 transition-all"
            defaultValue={state.query}
            placeholder="Search for keywords..."
            onChange={(e) =>
              dispatch({ type: "SET_QUERY", payload: e.target.value })
            }
          />
          <button
            // onClick={() =>
            //   setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
            // }
            onClick={() =>
              dispatch({
                type: "SET_URL",
                payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
              })
            }
            className="bg-blue-500 text-white font-semibold p-5 rounded-md transition-all flex-shrink-0"
            disabled={state.loading}
            style={{
              opacity: state.loading ? "0.25" : "1",
            }}
          >
            Search
          </button>
        </div>
        {state.loading && (
          <div className="loading w-8 h-8 rounded-full border-4 border-blue-500 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
        )}
        {!state.loading && state.errMessage && (
          <p className="text-red-500">{state.errMessage}</p>
        )}
        <div className="flex flex-wrap gap-5">
          {!state.loading &&
            state.hits.length > 0 &&
            state.hits?.map((item, index) => {
              console.log("Item title", item.title);
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

export default HackerNewsWithReducer;
