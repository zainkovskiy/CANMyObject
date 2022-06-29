import React, { useEffect, useState } from "react";
import axios from 'axios';

import './App.scss';

import { Linear } from 'components/Linear';
import { Header } from 'components/Header';
import { TableList } from 'components/TableList';

export function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData({
      "action": "get",
      "userId": "2198"
      // "userId": userId
    });
  }, [])

  const getData = async (raw) => {
    setLoading(true);
    try {
      const res = await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Statistic/Operating.php', raw);
      if (res?.data) {
        setData(res.data)
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {
        loading ?
          <Linear /> :
          <>
            {
              data ?
                <>
                  <Header
                    officeList={data?.office ? data?.office : []}
                    currentOfficeId={data.viewedOfficeId}
                    rights={data?.rights ? data?.rights : ''}
                    getData={getData}
                  />
                  <TableList
                    list={data?.objectsData ? data?.objectsData : []}
                    subordinated={data?.subordinated ? data?.subordinated : []}
                  />
                </> :
                <img src='https://crm.centralnoe.ru/dealincom/assets/img/error.jpg' alt="error" />
            }
          </>
      }
    </>
  )
}