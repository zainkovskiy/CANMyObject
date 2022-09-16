import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Button } from '@mui/material';
import moment from 'moment';

export const DateFilter = ({ onClose, addFilter, filterDate }) => {
  const [value, setValue] = useState(
    filterDate || {
      before: null,
      after: null,
    }
  );

  return (
    <>
      <DialogTitle>Дата актуализации</DialogTitle>
      <DialogContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            width: '100%',
            margin: '1rem 0 0 0',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label='От'
              value={value.after}
              onChange={(event) => {
                setValue((prevState) => ({
                  ...prevState,
                  after: event,
                }));
                // console.log(event);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size='small'
                />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label='До'
              value={value.before}
              onChange={(event) => {
                setValue((prevState) => ({
                  ...prevState,
                  before: event,
                }));
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size='small'
                />
              )}
            />
          </LocalizationProvider>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          size='small'
          variant='outlined'
          onClick={() => {
            addFilter(value), onClose();
          }}
        >
          Сохранить
        </Button>
        <Button
          size='small'
          variant='outlined'
          color='error'
          onClick={onClose}
        >
          Закрыть
        </Button>
      </DialogActions>
    </>
  );
};
