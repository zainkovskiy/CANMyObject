import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export function FormControlCustom(props) {
  const { label, set, list } = props;
  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="demo-simple-select-label">
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        size='small'
        sx={{
          fontSize: 12
        }}
        {...set}
      >
        <MenuItem sx={{
          fontSize: 12
        }} value='all'>Все</MenuItem>
        {
          list.map((item, idx) =>
            <MenuItem
              key={idx}
              sx={{
                fontSize: 12
              }}
              value={item.value}>{item.name}</MenuItem>
          )
        }
      </Select>
    </FormControl>
  )
}