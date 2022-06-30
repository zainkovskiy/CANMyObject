import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Arrow from 'svg/arrow.svg';
import Approved from 'svg/approved.svg';
import Denied from 'svg/denied.svg';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Tooltip from '@mui/material/Tooltip';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './TableList.scss';

const cell = {
  fontSize: 10,
  fontFamily: 'Montserrat',
  letterSpacing: '0.8px',
  color: 'rgba(0, 0, 0, 1)',
}
const cellHeader = {
  fontWeight: 700,
  fontSize: 12,
  fontFamily: 'Montserrat',
  letterSpacing: '0.8px',
  color: 'rgba(0, 0, 0, 1)',
}

export function TableList(props) {
  const { list, subordinated, getGraph } = props;
  const [filter, setFilter] = useState({});
  const [filterList, setFilterList] = useState(list ? list : []);
  const [withoutContract, setWithoutContract] = useState(0);
  const [exContract, setExContract] = useState(0);
  const [adContract, setAdContract] = useState(0);

  useEffect(() => {
    let interimFilter = list;
    for (let key in filter) {
      if (filter[key] !== 'all') {
        if (key === 'type') {
          interimFilter = interimFilter.filter(item => item.type === filter[key])
        }
        if (key === 'contract') {
          if (filter[key] === 'договор') {
            interimFilter = interimFilter.filter(item => item.contract.type)
          } else {
            interimFilter = interimFilter.filter(item => item.contract.type === filter[key])
          }
        }
        if (key === 'advStatus') {
          interimFilter = interimFilter.filter(item => item.advStatus === filter[key])
        }
        if (key === 'assigned') {
          interimFilter = interimFilter.filter(item => item.assigned_by.fullName === filter[key])
        }
      }
    }
    setFilterList(interimFilter);
  }, [filter])

  useEffect(() => {
    countContract();
  }, [filterList])

  useEffect(() => {
    setFilter({});
    setFilterList(list);
  }, [list])

  const countContract = () => {
    let ad = 0;
    let without = 0;
    let ex = 0;
    for (let item of filterList) {
      if (!item.contract.type) {
        without++
      }
      if (item.contract.type === 'Эксклюзив') {
        ex++
      }
      if (item.contract.type === 'Рекламный') {
        ad++
      }
    }
    setWithoutContract(without);
    setExContract(ex);
    setAdContract(ad);
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 84px - 2rem)' }}>
      <Table sx={{ minWidth: 650 }} size="small" stickyHeader >
        <caption style={{ padding: '8px 16px' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <span>Без договора: {withoutContract}</span>
            <span>Рекламных: {adContract}</span>
            <span>Эксклюзивов: {exContract}</span>
          </div>
        </caption>
        <TableHead>
          <TableRow>
            <TableCell>
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Риелтор</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter?.assigned ? filter?.assigned : 'all'}
                  label='Риелтор'
                  name={'assigned'}
                  size='small'
                  sx={{
                    fontSize: 12
                  }}
                  onChange={event => { setFilter((prevState) => ({ ...prevState, [event.target.name]: event.target.value })) }}
                >
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='all'>Все</MenuItem>
                  {
                    subordinated.length > 0 &&
                    subordinated.map(realtor =>
                      <MenuItem key={realtor.id} sx={{
                        fontSize: 12
                      }} value={realtor.name}>{realtor.name}</MenuItem>
                    )
                  }
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Объект</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter?.type ? filter?.type : 'all'}
                  label='Объект'
                  name={'type'}
                  size='small'
                  sx={{
                    fontSize: 12
                  }}
                  onChange={event => { setFilter((prevState) => ({ ...prevState, [event.target.name]: event.target.value })) }}
                >
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='all'>Все</MenuItem>
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='Квартира'>Квартира</MenuItem>
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='Переуступка ДДУ'>Переуступка ДДУ</MenuItem>
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='Комната'>Комната</MenuItem>
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='Дом'>Дом</MenuItem>
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='Земельный участок'>Земельный участок</MenuItem>
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='Гараж'>Гараж</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Тип договора</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter?.contract ? filter?.contract : 'all'}
                  label='Тип договора'
                  name={'contract'}
                  size='small'
                  sx={{
                    fontSize: 12
                  }}
                  onChange={event => { setFilter((prevState) => ({ ...prevState, [event.target.name]: event.target.value })) }}
                >
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='all'>Все</MenuItem>
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='Эксклюзив'>Эксклюзив</MenuItem>
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='Рекламный'>Рекламный</MenuItem>
                  <MenuItem sx={{
                    fontSize: 12
                  }} value={null}>Без договора</MenuItem>
                  <MenuItem sx={{
                    fontSize: 12
                  }} value={'договор'}>С договором</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell sx={cellHeader}>Площади</TableCell>
            <TableCell sx={cellHeader}>Цена сейчас</TableCell>
            <TableCell>
              <FormControl size="small">
                <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter?.advStatus ? filter?.advStatus : 'all'}
                  label='Статус'
                  name={'advStatus'}
                  size='small'
                  sx={{
                    fontSize: 12
                  }}
                  onChange={event => { setFilter((prevState) => ({ ...prevState, [event.target.name]: event.target.value })) }}
                >
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='all'>Все</MenuItem>
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='К размещению'>К размещению</MenuItem>
                  <MenuItem sx={{
                    fontSize: 12
                  }} value='Не в рекламе'>Не в рекламе</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell sx={cellHeader}>Агрегатор</TableCell>
            <TableCell sx={cellHeader}>Просмотры</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            filterList.length > 0 &&
            filterList.map((row, idx) =>
              <TableRow key={idx}>
                <TableCell style={cell}>{row.assigned_by.fullName}</TableCell>
                <TableCell style={cell}>
                  <span
                    className='link-bitrix'
                    onClick={() => {
                      BX.SidePanel.Instance.open(`https://crm.centralnoe.ru/cardObject/?login=yes&source=1c&reqNumber=${row.reqNumber}`, { animationDuration: 300, width: 980, })
                    }}
                  >
                    {row.typeName}, {row.viewedAddress}
                  </span>
                </TableCell>
                <TableCell style={cell}>
                  <Tooltip
                    title={`${row?.contract?.contractText ? row.contract.contractText : 'Не рассмотренно'}
                    ${row?.contract?.contractDate ? moment(row.contract.contractDate).format("DD-MM-YYYY") : ''}`}
                    placement="top"
                    arrow>
                    <div style={{ width: 'min-content' }}>
                      <span>
                        {row?.contract?.typeName}
                      </span>&nbsp;
                      {
                        row?.contract?.dealId &&
                        (<span
                          className='link-bitrix'
                          onClick={() => {
                            BX.SidePanel.Instance.open(`https://crm.centralnoe.ru/crm/deal/details/${row.contract.dealId}/`, { animationDuration: 300, width: 980, })
                          }}
                        >
                          {row?.contract?.dealId}
                        </span>)
                      }
                    </div>
                  </Tooltip>
                </TableCell>
                <TableCell style={cell}>{row.viewedArea}</TableCell>
                <TableCell style={cell}>
                  <Tooltip title={`Цена на старте ${row.priceStart} тыс. руб.`} placement="top" arrow>
                    <span style={{
                      cursor: 'pointer',
                      display: 'flex',
                      gap: '0.5rem',
                      alignItems: 'center'
                    }}>
                      {row.priceCurrent} тыс.&#8381;
                      <Arrow
                        height={16}
                        style={row.priceTrend !== 2 ? {
                          transform: `${row.priceTrend === 0 ? 'rotate(-90deg)' : 'rotate(180deg)'}`
                        } : {}}
                      />
                    </span>
                  </Tooltip>
                </TableCell>
                <TableCell style={{ fontSize: 10 }}>
                  {
                    row.advStatus === 'К размещению' ?
                      <Tooltip
                        key={idx}
                        title={row.advTooltip}
                        placement="top"
                        arrow>
                        <div className='status' style={{ backgroundColor: '#BBED21' }}>
                          <Approved />
                        </div>
                      </Tooltip> :
                      <Tooltip
                        key={idx}
                        title={row.advTooltip}
                        placement="top"
                        arrow>
                        <div className='status' style={{ backgroundColor: '#ED2121' }}>
                          <Denied />
                        </div>
                      </Tooltip>
                  }
                </TableCell>
                <TableCell style={{ fontSize: 10 }}>
                  <div className='platforms'>
                    {
                      row?.platformStats.length > 0 &&
                      row.platformStats.map((platform, idx) =>
                        <Tooltip
                          key={idx}
                          title={platform.tooltip}
                          placement="top"
                          arrow>
                          <a
                            target={'_blank'}
                            href={platform.url}
                            key={idx}
                            className={`platform ${platform.status}`}
                          >{platform.name}</a>
                        </Tooltip>
                      )
                    }
                  </div>
                </TableCell>
                <TableCell style={{ fontSize: 10 }}>
                  <div className='platforms'>
                    {
                      row?.platformStats.length > 0 &&
                      row.platformStats.map((platform, idx) =>
                        <Tooltip
                          key={idx}
                          title={`За предыдущий месяц ${platform.showsLast}`}
                          placement="top"
                          arrow>
                          <span
                            className='platform__show'
                            onClick={() => getGraph({
                              "action": "getGraph",
                              "reqNumber": row.reqNumber,
                              "platform": platform.name,
                            })}
                          >
                            {platform.shows}
                            <Arrow
                              height={16}
                              style={platform.showsTrand !== 2 ? {
                                transform: `${platform.showsTrand === 0 ? 'rotate(-90deg)' : 'rotate(180deg)'}`
                              } : {}}
                            />
                          </span>
                        </Tooltip>
                      )
                    }
                  </div>
                </TableCell>
              </TableRow>)
          }
        </TableBody>
      </Table>
    </TableContainer >
  )
} 