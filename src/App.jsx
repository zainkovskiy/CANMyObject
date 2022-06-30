import React, { useEffect, useState } from "react";
import axios from 'axios';

import './App.scss';

import { Linear } from 'components/Linear';
import { Header } from 'components/Header';
import { TableList } from 'components/TableList';
import { ModalWindow } from 'components/ModalWindow';
import { ChartsLine } from 'components/ChartsLine';

export function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getData({
      "action": "get",
      // "userId": "2198"
      "userId": userId
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
    setLoading(false)
  }

  const getGraph = async (raw) => {
    try {
      const res = await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Statistic/Operating.php', raw);
      if (res?.data) {
        setChartData(res.data)
      }
    } catch (err) {
      console.log(err);
    } finally{
      setOpen(true);
    }
  }

  const onClose = () => {
    setOpen(!open);
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
                    getGraph={getGraph}
                  />
                  <ModalWindow
                    open={open}
                    onClose={onClose}
                    children={
                      <ChartsLine
                        chartData={chartData}
                        getGraph={getGraph}
                      />
                    }
                  />
                </> :
                <img src='https://crm.centralnoe.ru/dealincom/assets/img/error.jpg' alt="error" />
            }
          </>
      }
    </>
  )
}