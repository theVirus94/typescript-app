import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { dataAPI } from '../mock-server/dataAPI';
import {TableComponent} from './TableComponent';


export const Fetch = () => {
  /**
   *  Sends a GET request to the Mock API file using dataAPI AxiosInstance
   * 
   * @returns The data as a TableComponent conditioned on the length of the data. If data rendering encountered with an error
   * (0 length), table will not be rendered on the browser.
   */
  const [data, setData] = useState([]);
  
  useEffect(() => {
    dataAPI.get("http://localhost:3000/mock").then(function (response: AxiosResponse) {
      setData(response.data);
    });
  }, []);

  return (
    <>
      {data.length > 0 && <TableComponent tableData={data} />}
    </>
  );
}

