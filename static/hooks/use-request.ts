import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadResource } from "static/utils/resources";

export function useRequest(query: string, type: string, key: string) {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    loadResource(query)
      .then(data => {
        dispatch({
          type,
          [key]: JSON.parse(data)
        });
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  }, [dispatch]);

  return [isLoading, isError];
}
