import React, { useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import moment from 'moment';
import {
  LineChart,
  Line,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

import './ChartsLine.scss';

moment.locale('ru')

export function ChartsLine({ chartData, getGraph }) {
  const getDate = (el) => {
    return (
      moment(el.date).format("DD MMMM")
    )
  }
  const getIntroOfPage = (lables) => {
    return (
      <div>
        {
          lables.map((label, idx) =>
            <p
              key={idx}
              className='tooltip__intro'>{label.name}: {label.payload.value}
            </p>
          )
        }
      </div>
    )
  }
  const CustomToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p className="tooltip__label"
          >{label}</p>
          {getIntroOfPage(payload)}
        </div>
      );
    }

    return null;
  }

  const handlerButton = (action) => {
    const actionMoment = action === 'prev' ? 'subtract' : 'add'
    getGraph({
      "action": "getGraph",
      "reqNumber": chartData.reqNumber,
      "platform": chartData.platform,
      "month": moment(`${chartData.month}-01-${chartData.year}`)[actionMoment](1, 'month').format('MM'),
      "year": moment(`${chartData.month}-01-${chartData.year}`)[actionMoment](1, 'month').format('YYYY')
    })
  }
  return (
    <>
      <DialogTitle id="alert-dialog-title">
        {chartData.platform} {chartData.data.length === 0 && <span>(нет данных)</span>}
      </DialogTitle>
      <DialogContent>
        < div className='charts' style={{ height: 450, padding: '1rem' }}>
          <ResponsiveContainer width='100%' height={400}>
            <LineChart width='100%' height={400}
              data={chartData.data}
              margin={{ top: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                allowDuplicatedCategory={false}
                dataKey={(el) => getDate(el)}
                style={{ fontFamily: 'Montserrat', fontSize: 12 }}
              />
              <YAxis
                dataKey='value'
                style={{ fontFamily: 'Montserrat', fontSize: 12 }}
              />
              <Tooltip
                content={<CustomToolTip />}
              />
              <Legend
                wrapperStyle={{ fontFamily: 'Montserrat', fontSize: 12 }}
              />
              {
                chartData?.data.map((line, idx) =>
                  <Line
                    key={idx}
                    type="monotone"
                    dataKey='value'
                    data={line.data}
                    name={line.name}
                    stroke={line.color}
                    strokeWidth={4}
                    activeDot={{ r: 8 }}
                  />
                )
              }
              {
                chartData?.reference.length > 0 &&
                chartData.reference.map((reference, idx) =>
                  <ReferenceLine
                    style={{ fontFamily: 'Montserrat', fontSize: 12 }}
                    key={idx}
                    x={moment(reference.x).format("DD MMMM")}
                    stroke={reference.stroke}
                    label={<Label
                      value={reference.label}
                      position="top"
                      style={{ fontFamily: 'Montserrat', fontSize: 12 }}
                    />}
                  />
                )
              }
            </LineChart>
          </ResponsiveContainer>
          <DialogContentText>
            {chartData.comment}
          </DialogContentText>
        </div>
        <DialogActions>
          {
            chartData.data.length > 0 &&
            <Button
              onClick={() => handlerButton('prev')}
              variant="outlined"
              startIcon={<ArrowBackOutlinedIcon
              />}>
              {
                moment(`${chartData.month}-01-${chartData.year}`).subtract(1, 'month').format('MMMM YYYY')
              }
            </Button>
          }
          {
            moment(`${chartData.month}-01-${chartData.year}`).isBefore(moment(), 'month', 'year') &&
            <Button
              onClick={() => handlerButton('next')}
              variant="outlined"
              endIcon={<ArrowForwardOutlinedIcon
              />}>
              {
                moment(`${chartData.month}-01-${chartData.year}`).add(1, 'month').format('MMMM YYYY')
              }
            </Button>
          }
        </DialogActions>
      </DialogContent>
    </>
  );
}

