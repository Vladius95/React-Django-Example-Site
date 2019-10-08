import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadResource } from "static/utils/resources";

export function useResource(query: string, type: string, key: string) {
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

// '/api/stores/'
export function useRequest(query: string, type: string, key: string) {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const request = new XMLHttpRequest();
    try {
      request.open("GET", query, false);
      request.send();

      const result = JSON.parse(request.responseText);

      dispatch({
        type,
        [key]: result
      });
    } catch {
      setError(true);
    }

    setLoading(false);
  }, [dispatch]);

  return [isLoading, isError];
}
