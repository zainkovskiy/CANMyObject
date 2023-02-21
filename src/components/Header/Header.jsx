import React, { useState, useEffect } from "react";
import axios from 'axios';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Exel from 'svg/excel.svg';

import './Header.scss';

const userId = 2921;

export function Header(props) {
  const { officeList, currentOfficeId, rights, getData } = props;
  const [currentOffice, setCurrentOffice] = useState('');

  useEffect(() => {
    setCurrentOffice(officeList.find(office => office.id === currentOfficeId))
  }, [currentOfficeId])

  const downloadExcel = async () => {
    const res = await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Statistic/Operating.php', {
      action: 'get',
      actionEx: 'toExcel',
      userId: userId,
      viewedOfficeId: currentOffice.id
    }, { responseType: 'blob' });
    if (res.status === 200 && res.statusText === "OK") {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const name = res.headers['content-disposition'].split('filename=')[1];
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', name);
      document.body.appendChild(link);
      link.click();
    }
  }
  const openAddObject = () => {
    BX.SidePanel.Instance.open('https://crm.centralnoe.ru/CDB/object/card/add/?login=yes&action=new', {
      animationDuration: 300,
      width: 980,
      events: {
        onclose: () => {
          getData({
            "action": "get",
            "userId": userId,
            viewedOfficeId: currentOffice.id
          });
        },
      },
    });
  }

  return (<div className='header'>
    <img className='header__logo' src="https://crm.centralnoe.ru/dealincom/assets/logo_can.jpg" alt="logo" />
    <div className="header__left">
      <Button
        variant="outlined"
        onClick={openAddObject}
      >
        Добавить объект
      </Button>
      <IconButton
        size="small"
        onClick={downloadExcel}
      >
        <Exel />
      </IconButton>
      <div className="header__filter">
        <FormControl size="small">
          <InputLabel id="demo-simple-select-label">Офис</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentOffice}
            label='Офис'
            name={'office'}
            size='small'
            onChange={event => { setCurrentOffice(event.target.value) }}
            disabled={rights !== 'chief'}
          >
            {
              officeList.map(office =>
                <MenuItem key={office.id} value={office}>{office.name}</MenuItem>
              )
            }
          </Select>
        </FormControl>
        <Button
          variant="contained"
          onClick={() => getData({
            "action": "get",
            "userId": userId,
            viewedOfficeId: currentOffice.id
          })}
        >
          Сформировать
        </Button>
      </div>
    </div>
  </div>)
}
