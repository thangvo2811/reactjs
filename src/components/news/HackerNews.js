import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
const HackerNews = () => {
  // api: https://hn.algolia.com/api/v1/search?query=react
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  // const [showPw, setShowPw] = useState(false);
  const callApi = useRef({});
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );

  // const isMounted = useRef(true);

  // useEffect(() => {
  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, []);

  callApi.current = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setTimeout(() => {
        setData(res.data?.hits || []);
        setLoading(false);
      }, 3000);
    } catch (error) {
      setLoading(false);
      setErrMessage(`The error happened: ${error}`);
    }
  };

  // const handleChange = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 500);
  useEffect(() => {
    callApi.current();
  }, [url]);

  // const handleShow = () => {
  //   setShowPw(!showPw);
  // };

  // const handleClear = (e) => {
  //   document.getElementById("form").remove();
  // };

  // const [name, setName] = useState("");
  // const [checkInDate, setCheckInDate] = useState("");
  // const [checkOutDate, setCheckOutDate] = useState("");
  // const [list, setList] = useState();

  // const handleAdd = (e) => {
  //   setName(...name, e.target.value);
  //   setCheckInDate(...checkInDate);
  //   setCheckOutDate(...checkOutDate);
  // };

  // const [inputData, setInputData] = useState({
  //   name: "",
  //   checkInDate: "",
  //   checkOutDate: "",
  // });

  // const handleAdd = () => {
  //   setInputData(...inputData, { name, checkInDate, checkOutDate });
  //   setInputData({ name: "", checkInDate: "", checkOutDate: "" });
  // };

  return (
    <>
      {/* <div className="layout-column align-items-center justify-content-start">
        <section className="layout-row align-items-center justify-content-center mt-30">
          <input
            onChange={(e) => {
              setInputData((name) => ({
                ...name,
                ...{
                  name: e.target.value,
                },
              }));
            }}
            data-testid="input-guest-name"
            defaultValue={name ? "text" : ""}
            className="large mx-8"
            placeholder="Guest Name"
          />
          <input
            onChange={(e) => {
              setInputData((name) => ({
                ...name,
                ...{
                  checkInDate: e.target.value,
                },
              }));
            }}
            type="date"
            data-testid="input-checkin-date"
            defaultValue={"Check In"}
            className="large mx-8"
            placeholder="Check in Date"
          />
          <input
            onChange={(e) => {
              setInputData((date) => ({
                ...date,
                ...{
                  checkOutDate: e.target.value,
                },
              }));
            }}
            type="date"
            data-testid="input-checkout-date"
            defaultValue={"Check Out"}
            className="large mx-8"
            placeholder="Check out Date"
          />
          <button data-testid="add-button" onClick={handleAdd}>
            Add to Menu
          </button>
        </section>
      </div>
      <input type={showPw ? "text" : "password"} className="border" />
      <input type="date" className="border" />
      <button onClick={handleShow}>Show password</button>
      <button onClick={handleClear}>Clear</button> */}
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

export default HackerNews;
