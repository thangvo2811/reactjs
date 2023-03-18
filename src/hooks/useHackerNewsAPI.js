import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewAPI(initialUrl, initialData) {
  // api: https://hn.algolia.com/api/v1/search?query=react
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  // const [showPw, setShowPw] = useState(false);
  const callApi = useRef({});
  const [url, setUrl] = useState(initialUrl);

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  callApi.current = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      console.log(isMounted.current);
      if (isMounted.current) {
        setData(res.data?.hits || []);
        setLoading(false);
      }
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

  return {
    data,
    setUrl,
    errMessage,
    loading,
  };
}
