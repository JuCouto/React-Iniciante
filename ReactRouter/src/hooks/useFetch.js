import React from "react";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - estado de loading
  const [loading, setLoading] = useState(false);

  //8 - tratando erros.
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      //6
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);
      } catch (error) {
        setError("Ocorreu um erro ao carregar os dados")
      }

      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);

  //5-
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    }
  };

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config]);

  return { data, httpConfig, loading,error };
};
