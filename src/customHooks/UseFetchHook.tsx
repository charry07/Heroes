import axios from 'axios';
import { useEffect, useState } from 'react';

export const UseFetchHook = (url: string) => {
  const [data, setData] = useState([] as any);

  useEffect(() => {
    try {
      axios.get(url).then(({ data }) => setData(data));
    } catch (error) {
      setData(error);
    }
    return () => {};
  }, []);

  return { data };
};
