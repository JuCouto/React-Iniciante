import React from 'react'
import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);
    };
    fetchData();
  }, [url]);

return{data}
};

