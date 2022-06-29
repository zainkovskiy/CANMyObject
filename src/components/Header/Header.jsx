import React, { useState, useEffect } from "react";

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import './Header.scss';

export function Header(props) {
  const { officeList, currentOfficeId, rights, getData } = props;
  const [currentOffice, setCurrentOffice] = useState('');

  useEffect(() => {
    setCurrentOffice(officeList.find(office => office.id === currentOfficeId))
  }, [currentOfficeId])

  return (<div className='header'>
    <img className='header__logo' src="https://crm.centralnoe.ru/dealincom/assets/logo_can.jpg" alt="logo" />

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
          "userId": "2198",
          // "userId": userId,
          viewedOfficeId: currentOffice.id
        })}
      >
        Сформировать
      </Button>
    </div>
  </div>)
}
