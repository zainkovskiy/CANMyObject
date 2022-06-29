import React, { useEffect, useState } from "react";

import './App.scss';

import { Header } from 'components/Header';
import { TableList } from 'components/TableList';

export function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setData({
      "objectsData": [
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "984000234",
              "viewedAddress": "Прокудское Гагарина 86",
              "viewedArea": "45/36/9",
              "priceStart": "1500",
              "priceCurrent": "1500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "approved",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "approved",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "51148000270",
              "viewedAddress": "Новосибирск Олимпийская 67а",
              "viewedArea": "26/18/5",
              "priceStart": "3050",
              "priceCurrent": "3050",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "denied",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "denied",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "51148000271",
              "viewedAddress": "Криводановский сельсовет Метеор 232",
              "viewedArea": "30/20/9",
              "priceStart": "700",
              "priceCurrent": "700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "pending",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "pending",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "51148000273",
              "viewedAddress": "Новосибирск Спортивная 7",
              "viewedArea": "30/14/9",
              "priceStart": "3000",
              "priceCurrent": "3000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "51148000275",
              "viewedAddress": "Чик рп Терешковой 123",
              "viewedArea": "40/30/7",
              "priceStart": "1050",
              "priceCurrent": "1050",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48811",
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-15 13:19:56.227663",
                  "expiration": "2022-07-26 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-22 15:01:40.000000"
              },
              "type": "Комната",
              "typeName": "(Ком.)",
              "reqNumber": "51148000277",
              "viewedAddress": "Новосибирск Шишкина 114",
              "viewedArea": "28/20/5",
              "priceStart": "1350",
              "priceCurrent": "1350",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017310709420779231",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270686947",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "56249",
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-18 12:03:19.042433",
                  "expiration": "2022-05-18 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-20 08:43:41.000000"
              },
              "type": "Комната",
              "typeName": "(Ком.)",
              "reqNumber": "51148000307",
              "viewedAddress": "Новосибирск Халтурина 31",
              "viewedArea": "75/14/8",
              "priceStart": "710",
              "priceCurrent": 710,
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "59142",
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-10 10:38:46.049910",
                  "expiration": "2022-07-10 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-26 15:20:43.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "51148000308",
              "viewedAddress": "Новосибирск Невельского 69",
              "viewedArea": "45/33/6",
              "priceStart": "3900",
              "priceCurrent": "3900",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017310709420779976",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/271194021",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "61003",
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-22 13:52:04.253317",
                  "expiration": "2022-09-22 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-21 16:11:03.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "51148000309",
              "viewedAddress": "Новосибирск Забалуева 43",
              "viewedArea": "43/27/8",
              "priceStart": "3200",
              "priceCurrent": "3200",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017310709420779977",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274123534",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "69564",
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-23 13:44:26.062331",
                  "expiration": "2022-11-23 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-23 14:28:47.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "51148000311",
              "viewedAddress": "Новосибирск Ленина 59",
              "viewedArea": "25/14/7",
              "priceStart": "2900",
              "priceCurrent": "2900",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017310709420780000",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274126024",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "70457",
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-30 14:20:33.301307",
                  "expiration": "2022-06-30 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-30 15:48:14.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "51148000312",
              "viewedAddress": "Новосибирск Широкая 137/1",
              "viewedArea": "62/42/7",
              "priceStart": "5000",
              "priceCurrent": "5000",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017310709420780001",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274126303",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "71568",
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-06 12:10:56.789990",
                  "expiration": "2022-12-06 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-06 14:35:49.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "51148000313",
              "viewedAddress": "Обь Станционная 46",
              "viewedArea": "56/34/9",
              "priceStart": "2800",
              "priceCurrent": "2800",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017310709420780002",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274380306",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "73103",
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-16 12:06:12.327222",
                  "expiration": "2022-09-16 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-16 13:58:36.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "51148000314",
              "viewedAddress": "Новосибирск Гэсстроевская 2/1",
              "viewedArea": "49/22/13",
              "priceStart": "5400",
              "priceCurrent": "5400",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017310709420780003",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274923740",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53982000494",
              "viewedAddress": "Новосибирск Порт-Артурский 2-й 27",
              "viewedArea": "34/27/8",
              "priceStart": "3950",
              "priceCurrent": "3950",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53982000655",
              "viewedAddress": "Криводановка Пушкина 2",
              "viewedArea": "7.90",
              "priceStart": "1000",
              "priceCurrent": "1000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53982000700",
              "viewedAddress": "Марусино Ёлочка 39",
              "viewedArea": "60/50/7",
              "priceStart": "1200",
              "priceCurrent": "1200",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53982000702",
              "viewedAddress": "Буготак Советская 66",
              "viewedArea": "74/43/13",
              "priceStart": "2150",
              "priceCurrent": "2150",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53982000706",
              "viewedAddress": "Криводановский сельсовет Ёлочка уч. 124",
              "viewedArea": "7.20",
              "priceStart": "200",
              "priceCurrent": "200",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53982000725",
              "viewedAddress": "Новосибирск Фасадная 26/1",
              "viewedArea": "40/29/4",
              "priceStart": "2600",
              "priceCurrent": "2600",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53982000735",
              "viewedAddress": "Новосибирск Ягодинская 39",
              "viewedArea": "79/48/16",
              "priceStart": "1750",
              "priceCurrent": "1750",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53982000739",
              "viewedAddress": "Новосибирск Золотая осень 26",
              "viewedArea": "9.66",
              "priceStart": "750",
              "priceCurrent": "750",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53982000740",
              "viewedAddress": "Криводановский сельсовет Елочка-2 27",
              "viewedArea": "12/0/0",
              "priceStart": "500",
              "priceCurrent": "500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53982000746",
              "viewedAddress": "Марусино СНТ Елочка 39",
              "viewedArea": "36/25/6",
              "priceStart": "1100",
              "priceCurrent": "1100",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53982000760",
              "viewedAddress": "Новосибирск Порт Артурский 2 пер 78",
              "viewedArea": "80/56/18",
              "priceStart": "4500",
              "priceCurrent": "4500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53982000766",
              "viewedAddress": "Новосибирск Невельского 67",
              "viewedArea": "45/31/7",
              "priceStart": "2600",
              "priceCurrent": "2600",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53982000793",
              "viewedAddress": "Коченево НСТ Ветеран-1 368",
              "viewedArea": "126/60/20",
              "priceStart": "3000",
              "priceCurrent": "3000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53982000828",
              "viewedAddress": "Новосибирск Забалуева 90",
              "viewedArea": "40/21/5",
              "priceStart": "3350",
              "priceCurrent": "3350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54259001585",
              "viewedAddress": "Марусино Комсомольская 16",
              "viewedArea": "42/27/8",
              "priceStart": "1600",
              "priceCurrent": "1600",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "54279002623",
              "viewedAddress": "Новосибирск Карла Маркса площадь 1",
              "viewedArea": "3.00",
              "priceStart": "350",
              "priceCurrent": "350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54704000316",
              "viewedAddress": "Толмачевский сельсовет Фруктовая 143",
              "viewedArea": "70/40/5",
              "priceStart": "1900",
              "priceCurrent": "1900",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54704000317",
              "viewedAddress": "Новосибирск Писарева 4",
              "viewedArea": "31/18/6",
              "priceStart": "3650",
              "priceCurrent": "3650",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54717000187",
              "viewedAddress": "8 Марта Мира 2",
              "viewedArea": "70/1/1",
              "priceStart": "3800",
              "priceCurrent": "3800",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54717003186",
              "viewedAddress": "Дорогино Светлая 28",
              "viewedArea": "42/27/5",
              "priceStart": "700",
              "priceCurrent": "700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48788",
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-15 12:11:36.263532",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54737000140",
              "viewedAddress": "Новосибирск Ягодинская 1Б",
              "viewedArea": "48/17/13",
              "priceStart": "3780",
              "priceCurrent": "3780",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48358",
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 13:59:54.441856",
                  "expiration": "2022-06-03 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-06-09 08:06:46.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54737000154",
              "viewedAddress": "Новосибирск Виталия Потылицына 7/5",
              "viewedArea": "72/36/12",
              "priceStart": "6800",
              "priceCurrent": "6800",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "55479000475",
              "viewedAddress": "Новосибирск Воскресная 5",
              "viewedArea": "3.00",
              "priceStart": "7700",
              "priceCurrent": "7700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "55581000434",
              "viewedAddress": "Искитим Индустриальный 24",
              "viewedArea": "55/1/6",
              "priceStart": "1750",
              "priceCurrent": "1750",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "55599000162",
              "viewedAddress": "Лесная Поляна Станционная 20",
              "viewedArea": "50/0/0",
              "priceStart": "350",
              "priceCurrent": "350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Комната",
              "typeName": "(Ком.)",
              "reqNumber": "55599001065",
              "viewedAddress": "Новосибирск Забалуева 70",
              "viewedArea": "60/13/6",
              "priceStart": "750",
              "priceCurrent": "750",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1583,
                  "fullName": "Альчикова Оксана Геннадьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57450000301",
              "viewedAddress": "Новосибирск Виктора Шевелёва 34",
              "viewedArea": "41/16/12",
              "priceStart": "2250",
              "priceCurrent": "2250",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "57416",
              "assigned_by": {
                  "UID": 3617,
                  "fullName": "Антонова Наталья Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-25 17:14:02.924155",
                  "expiration": "2022-08-25 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-26 14:09:13.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000342",
              "viewedAddress": "Новосибирск Титова 198",
              "viewedArea": "60/37/9",
              "priceStart": "5300",
              "priceCurrent": "5300",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017369635227680089",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270685151",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "56919",
              "assigned_by": {
                  "UID": 3617,
                  "fullName": "Антонова Наталья Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-24 11:38:20.508724",
                  "expiration": "2022-08-25 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-26 13:43:08.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000076",
              "viewedAddress": "Горбуново Молодежная 3",
              "viewedArea": "43/30/6",
              "priceStart": "400",
              "priceCurrent": "400",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017476113481805278",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270689308",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "61623",
              "assigned_by": {
                  "UID": 3617,
                  "fullName": "Антонова Наталья Александровна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-03-25 14:22:26.714512",
                  "expiration": "2022-06-24 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-25 12:50:42.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58608000010",
              "viewedAddress": "Новосибирск Связистов 139",
              "viewedArea": "42/28/7",
              "priceStart": "4700",
              "priceCurrent": 4700,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274126215",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "62381",
              "assigned_by": {
                  "UID": 3617,
                  "fullName": "Антонова Наталья Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-29 17:37:28.654385",
                  "expiration": "2022-07-31 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-21 17:38:10.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58608000011",
              "viewedAddress": "Новосибирск 9 Гвардейской Дивизии 11",
              "viewedArea": "59/42/7",
              "priceStart": "4800",
              "priceCurrent": "4800",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017499941180632575",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274123738",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "67605",
              "assigned_by": {
                  "UID": 3617,
                  "fullName": "Антонова Наталья Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-06 10:37:15.485507",
                  "expiration": "2022-10-11 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-12 11:15:12.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58608000013",
              "viewedAddress": "Куйбышев Омская 77",
              "viewedArea": "41/30/10",
              "priceStart": "2000",
              "priceCurrent": "2000",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017499941180632577",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274125418",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34034",
              "assigned_by": {
                  "UID": 1506,
                  "fullName": "Безуглов Александр Викторович"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-17 10:22:08.745705",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54842000047",
              "viewedAddress": "Новосибирск Молдавская 11",
              "viewedArea": "240/100/12",
              "priceStart": "8400",
              "priceCurrent": "8400",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1506,
                  "fullName": "Безуглов Александр Викторович"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54842000050",
              "viewedAddress": "Новосибирск Динамовцев 16",
              "viewedArea": "62/47/6",
              "priceStart": "2790",
              "priceCurrent": "2790",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "50113",
              "assigned_by": {
                  "UID": 1506,
                  "fullName": "Безуглов Александр Викторович"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-19 11:06:58.201726",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "54842000052",
              "viewedAddress": "Станционный сельский совет Ратник 10",
              "viewedArea": "12.00",
              "priceStart": "1100",
              "priceCurrent": "1100",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48219",
              "assigned_by": {
                  "UID": 1506,
                  "fullName": "Безуглов Александр Викторович"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 11:37:34.055973",
                  "expiration": "2022-07-05 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-25 09:38:55.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54842000078",
              "viewedAddress": "Новосибирск Вертковская 12/3",
              "viewedArea": "46/33/6",
              "priceStart": "3700",
              "priceCurrent": 3800,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/2071835052088962933",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274284507",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "63763",
              "assigned_by": {
                  "UID": 1506,
                  "fullName": "Безуглов Александр Викторович"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-07 15:48:01.102995",
                  "expiration": "2022-10-07 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-22 10:15:20.000000"
              },
              "type": "Гараж",
              "typeName": "(Г.)",
              "reqNumber": "54842000084",
              "viewedAddress": "Новосибирск Потанинская 6а",
              "viewedArea": "17/0/0",
              "priceStart": "650",
              "priceCurrent": "650",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017395993199499351",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/commercial/274123987",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68359",
              "assigned_by": {
                  "UID": 1506,
                  "fullName": "Безуглов Александр Викторович"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-13 12:21:56.546382",
                  "expiration": "2022-11-16 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-16 13:09:34.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54842000085",
              "viewedAddress": "Новосибирск 2-й Степной переулок 26",
              "viewedArea": "203/97/12",
              "priceStart": "7900",
              "priceCurrent": "7900",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017395993199499352",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274125709",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48459",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 15:20:04.168751",
                  "expiration": "2022-07-06 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-21 15:14:46.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53871000083",
              "viewedAddress": "Нижнекаменка Ленина 48",
              "viewedArea": "38/27/9",
              "priceStart": "640",
              "priceCurrent": "640",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017369635227677331",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274123338",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34039",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 15:37:00.425954",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000091",
              "viewedAddress": "Новосибирск Сибиряков-Гвардейцев 44/1",
              "viewedArea": "26/24/1",
              "priceStart": "1100",
              "priceCurrent": "1100",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53871000109",
              "viewedAddress": "Новопичугово Бирюзовая-Пляжная 12-34",
              "viewedArea": "360/189/22",
              "priceStart": "1200",
              "priceCurrent": "1200",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53871000169",
              "viewedAddress": "Колывань Овчинникова 68",
              "viewedArea": "54/36/8",
              "priceStart": "2500",
              "priceCurrent": "2500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48384",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 14:18:54.854941",
                  "expiration": null,
                  "moderation": "Отклонено",
                  "moderationDate": "2022-04-28 10:39:49.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53871000220",
              "viewedAddress": "Марусино Горького 24а",
              "viewedArea": "269/260/0",
              "priceStart": "7000",
              "priceCurrent": "7000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48373",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 14:12:30.384506",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000224",
              "viewedAddress": "Новосибирск Невельского 55",
              "viewedArea": "74/58/8",
              "priceStart": "4700",
              "priceCurrent": "4700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48367",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 14:08:06.817025",
                  "expiration": "2022-06-29 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-21 16:41:26.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000229",
              "viewedAddress": "Новосибирск Титова 39/1",
              "viewedArea": "43/27/6",
              "priceStart": "3850",
              "priceCurrent": 3850,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274303149",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34035",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 15:36:04.022239",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000299",
              "viewedAddress": "Новосибирск Забалуева 80",
              "viewedArea": "60/48/8",
              "priceStart": "3720",
              "priceCurrent": "3720",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000304",
              "viewedAddress": "Новосибирск Виктора Уса 15/1",
              "viewedArea": "63/39/10",
              "priceStart": "4320",
              "priceCurrent": "4320",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53871000306",
              "viewedAddress": "Береговое Степная 272",
              "viewedArea": "1500.00",
              "priceStart": "410",
              "priceCurrent": "410",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53871000317",
              "viewedAddress": "Кубовинский сельсовет участок №43 53",
              "viewedArea": "7.00",
              "priceStart": "690",
              "priceCurrent": "690",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000318",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "66/34/10",
              "priceStart": "2350",
              "priceCurrent": "2350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48515",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 15:56:37.165532",
                  "expiration": "2022-04-26 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-20 08:33:07.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000323",
              "viewedAddress": "Новосибирск Кубовая 107/2",
              "viewedArea": "58/36/9",
              "priceStart": "4500",
              "priceCurrent": "4500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48526",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:02:26.534197",
                  "expiration": "2022-04-26 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-20 08:33:12.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000324",
              "viewedAddress": "Новосибирск Кубовая 115",
              "viewedArea": "73/45/15",
              "priceStart": "5900",
              "priceCurrent": "5900",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000325",
              "viewedAddress": "Новосибирск Ольги Жилиной 92а",
              "viewedArea": "45/30/6",
              "priceStart": "4040",
              "priceCurrent": "4040",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48545",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 16:14:34.739968",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000327",
              "viewedAddress": "Новосибирск Мичурина 23",
              "viewedArea": "46/31/6",
              "priceStart": "4720",
              "priceCurrent": "4720",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48550",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 16:16:06.234236",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000328",
              "viewedAddress": "Новосибирск Железнодорожная 22",
              "viewedArea": "62/47/9",
              "priceStart": "6750",
              "priceCurrent": "6750",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48557",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 16:18:58.761312",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53871000329",
              "viewedAddress": "Новосибирск Тульская 241",
              "viewedArea": "75/51/8",
              "priceStart": "3000",
              "priceCurrent": "3000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "51623",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-25 13:11:05.043118",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000338",
              "viewedAddress": "Новосибирск Тюленина 26/2",
              "viewedArea": "24/16/3",
              "priceStart": "2000",
              "priceCurrent": "2000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "56157",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-17 15:23:31.654453",
                  "expiration": "2022-05-17 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-20 08:43:18.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000340",
              "viewedAddress": "Новосибирск Станционная 44",
              "viewedArea": "75/49/11",
              "priceStart": "4990",
              "priceCurrent": "4990",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "57105",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-24 16:31:15.660605",
                  "expiration": "2022-05-25 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-30 07:53:42.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53871000341",
              "viewedAddress": "Каменский сельсовет 11-я УЧАСТОК №2",
              "viewedArea": "145/112/20",
              "priceStart": "5800",
              "priceCurrent": "5800",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "57595",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-28 12:43:21.985780",
                  "expiration": "2022-05-28 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-30 07:54:16.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000343",
              "viewedAddress": "Новосибирск Степная 64",
              "viewedArea": "44/31/5",
              "priceStart": "4700",
              "priceCurrent": "4700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "60817",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-21 12:25:07.718464",
                  "expiration": "2022-06-21 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-06-27 08:04:23.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53871000345",
              "viewedAddress": "Кубовинский сельсовет Луговая 53",
              "viewedArea": "43/34/3",
              "priceStart": "700",
              "priceCurrent": 700,
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "64882",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-15 15:53:27.406699",
                  "expiration": "2022-07-15 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-15 17:18:50.000000"
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "53871000348",
              "viewedAddress": "Новосибирск бронная 2/6",
              "viewedArea": "60/40/7",
              "priceStart": "3600",
              "priceCurrent": "3600",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "65296",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-19 13:05:21.197955",
                  "expiration": "2022-07-19 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-19 17:02:58.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000349",
              "viewedAddress": "Новосибирск Чигорина 14/1",
              "viewedArea": "43/16/15",
              "priceStart": "4200",
              "priceCurrent": "4200",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017369635227680096",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274124323",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68144",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-12 11:22:01.309668",
                  "expiration": "2022-08-12 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-12 12:51:18.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000350",
              "viewedAddress": "Новосибирск Коммунстроевская 50",
              "viewedArea": "61/48/7",
              "priceStart": "5250",
              "priceCurrent": 5350,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/2071017954962567547",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274744882",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68366",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-13 12:56:59.422148",
                  "expiration": "2022-08-13 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-13 15:21:58.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53871000351",
              "viewedAddress": "Новосибирск Танкистов 47",
              "viewedArea": "91/71/15",
              "priceStart": "3500",
              "priceCurrent": "3500",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274125688",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "69612",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-23 15:06:46.630539",
                  "expiration": "2022-08-23 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-24 13:53:17.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53871000352",
              "viewedAddress": "Новосибирск Петухова 95/1",
              "viewedArea": "57/43/9",
              "priceStart": "5100",
              "priceCurrent": "5100",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017369635227680120",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274126082",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "70972",
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-02 11:13:02.803310",
                  "expiration": "2022-11-02 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-02 14:16:14.000000"
              },
              "type": "Комната",
              "typeName": "(Ком.)",
              "reqNumber": "53871000353",
              "viewedAddress": "Новосибирск Полтавская 37",
              "viewedArea": "58/47/7",
              "priceStart": "900",
              "priceCurrent": "900",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017369635227680121",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274237196",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "56539001543",
              "viewedAddress": "Новосибирск Титова 253/7",
              "viewedArea": "38/19/9",
              "priceStart": "1890",
              "priceCurrent": "1890",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57836000843",
              "viewedAddress": "Новосибирск Николая Сотникова 16",
              "viewedArea": "33/20/5",
              "priceStart": "2350",
              "priceCurrent": "2350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58352000045",
              "viewedAddress": "Новосибирск Березовая 19",
              "viewedArea": "28/16/4",
              "priceStart": "2450",
              "priceCurrent": "2450",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58480000001",
              "viewedAddress": "Элитный Фламинго 19",
              "viewedArea": "37/26/1",
              "priceStart": "3200",
              "priceCurrent": 3200,
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58480000002",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "60/42/10",
              "priceStart": "2350",
              "priceCurrent": "2350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58480000010",
              "viewedAddress": "Новосибирск Забалуева 98",
              "viewedArea": "38/20/14",
              "priceStart": "3100",
              "priceCurrent": "3100",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1599,
                  "fullName": "Бриль Наталья Борисовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58480000013",
              "viewedAddress": "Новосибирск Забалуева 98",
              "viewedArea": "38/19/13",
              "priceStart": "2780",
              "priceCurrent": "2780",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "956461",
              "viewedAddress": "Новосибирск Пролетарская 271/2",
              "viewedArea": "65/35/12",
              "priceStart": "4200",
              "priceCurrent": "4200",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "779000347",
              "viewedAddress": "Новосибирск Экономическая 1",
              "viewedArea": "35/23/7",
              "priceStart": "1590",
              "priceCurrent": 1590,
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48560",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:21:27.981448",
                  "expiration": "2022-08-26 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-26 15:48:20.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000244",
              "viewedAddress": "Новосибирск Есенина 43",
              "viewedArea": "62/47/6",
              "priceStart": "4000",
              "priceCurrent": "4000",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274123236",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48516",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 15:56:48.585341",
                  "expiration": "2022-06-23 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-06-27 08:07:21.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "1230000272",
              "viewedAddress": "Новошилово Рябиновая 14",
              "viewedArea": "76/46/12",
              "priceStart": "2650",
              "priceCurrent": "2650",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "1230000306",
              "viewedAddress": "Новосибирск Светлановская 36",
              "viewedArea": "60/30/10",
              "priceStart": "5600",
              "priceCurrent": "5600",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48552",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 16:17:34.294050",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000327",
              "viewedAddress": "Новосибирск Ключ-Камышенское плато 10/2",
              "viewedArea": "35/20/4",
              "priceStart": "3050",
              "priceCurrent": "3050",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48534",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:07:15.015550",
                  "expiration": "2022-07-18 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-31 17:40:17.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "1230000333",
              "viewedAddress": "Новосибирск Большая 337",
              "viewedArea": "124/84/23",
              "priceStart": "6050",
              "priceCurrent": "6050",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/270686750",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000336",
              "viewedAddress": "Новосибирск Николая Сотникова 2",
              "viewedArea": "34/17/9",
              "priceStart": "3450",
              "priceCurrent": "3450",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "50329",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-19 16:41:20.908959",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000349",
              "viewedAddress": "Новосибирск Виталия Потылицына 1",
              "viewedArea": "65/40/10",
              "priceStart": "5900",
              "priceCurrent": "5900",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "50321",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-19 16:27:54.514287",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000365",
              "viewedAddress": "Новосибирск Тенистая 27",
              "viewedArea": "35/19/9",
              "priceStart": "2950",
              "priceCurrent": "2950",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270687598",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000366",
              "viewedAddress": "Новосибирск Республиканская 1а",
              "viewedArea": "43/28/6",
              "priceStart": "3100",
              "priceCurrent": "3100",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "1230000367",
              "viewedAddress": "Марусино Васнецова 10",
              "viewedArea": "129/45/25",
              "priceStart": "9300",
              "priceCurrent": "9300",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "52580",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-27 17:04:05.959264",
                  "expiration": "2022-08-30 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-31 17:54:15.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000375",
              "viewedAddress": "Новосибирск Татьяны Снежиной 45/1",
              "viewedArea": "58/34/12",
              "priceStart": "4450",
              "priceCurrent": "4450",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270688516",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "53346",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-31 11:29:19.682047",
                  "expiration": "2022-07-28 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-24 16:27:21.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000376",
              "viewedAddress": "Новосибирск Охотская 88",
              "viewedArea": "39/18/11",
              "priceStart": "4080",
              "priceCurrent": 4100,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274125821",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "55820",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-15 14:07:31.759205",
                  "expiration": "2022-08-24 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-24 16:59:45.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "1230000378",
              "viewedAddress": "Новосибирск Советской Сибири 35",
              "viewedArea": "75/40/10",
              "priceStart": "5150",
              "priceCurrent": "5150",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/270689066",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "56168",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-02-17 16:23:23.334408",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000379",
              "viewedAddress": "Новосибирск Горский 63/1",
              "viewedArea": "51/25/18",
              "priceStart": "5450",
              "priceCurrent": "5450",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "58331",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-03 15:01:36.638450",
                  "expiration": "2022-05-17 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-20 08:43:24.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000379",
              "viewedAddress": "Новосибирск Горский 63/1",
              "viewedArea": "51/25/18",
              "priceStart": "5450",
              "priceCurrent": "5450",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "57678",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-28 15:04:30.873338",
                  "expiration": "2022-08-24 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-24 16:58:14.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000381",
              "viewedAddress": "Новосибирск Николая Островского 120",
              "viewedArea": "34/16/11",
              "priceStart": "5300",
              "priceCurrent": "5300",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270685305",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "60875",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-21 15:28:46.562993",
                  "expiration": "2022-09-28 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-28 17:10:15.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000382",
              "viewedAddress": "Новосибирск Тюленина 16/1",
              "viewedArea": "37/18/10",
              "priceStart": "4300",
              "priceCurrent": "4300",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6144564547149103767",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274123504",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "60910",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-21 17:29:21.660251",
                  "expiration": "2022-08-21 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-03 13:21:42.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "1230000383",
              "viewedAddress": "Новосибирск СНТ Север-1 221",
              "viewedArea": "37/18/10",
              "priceStart": "499",
              "priceCurrent": "499",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274123513",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "65138",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-18 15:58:09.989965",
                  "expiration": "2022-07-18 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-18 18:00:46.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000385",
              "viewedAddress": "Садовый Затонского 106/3",
              "viewedArea": "37/18/10",
              "priceStart": "3650",
              "priceCurrent": "3650",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274124269",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "65325",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-19 13:49:13.591353",
                  "expiration": "2022-07-19 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-19 15:49:36.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000386",
              "viewedAddress": "Чаны Центральная 31",
              "viewedArea": "30/16/6",
              "priceStart": "350",
              "priceCurrent": "350",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274124320",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "65545",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-20 16:07:57.890315",
                  "expiration": "2022-07-20 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-20 17:58:05.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000387",
              "viewedAddress": "Садовый Затонского 106",
              "viewedArea": "37/16/10",
              "priceStart": "3500",
              "priceCurrent": "3500",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274124361",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68049",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-11 15:46:40.801291",
                  "expiration": "2022-08-11 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-11 16:24:29.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000388",
              "viewedAddress": "Новосибирск Бориса Богаткова 194/6",
              "viewedArea": "60/42/7",
              "priceStart": "4980",
              "priceCurrent": "4980",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274125299",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68058",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-05-11 16:00:00.049192",
                  "expiration": null,
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-11 16:01:04.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000388",
              "viewedAddress": "Новосибирск Бориса Богаткова 194/6",
              "viewedArea": "60/42/7",
              "priceStart": "4980",
              "priceCurrent": "4980",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274125299",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "69213",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-19 15:16:04.134473",
                  "expiration": "2022-08-19 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-19 15:54:39.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "1230000389",
              "viewedAddress": "Новосибирск 1-я Искитимская 76",
              "viewedArea": "54/45/8",
              "priceStart": "6150",
              "priceCurrent": "6150",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274125856",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "69791",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-24 15:48:58.693108",
                  "expiration": "2022-08-24 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-24 16:40:39.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000390",
              "viewedAddress": "Новосибирск Индустриальная 3",
              "viewedArea": "44/30/6",
              "priceStart": "4300",
              "priceCurrent": "4300",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274126081",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "70669",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-31 15:30:41.016059",
                  "expiration": "2022-08-30 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-31 16:30:11.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000391",
              "viewedAddress": "Новосибирск Сибирская 17",
              "viewedArea": "60/40/10",
              "priceStart": "8050",
              "priceCurrent": "8050",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274145122",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "70695",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-31 16:39:25.519103",
                  "expiration": "2022-08-30 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-02 16:37:02.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000392",
              "viewedAddress": "Новосибирск Троллейная 35",
              "viewedArea": "76/42/13",
              "priceStart": "7400",
              "priceCurrent": "7400",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274251470",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "72372",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-09 17:22:16.757518",
                  "expiration": "2022-09-09 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-10 08:03:53.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000393",
              "viewedAddress": "Новосибирск Татьяны Снежиной 21/2",
              "viewedArea": "38/25/4",
              "priceStart": "3490",
              "priceCurrent": "3490",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274564624",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "72804",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-14 16:44:29.512123",
                  "expiration": "2022-09-14 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-14 17:51:13.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000394",
              "viewedAddress": "Новосибирск Есенина 45",
              "viewedArea": "31/19/6",
              "priceStart": "3250",
              "priceCurrent": "3250",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274733612",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "73695",
              "assigned_by": {
                  "UID": 1593,
                  "fullName": "Чапская Елена Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-20 15:38:40.118106",
                  "expiration": "2022-09-20 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-20 16:32:33.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1230000395",
              "viewedAddress": "Новосибирск Мирная 10",
              "viewedArea": "41/31/6",
              "priceStart": "3700",
              "priceCurrent": "3700",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274986078",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34100",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 17:17:51.359726",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Комната",
              "typeName": "(Ком.)",
              "reqNumber": "53357000078",
              "viewedAddress": "Новосибирск Ботаническая 35",
              "viewedArea": "79/17/6",
              "priceStart": "600",
              "priceCurrent": "600",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48651",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 17:24:31.938613",
                  "expiration": "2022-09-22 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-21 15:15:21.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53357000098",
              "viewedAddress": "Локти Земельный участок 04.02.5418",
              "viewedArea": "1223.00",
              "priceStart": "1800",
              "priceCurrent": 1800,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274123622",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34103",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:57:52.535596",
                  "expiration": "2022-10-15 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-13 14:57:14.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53357000180",
              "viewedAddress": "Краснообск Краснообск 36",
              "viewedArea": "32/18/6",
              "priceStart": "3500",
              "priceCurrent": "3500",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017365321072284948",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274123288",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "53357000253",
              "viewedAddress": "Новосибирск Кирова 242",
              "viewedArea": "45/21/8",
              "priceStart": "4750",
              "priceCurrent": "4750",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "53357000254",
              "viewedAddress": "Новосибирск Кирова 242",
              "viewedArea": "46/22/8",
              "priceStart": "4750",
              "priceCurrent": "4750",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53357000258",
              "viewedAddress": "Новосибирск Бориса Богаткова 192а",
              "viewedArea": "44/19/12",
              "priceStart": "5000",
              "priceCurrent": "5000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53357000259",
              "viewedAddress": "Новосибирск Бориса Богаткова 192а",
              "viewedArea": "46/31/4",
              "priceStart": "5500",
              "priceCurrent": "5500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34105",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:28:40.183544",
                  "expiration": null,
                  "moderation": "Отклонено",
                  "moderationDate": "2022-04-13 14:56:09.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53357000282",
              "viewedAddress": "Коченево Логовская 8",
              "viewedArea": "42/28/8",
              "priceStart": "1500",
              "priceCurrent": "1500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "53357000284",
              "viewedAddress": "Новосибирск Фрунзе 252стр",
              "viewedArea": "63/37/16",
              "priceStart": "12000",
              "priceCurrent": "12000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53357000285",
              "viewedAddress": "Новосибирск Планетная 17",
              "viewedArea": "65/27/7",
              "priceStart": "1620",
              "priceCurrent": "1620",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53357000288",
              "viewedAddress": "Новосибирск Линейная 33/2",
              "viewedArea": "76/52/7",
              "priceStart": "6480",
              "priceCurrent": "6480",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "49313",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-17 14:04:29.303382",
                  "expiration": "2022-09-22 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-22 15:48:28.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53357000292",
              "viewedAddress": "Кудряшовский сельсовет Русская сказка 17",
              "viewedArea": "12.00",
              "priceStart": "250",
              "priceCurrent": "250",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017365321072285942",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274123320",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53357000293",
              "viewedAddress": "Новосибирск Вертковская 121",
              "viewedArea": "28/19/2",
              "priceStart": "3200",
              "priceCurrent": "3200",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53357000295",
              "viewedAddress": "Новосибирск Зорге 275",
              "viewedArea": "42/24/11",
              "priceStart": "3370",
              "priceCurrent": 4000,
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "47703",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-10 15:13:55.462272",
                  "expiration": "2023-01-18 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-25 11:09:50.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53357000304",
              "viewedAddress": "Новосибирск Чехова 329",
              "viewedArea": "55/34/10",
              "priceStart": "3350",
              "priceCurrent": "3350",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017365321072286626",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/270687695",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48693",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 18:00:19.846800",
                  "expiration": "2022-11-21 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-21 16:40:16.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53357000306",
              "viewedAddress": "Новосибирск Высоцкого 50/2",
              "viewedArea": "38/16/9",
              "priceStart": "3600",
              "priceCurrent": "3600",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017365321072286628",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270687963",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "62312",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-29 15:31:19.526674",
                  "expiration": "2022-09-19 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-14 12:57:38.000000"
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "53357000309",
              "viewedAddress": "Новосибирск Ивана Севастьянова 7",
              "viewedArea": "41/19/11",
              "priceStart": "4500",
              "priceCurrent": 4500,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274123669",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "61483",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-24 18:13:58.715063",
                  "expiration": "2022-09-24 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-21 16:59:30.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53357000310",
              "viewedAddress": "Локти Советская 1891",
              "viewedArea": "99397.00",
              "priceStart": "1950",
              "priceCurrent": 2000,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/2070884216145370132",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274196344",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "62369",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-29 16:54:41.085158",
                  "expiration": "2022-10-04 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-22 09:25:55.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53357000311",
              "viewedAddress": "Балта Школьная 5",
              "viewedArea": "57/35/10",
              "priceStart": "790",
              "priceCurrent": "790",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017365321072286654",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274123873",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68674",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-16 14:33:26.452864",
                  "expiration": "2022-11-16 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-19 17:33:27.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53357000313",
              "viewedAddress": "Новосибирск Зорге 117/1",
              "viewedArea": "32/20/6",
              "priceStart": "3200",
              "priceCurrent": "3200",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017365321072286656",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274125850",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "70472",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-30 15:14:32.373982",
                  "expiration": "2022-11-30 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-30 16:43:52.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53357000314",
              "viewedAddress": "Новосибирск Филатова 12",
              "viewedArea": "45/28/6",
              "priceStart": "3420",
              "priceCurrent": "3420",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017365321072286657",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274145099",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "73002",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-15 16:59:07.197874",
                  "expiration": "2022-12-15 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-15 18:18:11.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53357000315",
              "viewedAddress": "Новосибирск Титова 255/2",
              "viewedArea": "38/19/11",
              "priceStart": "4500",
              "priceCurrent": "4500",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017365321072286658",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274773982",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "73176",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-16 15:06:35.803579",
                  "expiration": "2022-12-16 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-22 16:42:41.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53357000316",
              "viewedAddress": "Новосибирск Фрунзе 252/2",
              "viewedArea": "63/37/8",
              "priceStart": "10000",
              "priceCurrent": "10000",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017365321072286659",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/275027121",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "60430",
              "assigned_by": {
                  "UID": 1503,
                  "fullName": "Цынкер Любовь Александровна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-17 14:41:11.339519",
                  "expiration": "2022-09-17 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-21 15:36:45.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58494000011",
              "viewedAddress": "Решеты Набережная 9",
              "viewedArea": "45/12/3",
              "priceStart": "650",
              "priceCurrent": "650",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017498479462069968",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/271312014",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48189",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-02-13 09:52:15.917967",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "50667000215",
              "viewedAddress": "Новосибирск Петухова 162",
              "viewedArea": "54/30/12",
              "priceStart": "3610",
              "priceCurrent": "3610",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "55341000157",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "61/27/11",
              "priceStart": "2350",
              "priceCurrent": "2350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "50477",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-20 12:54:32.931365",
                  "expiration": "2022-06-13 12:00:00.000000",
                  "moderation": null,
                  "moderationDate": "2022-06-16 09:55:51.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "56178000006",
              "viewedAddress": "Криводановка Зеленая 26",
              "viewedArea": "39/20/12",
              "priceStart": "2900",
              "priceCurrent": "2900",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "57926000006",
              "viewedAddress": "Новосибирск Окинская 8",
              "viewedArea": "35/0/0",
              "priceStart": "1500",
              "priceCurrent": "1500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "58126",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-03-02 15:32:04.958800",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "57926000031",
              "viewedAddress": "Новосибирск Гризодубовой 8",
              "viewedArea": "38/29/8",
              "priceStart": "3280",
              "priceCurrent": "3280",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48237",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 12:15:23.123342",
                  "expiration": "2022-10-03 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-15 09:36:12.000000"
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "57926000040",
              "viewedAddress": "Новосибирск Титова 253/7",
              "viewedArea": "38/14/10",
              "priceStart": "2300",
              "priceCurrent": "2300",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017476113481805179",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "57926000044",
              "viewedAddress": "Новосибирск Титова 253/7",
              "viewedArea": "20/16/1",
              "priceStart": "1390",
              "priceCurrent": "1390",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "57926000048",
              "viewedAddress": "Новосибирск Красных Партизан 2-я 6",
              "viewedArea": "44/36/3",
              "priceStart": "3540",
              "priceCurrent": "3540",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000049",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "40/19/9",
              "priceStart": "1660",
              "priceCurrent": "1660",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48201",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 10:39:48.477881",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000054",
              "viewedAddress": "Новосибирск Петухова 40",
              "viewedArea": "33/18/7",
              "priceStart": "2470",
              "priceCurrent": "2470",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000057",
              "viewedAddress": "Новосибирск Невельского 79",
              "viewedArea": "29/15/5",
              "priceStart": "2000",
              "priceCurrent": "2000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000061",
              "viewedAddress": "Новосибирск Титова 276",
              "viewedArea": "19/16/1",
              "priceStart": "2100",
              "priceCurrent": "2100",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "57926000066",
              "viewedAddress": "Гусиный Брод Сибирская 26",
              "viewedArea": "59/34/9",
              "priceStart": "1840",
              "priceCurrent": "1840",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48234",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 12:09:50.203937",
                  "expiration": "2022-05-16 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-20 08:34:54.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000067",
              "viewedAddress": "Новосибирск Хилокская 1г",
              "viewedArea": "33/17/9",
              "priceStart": "2450",
              "priceCurrent": 2450,
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Комната",
              "typeName": "(Ком.)",
              "reqNumber": "57926000072",
              "viewedAddress": "Новосибирск Халтурина 33",
              "viewedArea": "64/36/7",
              "priceStart": "520",
              "priceCurrent": "520",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "57269",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-25 12:48:45.524868",
                  "expiration": "2022-08-25 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-26 14:03:21.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000077",
              "viewedAddress": "Новосибирск Ленинградская 347а",
              "viewedArea": "21/19/1",
              "priceStart": "2200",
              "priceCurrent": "2200",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017476113481805279",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/271102552",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "59362",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-03-11 12:40:39.975450",
                  "expiration": "2022-06-09 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-25 11:09:44.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000080",
              "viewedAddress": "Новосибирск Ясный берег 25",
              "viewedArea": "35/18/7",
              "priceStart": "5000",
              "priceCurrent": 5000,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274532687",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "59517",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-12 12:19:14.094090",
                  "expiration": "2022-11-10 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-10 17:15:56.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "57926000081",
              "viewedAddress": "Верх-Тула Новая 5",
              "viewedArea": "42/22/8",
              "priceStart": "3600",
              "priceCurrent": "3600",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017476113481805304",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/271160959",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "61398",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-24 14:18:28.887378",
                  "expiration": "2022-09-16 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-16 17:14:51.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000082",
              "viewedAddress": "Новосибирск Титова 255/2",
              "viewedArea": "30/18/3",
              "priceStart": "3300",
              "priceCurrent": "3300",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017476113481805305",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274123627",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "61540",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-25 10:49:33.954793",
                  "expiration": "2022-06-25 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-06-27 08:05:16.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000083",
              "viewedAddress": "Новосибирск Фасадная 25/1",
              "viewedArea": "45/26/6",
              "priceStart": "4100",
              "priceCurrent": "4100",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "62705",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-31 14:27:34.215886",
                  "expiration": "2022-06-29 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-22 09:05:07.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000084",
              "viewedAddress": "Новосибирск Титова 253/4",
              "viewedArea": "30/26/3",
              "priceStart": "3180",
              "priceCurrent": 3180,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274239019",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "64403",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-12 15:11:35.426870",
                  "expiration": "2022-07-12 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-12 16:59:14.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000085",
              "viewedAddress": "Новосибирск бронная 38",
              "viewedArea": "34/18/9",
              "priceStart": "3300",
              "priceCurrent": "3300",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017476113481805308",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/275112659",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "66256",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-04-26 10:22:11.385957",
                  "expiration": "2022-08-24 00:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-12 09:40:50.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000087",
              "viewedAddress": "Новосибирск Титова 16",
              "viewedArea": "44/28/6",
              "priceStart": "4000",
              "priceCurrent": "4000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68138",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-12 11:07:07.467792",
                  "expiration": "2022-10-12 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-12 12:27:06.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000090",
              "viewedAddress": "Кемерово Инициативная 99",
              "viewedArea": "79/60/6",
              "priceStart": "3999",
              "priceCurrent": 3999,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68364",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-13 12:47:06.591246",
                  "expiration": "2022-12-13 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-13 13:33:58.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "57926000091",
              "viewedAddress": "Новосибирск Районная 38",
              "viewedArea": "90/30/20",
              "priceStart": "1650",
              "priceCurrent": 1650,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274239023",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "69214",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-19 15:16:09.171538",
                  "expiration": "2022-11-19 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-19 16:01:09.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000092",
              "viewedAddress": "Новосибирск Титова 97",
              "viewedArea": "39/26/6",
              "priceStart": "3250",
              "priceCurrent": "3250",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "72354",
              "assigned_by": {
                  "UID": 2551,
                  "fullName": "Дегтярёва Елена Николаевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-09 16:19:22.663380",
                  "expiration": "2022-12-09 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-09 17:27:23.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57926000096",
              "viewedAddress": "Новосибирск Спортивная 5",
              "viewedArea": "38/18/9",
              "priceStart": "3500",
              "priceCurrent": "3500",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017476113481805340",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274536700",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48160",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-13 17:13:10.265286",
                  "expiration": "2022-08-24 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-24 13:04:48.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "2379000188",
              "viewedAddress": "Новосибирск Воскресная 37",
              "viewedArea": "40/20/12",
              "priceStart": "3700",
              "priceCurrent": "3700",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270686604",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "2379000190",
              "viewedAddress": "Марусино Шишкина 12",
              "viewedArea": "179/100/15",
              "priceStart": "6990",
              "priceCurrent": "6990",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "2379000200",
              "viewedAddress": "Криводановский сельсовет №5 1281",
              "viewedArea": "50/30/10",
              "priceStart": "430",
              "priceCurrent": "430",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48158",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-13 17:05:49.036018",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "2379000209",
              "viewedAddress": "Новосибирск Фрунзе 252",
              "viewedArea": "43/27/5",
              "priceStart": "7000",
              "priceCurrent": "7000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/275081949",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48622",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 17:04:10.945242",
                  "expiration": "2022-12-30 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-24 12:31:15.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "2379000214",
              "viewedAddress": "Новосибирск Станиславского 36",
              "viewedArea": "71/47/7",
              "priceStart": "5800",
              "priceCurrent": "5800",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270688118",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "49550",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-17 17:06:12.023288",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "2379000216",
              "viewedAddress": "Новосибирск Светлановская 52",
              "viewedArea": "41/16/15",
              "priceStart": "4100",
              "priceCurrent": "4100",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "53556",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-01-31 17:43:55.986834",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "2379000217",
              "viewedAddress": "Жеребцово Береговая 33",
              "viewedArea": "50/25/10",
              "priceStart": "1100",
              "priceCurrent": "1100",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68062",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-11 16:07:24.079346",
                  "expiration": "2022-08-12 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-12 16:09:10.000000"
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "2379000218",
              "viewedAddress": "Новосибирск Высоцкого 139/1",
              "viewedArea": "33/19/4",
              "priceStart": "2850",
              "priceCurrent": "2850",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274125510",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "72244",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-09 11:33:07.364623",
                  "expiration": "2022-09-09 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-09 17:00:19.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "2379000219",
              "viewedAddress": "Новосибирск Котовского 24",
              "viewedArea": "44/32/6",
              "priceStart": "4100",
              "priceCurrent": "4100",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274536698",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "72369",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-09 17:16:00.448929",
                  "expiration": "2022-09-09 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-10 11:33:21.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "2379000220",
              "viewedAddress": "Новосибирск Татьяны Снежиной 41",
              "viewedArea": "42/22/7",
              "priceStart": "4100",
              "priceCurrent": "4100",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274576344",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48606",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:54:34.570382",
                  "expiration": "2022-08-20 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-24 14:09:43.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58494000006",
              "viewedAddress": "Новосибирск Ясный берег 25",
              "viewedArea": "35/18/8",
              "priceStart": "4800",
              "priceCurrent": 4350,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/2075012126228652091",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274125820",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "46130",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2021-12-24 09:39:38.122090",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58494000008",
              "viewedAddress": "Новосибирск Забалуева 51",
              "viewedArea": "54/34/7",
              "priceStart": "3",
              "priceCurrent": "3",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48564",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:25:22.605030",
                  "expiration": "2022-06-27 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-06-28 08:32:50.000000"
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "58494000009",
              "viewedAddress": "Новосибирск Ивана Севастьянова 82",
              "viewedArea": "51/31/5",
              "priceStart": "5200",
              "priceCurrent": "5200",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "50514",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-20 14:52:21.691195",
                  "expiration": "2022-07-20 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-25 16:42:25.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58494000010",
              "viewedAddress": "Новосибирск Забалуева 90",
              "viewedArea": "23/12/3",
              "priceStart": "2350",
              "priceCurrent": 2350,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274125612",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "60579",
              "assigned_by": {
                  "UID": 1594,
                  "fullName": "Дергунова Наталья Валерьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-18 15:53:51.872872",
                  "expiration": "2022-09-21 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-21 15:45:13.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58494000012",
              "viewedAddress": "Новосибирск 1905 года 85",
              "viewedArea": "45/28/7",
              "priceStart": "6500",
              "priceCurrent": "6500",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017498479462069969",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274123512",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 3849,
                  "fullName": "Кралько Светлана Григорьевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "9053165",
              "viewedAddress": "Новосибирск Чехова 111",
              "viewedArea": "40/20/10",
              "priceStart": "3400",
              "priceCurrent": "3400",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68168",
              "assigned_by": {
                  "UID": 3849,
                  "fullName": "Кралько Светлана Григорьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-12 12:04:06.957475",
                  "expiration": "2022-12-31 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-16 13:07:20.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58737000000",
              "viewedAddress": "Прокудское Строительная 36",
              "viewedArea": "91/63/13",
              "priceStart": "3700",
              "priceCurrent": "3700",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017500875722008636",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274125708",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68240",
              "assigned_by": {
                  "UID": 3849,
                  "fullName": "Кралько Светлана Григорьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-12 15:18:29.936494",
                  "expiration": "2022-12-31 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-16 13:05:05.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58737000001",
              "viewedAddress": "Новосибирск Почтовая 41",
              "viewedArea": "83/49/26",
              "priceStart": "3950",
              "priceCurrent": 3950,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274125972",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68701",
              "assigned_by": {
                  "UID": 3849,
                  "fullName": "Кралько Светлана Григорьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-16 15:50:17.809659",
                  "expiration": "2022-12-31 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-17 09:59:56.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58737000002",
              "viewedAddress": "Новосибирск Коминтерна 66",
              "viewedArea": "55/29/26",
              "priceStart": "3300",
              "priceCurrent": "3300",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017500875722008638",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274125746",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "70986",
              "assigned_by": {
                  "UID": 3849,
                  "fullName": "Кралько Светлана Григорьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-02 11:41:21.697249",
                  "expiration": "2022-12-31 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-02 17:36:45.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58737000003",
              "viewedAddress": "Новосибирск Ясный Берег 25",
              "viewedArea": "35/18/9",
              "priceStart": "4500",
              "priceCurrent": "4500",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/275033587",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "73143",
              "assigned_by": {
                  "UID": 3849,
                  "fullName": "Кралько Светлана Григорьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-16 13:45:03.076521",
                  "expiration": "2022-12-01 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-21 17:23:09.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58737000004",
              "viewedAddress": "Новосибирск Громова 16",
              "viewedArea": "45/31/6",
              "priceStart": "4000",
              "priceCurrent": "4000",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/275033589",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "74341",
              "assigned_by": {
                  "UID": 3849,
                  "fullName": "Кралько Светлана Григорьевна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-06-23 18:23:49.670181",
                  "expiration": "2022-09-23 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-28 17:44:56.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58737000006",
              "viewedAddress": "Морской сельсовет Приморский 149",
              "viewedArea": "30/20/8",
              "priceStart": "1650",
              "priceCurrent": 1650,
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68656",
              "assigned_by": {
                  "UID": 3849,
                  "fullName": "Кралько Светлана Григорьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-16 13:57:31.287450",
                  "expiration": null,
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-16 15:23:53.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58740000000",
              "viewedAddress": "Новосибирск Кузьмы Минина 9",
              "viewedArea": "18/8/6",
              "priceStart": "6000",
              "priceCurrent": "6000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68928",
              "assigned_by": {
                  "UID": 3849,
                  "fullName": "Кралько Светлана Григорьевна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-05-18 09:40:59.450579",
                  "expiration": "2022-08-18 00:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-18 12:28:23.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58740000002",
              "viewedAddress": "Новосибирск Дмитрия Шмонина 10/2",
              "viewedArea": "35/19/8",
              "priceStart": "3500",
              "priceCurrent": "3500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68982",
              "assigned_by": {
                  "UID": 3849,
                  "fullName": "Кралько Светлана Григорьевна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-05-18 12:08:42.449968",
                  "expiration": "2022-08-18 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-18 13:38:26.000000"
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "58740000003",
              "viewedAddress": "Новосибирск бронная 37/2с",
              "viewedArea": "39/25/8",
              "priceStart": "3300",
              "priceCurrent": "3300",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017500897022096983",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48231",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 12:04:21.109185",
                  "expiration": null,
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-06 18:18:20.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53357000269",
              "viewedAddress": "Новосибирск Горский 3",
              "viewedArea": "54/32/9",
              "priceStart": "4900",
              "priceCurrent": "4900",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53446010944",
              "viewedAddress": "Новосибирск Станционная 48",
              "viewedArea": "61/1/1",
              "priceStart": "2600",
              "priceCurrent": "2600",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Комната",
              "typeName": "(Ком.)",
              "reqNumber": "53554000082",
              "viewedAddress": "Новосибирск Халтурина 43",
              "viewedArea": "19/19/9",
              "priceStart": "780",
              "priceCurrent": "780",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Комната",
              "typeName": "(Ком.)",
              "reqNumber": "53554000201",
              "viewedAddress": "Новосибирск Станционная 50",
              "viewedArea": "18/13/4",
              "priceStart": "600",
              "priceCurrent": "600",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000207",
              "viewedAddress": "Новосибирск Невельского 61",
              "viewedArea": "60/43/7",
              "priceStart": "2790",
              "priceCurrent": "2790",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000214",
              "viewedAddress": "Новосибирск Троллейная 12",
              "viewedArea": "31/16/4",
              "priceStart": "2350",
              "priceCurrent": "2350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34071",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-28 10:21:30.457427",
                  "expiration": "2022-09-11 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-09 13:25:19.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000285",
              "viewedAddress": "Новосибирск микрорайон Горский 67",
              "viewedArea": "42/22/11",
              "priceStart": "4800",
              "priceCurrent": 4800,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/2070937012851826232",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/275011632",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000290",
              "viewedAddress": "Новосибирск Забалуева 92",
              "viewedArea": "24/16/4",
              "priceStart": "2220",
              "priceCurrent": "2220",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48283",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 13:12:55.694740",
                  "expiration": "2022-09-20 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-20 15:05:04.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53554000305",
              "viewedAddress": "Толмачево Ватутина 9",
              "viewedArea": "67/37/9",
              "priceStart": "6100",
              "priceCurrent": 6150,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/2070937012851848335",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274698856",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48475",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 15:30:15.477524",
                  "expiration": "2022-12-28 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-25 14:21:04.000000"
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "53554000315",
              "viewedAddress": "Новосибирск Немировича-Данченко 145",
              "viewedArea": "42/16/16",
              "priceStart": "5500",
              "priceCurrent": 5500,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/2070937012851849296",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274125379",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48466",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 15:22:41.165142",
                  "expiration": "2022-08-13 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-25 15:11:49.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53554000316",
              "viewedAddress": "Каменка Близкий микрорайон 783",
              "viewedArea": "115/74/28",
              "priceStart": "8460",
              "priceCurrent": 8500,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/2070937012851849328",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274124818",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "53527",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-31 16:47:20.556931",
                  "expiration": "2022-08-20 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-23 14:44:50.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000317",
              "viewedAddress": "Новосибирск Виктора Уса 7",
              "viewedArea": "20/14/2",
              "priceStart": "2199",
              "priceCurrent": 2199,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "57065",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-24 15:57:07.677912",
                  "expiration": "2022-08-25 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-26 14:06:05.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53554000322",
              "viewedAddress": "Лепокурово Центральная 29",
              "viewedArea": "102/60/12",
              "priceStart": "480",
              "priceCurrent": "480",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/275223990",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "60464",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-03-17 17:45:01.978095",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53554000325",
              "viewedAddress": "Новосибирск Мира 73",
              "viewedArea": "40/20/5",
              "priceStart": "1000",
              "priceCurrent": "1000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "60915",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-21 18:22:13.500087",
                  "expiration": "2022-06-21 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-06-27 08:04:39.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000327",
              "viewedAddress": "Новосибирск Петровского 7",
              "viewedArea": "39/18/8",
              "priceStart": "2800",
              "priceCurrent": "2800",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "62111",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-28 16:36:53.426464",
                  "expiration": "2022-08-28 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-21 17:24:44.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53554000328",
              "viewedAddress": "Новосибирск Сталинградской Битвы 15",
              "viewedArea": "271/150/40",
              "priceStart": "5500",
              "priceCurrent": 5500,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274532666",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "62537",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-03-30 16:31:15.946614",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000329",
              "viewedAddress": "Новосибирск Бетонная 13",
              "viewedArea": "55/34/7",
              "priceStart": "4050",
              "priceCurrent": "4050",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "64864",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-15 14:28:50.565803",
                  "expiration": "2022-08-10 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-15 17:17:22.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53554000330",
              "viewedAddress": "Светлый СНТ Онега 11",
              "viewedArea": "12.00",
              "priceStart": "290",
              "priceCurrent": "290",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017367024191850554",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274124230",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "66353",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-26 13:29:09.901250",
                  "expiration": "2022-07-26 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-28 11:00:08.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000331",
              "viewedAddress": "Новосибирск Титова 232/3",
              "viewedArea": "26/17/3",
              "priceStart": "3600",
              "priceCurrent": "3600",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017367024191850555",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274124621",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "66366",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-26 13:57:34.711500",
                  "expiration": "2022-07-26 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-28 15:53:36.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000331",
              "viewedAddress": "Новосибирск Титова 232/3",
              "viewedArea": "26/17/3",
              "priceStart": "3600",
              "priceCurrent": "3600",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017367024191850555",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274124621",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "66399",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-26 15:35:22.651516",
                  "expiration": "2022-07-26 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-28 16:36:54.000000"
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "53554000332",
              "viewedAddress": "Новосибирск Титова 82",
              "viewedArea": "83/52/14",
              "priceStart": "8200",
              "priceCurrent": "8200",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017367024191850556",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274124634",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "67975",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-11 13:01:50.097079",
                  "expiration": "2022-08-11 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-12 13:57:14.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000334",
              "viewedAddress": "Новосибирск Плахотного 72",
              "viewedArea": "32/17/7",
              "priceStart": "3300",
              "priceCurrent": 3300,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274125481",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "67975",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-11 13:01:50.097079",
                  "expiration": "2022-08-11 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-12 13:57:14.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000334",
              "viewedAddress": "Новосибирск Плахотного 72",
              "viewedArea": "32/17/7",
              "priceStart": "3300",
              "priceCurrent": 3300,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274698859",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68029",
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-11 14:57:15.670297",
                  "expiration": "2022-08-11 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-11 15:20:29.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000335",
              "viewedAddress": "Новосибирск Фасадная 21",
              "viewedArea": "44/32/6",
              "priceStart": "3500",
              "priceCurrent": 3500,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274395382",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "56106000059",
              "viewedAddress": "Каменка Олимпийской Славы микрорайон 16б",
              "viewedArea": "20/10/3",
              "priceStart": "1280",
              "priceCurrent": "1280",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "56106000117",
              "viewedAddress": "Марусино Тропинина 2",
              "viewedArea": "9.00",
              "priceStart": "1550",
              "priceCurrent": "1550",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "56195000260",
              "viewedAddress": "Новосибирск Титова 253/5",
              "viewedArea": "42/18/12",
              "priceStart": "2860",
              "priceCurrent": "2860",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "56700001826",
              "viewedAddress": "Новосибирск Горский 67",
              "viewedArea": "84/47/10",
              "priceStart": "6600",
              "priceCurrent": "6600",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 185,
                  "fullName": "Крижановская Татьяна Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57936000193",
              "viewedAddress": "Новосибирск Титова 257",
              "viewedArea": "33/20/9",
              "priceStart": "2870",
              "priceCurrent": "2870",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "57635",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-28 13:50:27.180709",
                  "expiration": "2022-08-24 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-24 12:58:16.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53554000323",
              "viewedAddress": "Новосибирск Титова 257/2",
              "viewedArea": "33/17/9",
              "priceStart": "3550",
              "priceCurrent": "3550",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017367024191850526",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270716924",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48559",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 16:19:47.696521",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54172000022",
              "viewedAddress": "Новосибирск Юргинская 1-я 27",
              "viewedArea": "76/0/15",
              "priceStart": "3650",
              "priceCurrent": "3650",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34075",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-02-28 10:23:20.907363",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54172000230",
              "viewedAddress": "Новосибирск Рионская 27",
              "viewedArea": "86/61/11",
              "priceStart": "6300",
              "priceCurrent": 6300,
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34078",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-28 10:24:00.847297",
                  "expiration": "2022-05-17 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-24 13:07:52.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54172000235",
              "viewedAddress": "Ленинское Андреева 82",
              "viewedArea": "200/150/20",
              "priceStart": "3780",
              "priceCurrent": "3780",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54172000238",
              "viewedAddress": "Новосибирск Олекминская 10",
              "viewedArea": "62/35/7",
              "priceStart": "5490",
              "priceCurrent": "5490",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54172000243",
              "viewedAddress": "Кудряшовский сельсовет Ягодная 27",
              "viewedArea": "45/20/9",
              "priceStart": "700",
              "priceCurrent": "700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54172000244",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "67/28/11",
              "priceStart": "2470",
              "priceCurrent": "2470",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48571",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:31:40.493233",
                  "expiration": "2022-09-03 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-22 16:48:53.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54172000248",
              "viewedAddress": "Рыбачий улица 8 402",
              "viewedArea": "82/50/6",
              "priceStart": "3000",
              "priceCurrent": "3000",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017390105500081399",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/270687241",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48578",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:37:58.071204",
                  "expiration": "2022-08-25 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-26 12:33:22.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54172000255",
              "viewedAddress": "Новосибирск Заречная 41",
              "viewedArea": "41/15/13",
              "priceStart": "4200",
              "priceCurrent": "4200",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017390105500081427",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270687725",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48600",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:51:55.045622",
                  "expiration": "2022-06-14 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-06-16 07:57:07.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "54172000259",
              "viewedAddress": "Клевер Алферова 88",
              "viewedArea": "6.75",
              "priceStart": "580",
              "priceCurrent": "580",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "50124",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-19 11:29:12.375723",
                  "expiration": "2022-04-19 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-20 08:37:38.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54172000261",
              "viewedAddress": "Новосибирск Танкистов 11",
              "viewedArea": "62/44/7",
              "priceStart": "4400",
              "priceCurrent": "4400",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "52878",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-28 16:58:13.711724",
                  "expiration": "2022-04-28 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-20 08:39:26.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54172000262",
              "viewedAddress": "Новосибирск Янтарная 38",
              "viewedArea": "137/45/20",
              "priceStart": "5500",
              "priceCurrent": "5500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54172000263",
              "viewedAddress": "Новосибирск Ленина 30/1",
              "viewedArea": "56/43/5",
              "priceStart": "6999",
              "priceCurrent": "6999",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017390105500081456",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270688789",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "56191",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-17 18:43:27.111381",
                  "expiration": "2022-09-03 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-03 13:56:47.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54172000264",
              "viewedAddress": "Новосибирск Амурская 65/1",
              "viewedArea": "42/26/7",
              "priceStart": "3300",
              "priceCurrent": "3300",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017390105500081457",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270689161",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "59796",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-14 14:14:19.489734",
                  "expiration": "2022-09-15 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-15 17:12:27.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54172000267",
              "viewedAddress": "Новосибирск Южная 40/3",
              "viewedArea": "31/17/6",
              "priceStart": "2800",
              "priceCurrent": "2800",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017390105500081460",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/271279415",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "62354",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-03-29 16:18:54.985981",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "54172000269",
              "viewedAddress": "Ярковский сельсовет Рябиновая 14",
              "viewedArea": "10.00",
              "priceStart": "350",
              "priceCurrent": "350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "62478",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-30 14:01:11.164416",
                  "expiration": "2022-09-12 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-12 15:29:16.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "54172000270",
              "viewedAddress": "Морской сельсовет Металлург 90",
              "viewedArea": "6.00",
              "priceStart": "400",
              "priceCurrent": "400",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017390105500081484",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274124117",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "64546",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-04-13 13:36:51.802315",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54172000271",
              "viewedAddress": "Новосибирск Степная 41",
              "viewedArea": "45/28/6",
              "priceStart": "4100",
              "priceCurrent": "4100",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017390105500081485",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274124125",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "65158",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-18 16:35:05.163433",
                  "expiration": "2022-08-19 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-20 10:06:00.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54172000272",
              "viewedAddress": "Улыбино Братьев Весниных 5",
              "viewedArea": "30/20/8",
              "priceStart": "700",
              "priceCurrent": "700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "66327",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-26 12:47:36.229428",
                  "expiration": "2022-07-26 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-29 09:54:48.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54172000273",
              "viewedAddress": "Новосибирск Спортивная 17",
              "viewedArea": "37/16/10",
              "priceStart": "3800",
              "priceCurrent": "3800",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017390105500081487",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274124702",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68023",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-11 14:36:39.124672",
                  "expiration": "2022-08-13 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-13 17:17:43.000000"
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "54172000275",
              "viewedAddress": "Новосибирск Забалуева 84/8",
              "viewedArea": "27/15/5",
              "priceStart": "3000",
              "priceCurrent": "3000",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017390105500081489",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "69138",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-19 09:46:02.034252",
                  "expiration": "2022-08-19 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-19 12:26:36.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54172000276",
              "viewedAddress": "Новосибирск Ленинградская 143",
              "viewedArea": "60/40/6",
              "priceStart": "5100",
              "priceCurrent": "5100",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017390105500081490",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274125837",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "71274",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-03 14:04:18.587378",
                  "expiration": "2022-09-03 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-03 14:49:37.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54172000277",
              "viewedAddress": "Новосибирск Николая Грицюка 1/4",
              "viewedArea": "21/18/5",
              "priceStart": "1800",
              "priceCurrent": "1800",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017390105500081491",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274303121",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "72639",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-14 11:04:57.930278",
                  "expiration": "2022-09-14 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-14 12:12:45.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54172000278",
              "viewedAddress": "Новосибирск Степная 63",
              "viewedArea": "60/40/7",
              "priceStart": "4600",
              "priceCurrent": "4600",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017390105500081492",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274773976",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "72666",
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-14 11:46:56.413350",
                  "expiration": null,
                  "moderation": "Отклонено",
                  "moderationDate": "2022-06-16 16:53:58.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "54172000279",
              "viewedAddress": "Колывань Северный объезд - СНТ  337",
              "viewedArea": "12.00",
              "priceStart": "300",
              "priceCurrent": "300",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1658,
                  "fullName": "Андрухова Евгения Викторовна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "56330001076",
              "viewedAddress": "Краснообск 6-й микрорайон 51",
              "viewedArea": "129/1/1",
              "priceStart": "8000",
              "priceCurrent": "8000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "44048",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 12:55:58.704904",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58514000001",
              "viewedAddress": "СНТ Юбилей Южная 344",
              "viewedArea": "20/15/3",
              "priceStart": "550",
              "priceCurrent": "550",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "46462",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 12:52:43.745077",
                  "expiration": "2022-05-14 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-13 15:26:24.000000"
              },
              "type": "Комната",
              "typeName": "(Ком.)",
              "reqNumber": "58514000007",
              "viewedAddress": "Новосибирск Петропавловская 1",
              "viewedArea": "23/22/0",
              "priceStart": "1500",
              "priceCurrent": "1500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "46469",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 17:07:26.092505",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58514000009",
              "viewedAddress": "Дружный Озерная 11",
              "viewedArea": "39/30/6",
              "priceStart": "550",
              "priceCurrent": "550",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "51678",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-25 14:11:34.213403",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000010",
              "viewedAddress": "Новосибирск Титова 11",
              "viewedArea": "29/18/6",
              "priceStart": "3100",
              "priceCurrent": "3100",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "44729",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 17:08:30.583323",
                  "expiration": "2022-11-26 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-20 11:38:06.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000013",
              "viewedAddress": "Новосибирск Серафимовича 3",
              "viewedArea": "36/16/6",
              "priceStart": "2500",
              "priceCurrent": "2500",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017499112252194523",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270687740",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "46154",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 17:09:23.182668",
                  "expiration": "2022-12-31 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-07 16:13:25.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000014",
              "viewedAddress": "Новосибирск Якушева 39",
              "viewedArea": "32/21/5",
              "priceStart": "3700",
              "priceCurrent": "3700",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017499112252194524",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270687741",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48331",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 13:43:22.867468",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58514000017",
              "viewedAddress": "Толмачевский сельсовет Зелёная 196",
              "viewedArea": "50/40/9",
              "priceStart": "500",
              "priceCurrent": "500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48601",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-01-14 16:52:16.616531",
                  "expiration": "2022-07-28 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-28 17:53:00.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000018",
              "viewedAddress": "Новосибирск Римского-Корсакова 1-й 3",
              "viewedArea": "30/20/6",
              "priceStart": "4800",
              "priceCurrent": "4800",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017499112252194528",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274123381",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48250",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 12:32:56.425599",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000019",
              "viewedAddress": "Новосибирск Якушева 39",
              "viewedArea": "33/24/5",
              "priceStart": "4000",
              "priceCurrent": "4000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48618",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-01-14 17:01:32.168763",
                  "expiration": null,
                  "moderation": "Отклонено",
                  "moderationDate": "2022-06-28 11:31:46.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000020",
              "viewedAddress": "Новосибирск Костычева 38",
              "viewedArea": "29/20/5",
              "priceStart": "3500",
              "priceCurrent": "3500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48629",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 17:11:49.208209",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000022",
              "viewedAddress": "Новосибирск Серафимовича 13",
              "viewedArea": "52/41/6",
              "priceStart": "3300",
              "priceCurrent": 3300,
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48645",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 17:18:11.070313",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58514000024",
              "viewedAddress": "СНТ Юбилей Южная 721",
              "viewedArea": "65/43/9",
              "priceStart": "2700",
              "priceCurrent": "2700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "44726",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-03 13:56:30.107460",
                  "expiration": "2022-06-23 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-28 12:48:05.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000025",
              "viewedAddress": "Новосибирск Серафимовича 3",
              "viewedArea": "51/36/7",
              "priceStart": "3650",
              "priceCurrent": "3650",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017499112252194556",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270688058",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48653",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-01-14 17:26:14.360795",
                  "expiration": "2022-07-28 00:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-04-28 17:42:33.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000026",
              "viewedAddress": "Новосибирск Котовского 48",
              "viewedArea": "31/17/5",
              "priceStart": "4200",
              "priceCurrent": "4200",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48385",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 14:20:56.504884",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000027",
              "viewedAddress": "Новосибирск Серафимовича 8",
              "viewedArea": "58/45/7",
              "priceStart": "8500",
              "priceCurrent": "8500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48658",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-01-14 17:31:31.835634",
                  "expiration": "2022-04-22 16:56:11.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-05 14:31:55.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000028",
              "viewedAddress": "Новосибирск Котовского 48",
              "viewedArea": "62/43/6",
              "priceStart": "5300",
              "priceCurrent": "5300",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017499112252194559",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270688088",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "52947",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-29 11:44:28.799852",
                  "expiration": "2022-07-29 12:00:00.000000",
                  "moderation": null,
                  "moderationDate": "2022-06-28 09:39:38.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000033",
              "viewedAddress": "Новосибирск Солидарности 99а",
              "viewedArea": "59/39/7",
              "priceStart": "3800",
              "priceCurrent": "3800",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017499112252194585",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270688756",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "59863",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-03-14 16:42:01.765959",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58514000034",
              "viewedAddress": "Толмачевский сельсовет Луговая 637",
              "viewedArea": "48/36/6",
              "priceStart": "750000",
              "priceCurrent": "750000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "60568",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-18 14:41:45.968545",
                  "expiration": "2022-09-01 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-21 15:44:53.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000035",
              "viewedAddress": "Новосибирск Виталия Потылицына 13",
              "viewedArea": "41/20/11",
              "priceStart": "3500",
              "priceCurrent": "3500",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017499112252194587",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274123503",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "62041",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-28 13:47:37.870653",
                  "expiration": "2022-09-01 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-21 17:19:57.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58514000036",
              "viewedAddress": "Толмачевский сельсовет Светлая 496",
              "viewedArea": "50/40/9",
              "priceStart": "1450",
              "priceCurrent": "1450",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017499112252194588",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274123661",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "66770",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-28 14:15:48.378853",
                  "expiration": "2022-10-28 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-28 17:26:59.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000037",
              "viewedAddress": "Новосибирск Покатная 55",
              "viewedArea": "36/15/9",
              "priceStart": "4700",
              "priceCurrent": "4700",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017499112252194589",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274124645",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "66818",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-28 16:23:46.493081",
                  "expiration": null,
                  "moderation": "Отклонено",
                  "moderationDate": "2022-04-28 16:43:56.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58514000038",
              "viewedAddress": "Новосибирск Немировича-Данченко 4",
              "viewedArea": "45/26/6",
              "priceStart": "4000",
              "priceCurrent": "4000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "72222",
              "assigned_by": {
                  "UID": 3379,
                  "fullName": "Шейн Яна Юрьевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-09 10:28:08.534507",
                  "expiration": "2022-12-09 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-09 14:26:12.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58514000039",
              "viewedAddress": "Толмачевский сельсовет Светлая 414",
              "viewedArea": "42/35/6",
              "priceStart": "1300",
              "priceCurrent": "1300",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017499112252194591",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274532683",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000135",
              "viewedAddress": "Криводановка Микрорайон 10",
              "viewedArea": "44/30/5",
              "priceStart": "1650",
              "priceCurrent": "1650",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48195",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 10:50:44.837718",
                  "expiration": "2022-08-14 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-21 16:33:36.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000157",
              "viewedAddress": "Новосибирск Чемская 12",
              "viewedArea": "59/40/7",
              "priceStart": "4000",
              "priceCurrent": "4000",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/275011633",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000160",
              "viewedAddress": "Криводановка Микрорайон 8б",
              "viewedArea": "19/10/1",
              "priceStart": "850",
              "priceCurrent": "850",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "57134",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-24 17:21:23.780649",
                  "expiration": "2022-12-25 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-25 14:37:34.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000190",
              "viewedAddress": "Новосибирск Спортивная 23",
              "viewedArea": "37/18/8",
              "priceStart": "3500",
              "priceCurrent": 3500,
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274772558",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "50667000192",
              "viewedAddress": "Новосибирск СНТ Печатник 108а",
              "viewedArea": "846.00",
              "priceStart": "340",
              "priceCurrent": "340",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48197",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-13 10:06:05.800265",
                  "expiration": "2022-04-14 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-20 08:28:06.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "50667000194",
              "viewedAddress": "Обь Октябрьская 2/2",
              "viewedArea": "241/150/25",
              "priceStart": "11200",
              "priceCurrent": "11200",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34093",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-28 10:27:48.218028",
                  "expiration": "2022-05-17 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-20 08:29:20.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000199",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "84/47/13",
              "priceStart": "3200",
              "priceCurrent": 3250,
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34096",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-28 10:28:29.073745",
                  "expiration": "2023-06-06 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-06 17:50:30.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "50667000203",
              "viewedAddress": "Новосибирск Больничный 14а",
              "viewedArea": "47/30/6",
              "priceStart": "2380",
              "priceCurrent": "2380",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017288588391530085",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274772559",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48198",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-13 10:09:05.910701",
                  "expiration": "2022-06-07 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-06-06 16:34:36.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "50667000203",
              "viewedAddress": "Новосибирск Больничный 14а",
              "viewedArea": "47/30/6",
              "priceStart": "2380",
              "priceCurrent": "2380",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017288588391530085",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274772559",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "50667000213",
              "viewedAddress": "Тулинский Садовая 12а",
              "viewedArea": "36/16/4",
              "priceStart": "550",
              "priceCurrent": "550",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48182",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-02-13 09:44:20.594485",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000226",
              "viewedAddress": "Бердск Бердский санаторий 48",
              "viewedArea": "47/22/12",
              "priceStart": "4840",
              "priceCurrent": "4840",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "53351",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-31 11:36:00.736689",
                  "expiration": "2022-12-30 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-20 11:15:06.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000229",
              "viewedAddress": "Новосибирск Владимировская 14",
              "viewedArea": "45/33/6",
              "priceStart": "3930",
              "priceCurrent": "3930",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "54719",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-07 13:00:22.096834",
                  "expiration": "2023-02-07 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-26 10:59:57.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000230",
              "viewedAddress": "Новосибирск Зорге 267",
              "viewedArea": "61/23/7",
              "priceStart": "4400",
              "priceCurrent": "4400",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017288588391530175",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274772564",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "56493",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-24 11:38:42.750731",
                  "expiration": "2022-08-24 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-26 13:15:34.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000231",
              "viewedAddress": "Новосибирск Петухова 104А",
              "viewedArea": "73/30/25",
              "priceStart": "9000",
              "priceCurrent": "9000",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017288588391530176",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274772566",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "57112",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-24 16:39:09.224314",
                  "expiration": "2023-02-24 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-26 13:45:06.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "50667000232",
              "viewedAddress": "Эко-городок Центральная 59",
              "viewedArea": "11.00",
              "priceStart": "170",
              "priceCurrent": "170",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017288588391530177",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274772567",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "67998",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-11 13:40:22.585565",
                  "expiration": "2022-08-11 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-11 14:27:54.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000234",
              "viewedAddress": "Новосибирск Колхидская 6",
              "viewedArea": "36/12/17",
              "priceStart": "3800",
              "priceCurrent": "3800",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274772615",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "70218",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-27 12:57:02.581515",
                  "expiration": "2023-05-27 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-27 14:56:44.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000235",
              "viewedAddress": "Красный Яр Красный Яр 23",
              "viewedArea": "45/32/6",
              "priceStart": "2250",
              "priceCurrent": "2250",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017288588391530180",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274772622",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "73312",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-17 11:37:22.782627",
                  "expiration": "2023-06-17 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-17 12:42:07.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000237",
              "viewedAddress": "Новосибирск Мичурина 37а",
              "viewedArea": "44/31/6",
              "priceStart": "5000",
              "priceCurrent": "5000",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017288588391530182",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/275011627",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "53680000118",
              "viewedAddress": "Новосибирск Петухова 150",
              "viewedArea": "43/18/13",
              "priceStart": "2650",
              "priceCurrent": "2650",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "66893",
              "assigned_by": {
                  "UID": 1595,
                  "fullName": "Сорокина Ирина Владимировна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-29 11:12:25.864008",
                  "expiration": "2022-08-16 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-16 17:25:20.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "57926000089",
              "viewedAddress": "Новосибирск 19-я 329",
              "viewedArea": "43/30/6",
              "priceStart": "1500",
              "priceCurrent": "1500",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017476113481805312",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274772618",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2015,
                  "fullName": "Тадевосян Гайк Андраникович"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57412000015",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "61/38/1",
              "priceStart": "5000",
              "priceCurrent": "5000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2015,
                  "fullName": "Тадевосян Гайк Андраникович"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57412000016",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "68/38/1",
              "priceStart": "5600",
              "priceCurrent": "5600",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2015,
                  "fullName": "Тадевосян Гайк Андраникович"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Гараж",
              "typeName": "(Г.)",
              "reqNumber": "58254000012",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "14/0/0",
              "priceStart": "650050",
              "priceCurrent": "650050",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2015,
                  "fullName": "Тадевосян Гайк Андраникович"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Гараж",
              "typeName": "(Г.)",
              "reqNumber": "58254000016",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "14/0/0",
              "priceStart": "650350",
              "priceCurrent": "650350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2015,
                  "fullName": "Тадевосян Гайк Андраникович"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Гараж",
              "typeName": "(Г.)",
              "reqNumber": "58254000021",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "14/0/0",
              "priceStart": "618500",
              "priceCurrent": "618500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2015,
                  "fullName": "Тадевосян Гайк Андраникович"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Гараж",
              "typeName": "(Г.)",
              "reqNumber": "58254000024",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "17/0/0",
              "priceStart": "700000",
              "priceCurrent": "700000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2015,
                  "fullName": "Тадевосян Гайк Андраникович"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Гараж",
              "typeName": "(Г.)",
              "reqNumber": "58254000038",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "27/0/0",
              "priceStart": "740600",
              "priceCurrent": "740600",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2015,
                  "fullName": "Тадевосян Гайк Андраникович"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Гараж",
              "typeName": "(Г.)",
              "reqNumber": "58254000040",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "13/0/0",
              "priceStart": "777",
              "priceCurrent": "777",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2015,
                  "fullName": "Тадевосян Гайк Андраникович"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Гараж",
              "typeName": "(Г.)",
              "reqNumber": "58254000047",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "14/0/0",
              "priceStart": "666",
              "priceCurrent": "666",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2015,
                  "fullName": "Тадевосян Гайк Андраникович"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Гараж",
              "typeName": "(Г.)",
              "reqNumber": "58254000054",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "27/0/0",
              "priceStart": "780000",
              "priceCurrent": "780000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2015,
                  "fullName": "Тадевосян Гайк Андраникович"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58254000066",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "35/19/7",
              "priceStart": "3450",
              "priceCurrent": "3450",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 54,
                  "fullName": "Винник Наталья Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "264000078",
              "viewedAddress": "Новосибирск Зорге 98",
              "viewedArea": "37/20/1",
              "priceStart": "3000",
              "priceCurrent": "3000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 54,
                  "fullName": "Винник Наталья Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "56700002371",
              "viewedAddress": "Новосибирск Титова 253/7",
              "viewedArea": "43/17/9",
              "priceStart": "2350",
              "priceCurrent": "2350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 54,
                  "fullName": "Винник Наталья Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "57847000077",
              "viewedAddress": "Новосибирск Титова 253",
              "viewedArea": "24/20/1",
              "priceStart": "1300",
              "priceCurrent": "1300",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 54,
                  "fullName": "Винник Наталья Александровна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "57936000254",
              "viewedAddress": "Новосибирск Титова 253",
              "viewedArea": "38/15/10",
              "priceStart": "1930",
              "priceCurrent": "1930",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "952492",
              "viewedAddress": "Октябрьский Дачная *",
              "viewedArea": "157/115/15",
              "priceStart": "3600",
              "priceCurrent": "3600",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34126",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-19 16:32:10.312644",
                  "expiration": "2022-12-30 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-20 15:26:04.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "9014022",
              "viewedAddress": "Кудряшовский Октябрьская 12",
              "viewedArea": "58/39/7",
              "priceStart": "3700",
              "priceCurrent": "3700",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "1440001552",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "70/35/11",
              "priceStart": "2405",
              "priceCurrent": "2405",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "1496000278",
              "viewedAddress": "Новосибирск Вишневая 8",
              "viewedArea": "400/200/18",
              "priceStart": "21900",
              "priceCurrent": "21900",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "50667000210",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "62/28/9",
              "priceStart": "2500",
              "priceCurrent": "2500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "51803001239",
              "viewedAddress": "Криводановка Зеленая 214",
              "viewedArea": "46/15/15",
              "priceStart": "1466",
              "priceCurrent": "1466",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "51803003625",
              "viewedAddress": "Куйбышев 8-й 9",
              "viewedArea": "43/34/6",
              "priceStart": "1400",
              "priceCurrent": "1400",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "52500003131",
              "viewedAddress": "Чернаково Приморская 5",
              "viewedArea": "75/0/0",
              "priceStart": "2000",
              "priceCurrent": "2000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "52890000240",
              "viewedAddress": "Марусино Первомайский 4",
              "viewedArea": "42/22/7",
              "priceStart": "2500",
              "priceCurrent": "2500",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53388002482",
              "viewedAddress": "Рыбачий Ветеранов 1",
              "viewedArea": "40/0/0",
              "priceStart": "700",
              "priceCurrent": "700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53388002697",
              "viewedAddress": "Рыбачий Ветеранов 1",
              "viewedArea": "9.00",
              "priceStart": "300",
              "priceCurrent": "300",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53388002854",
              "viewedAddress": "Мошково Березовая 1",
              "viewedArea": "10.00",
              "priceStart": "750",
              "priceCurrent": "750",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "53446005145",
              "viewedAddress": "Ордынское Центральная *",
              "viewedArea": "7.00",
              "priceStart": "430",
              "priceCurrent": "430",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "53446005707",
              "viewedAddress": "Новосибирск Тульская *",
              "viewedArea": "20/0/0",
              "priceStart": "950",
              "priceCurrent": "950",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54259005982",
              "viewedAddress": "Краснообск 2-й 1",
              "viewedArea": "240/0/0",
              "priceStart": "6000",
              "priceCurrent": "6000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54737000113",
              "viewedAddress": "Новосибирск Сибиряков-Гвардейцев 44/7",
              "viewedArea": "43/16/10",
              "priceStart": "3150",
              "priceCurrent": "3150",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48637",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 17:14:21.670238",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54737000138",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "59/28/10",
              "priceStart": "2400",
              "priceCurrent": "2400",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54889000036",
              "viewedAddress": "Колывань Приходская 78",
              "viewedArea": "42/25/9",
              "priceStart": "550",
              "priceCurrent": "550",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54889000048",
              "viewedAddress": "Новосибирск Сиреневая 19",
              "viewedArea": "30/15/6",
              "priceStart": "380",
              "priceCurrent": "380",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54889000050",
              "viewedAddress": "Новосибирск Балластный 1-й 1",
              "viewedArea": "61/30/9",
              "priceStart": "3730",
              "priceCurrent": "3730",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54889000052",
              "viewedAddress": "Пролетарский Ширяева 13",
              "viewedArea": "43/25/8",
              "priceStart": "450",
              "priceCurrent": "450",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54889000071",
              "viewedAddress": "Новосибирск Тулинское заречье 127",
              "viewedArea": "150/90/10",
              "priceStart": "3900",
              "priceCurrent": "3900",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "54889000072",
              "viewedAddress": "Ордынское Революции 74",
              "viewedArea": "63/50/7",
              "priceStart": "1990",
              "priceCurrent": "1990",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54889000076",
              "viewedAddress": "Новосибирск Тулинское заречье 127",
              "viewedArea": "94/65/12",
              "priceStart": "2300",
              "priceCurrent": "2300",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54889000084",
              "viewedAddress": "Новый Шарап Говорухина 27",
              "viewedArea": "170/60/12",
              "priceStart": "3800",
              "priceCurrent": "3800",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54889000087",
              "viewedAddress": "Новосибирск Ягодинская 46/1",
              "viewedArea": "45/30/8",
              "priceStart": "2200",
              "priceCurrent": "2200",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54889000100",
              "viewedAddress": "Марусино Славянская 7",
              "viewedArea": "105/99/12",
              "priceStart": "3300",
              "priceCurrent": "3300",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "54889000102",
              "viewedAddress": "СНТ Сосна СНТ Сосна 104",
              "viewedArea": "90/80/12",
              "priceStart": "3660",
              "priceCurrent": "3660",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "54932000760",
              "viewedAddress": "Ярково Береговая 1",
              "viewedArea": "10.00",
              "priceStart": "235",
              "priceCurrent": "235",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "55096000260",
              "viewedAddress": "Новосибирск Связистов 154",
              "viewedArea": "40/20/10",
              "priceStart": "3300",
              "priceCurrent": "3300",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "55341000003",
              "viewedAddress": "Рыбачий Ветеранов 4",
              "viewedArea": "35/0/0",
              "priceStart": "650",
              "priceCurrent": "650",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "55341000099",
              "viewedAddress": "Чаны Ломоносова 3",
              "viewedArea": "50/36/9",
              "priceStart": "400",
              "priceCurrent": "400",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "55341000123",
              "viewedAddress": "Новосибирск Титова 39",
              "viewedArea": "44/31/5",
              "priceStart": "2560",
              "priceCurrent": "2560",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34088",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 13:18:51.662910",
                  "expiration": "2022-12-27 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-27 10:57:16.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "55341000164",
              "viewedAddress": "Новосибирск Ветеран-1 28",
              "viewedArea": "7.13",
              "priceStart": "300",
              "priceCurrent": "300",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017418167478970035",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/270686936",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "55341000166",
              "viewedAddress": "Майский Майский 755",
              "viewedArea": "6360.00",
              "priceStart": "740",
              "priceCurrent": "740",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017418167478970037",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/270687396",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "55599002978",
              "viewedAddress": "Новосибирск Титова 253/3",
              "viewedArea": "42/1/1",
              "priceStart": "3400",
              "priceCurrent": "3400",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Комната",
              "typeName": "(Ком.)",
              "reqNumber": "56700002132",
              "viewedAddress": "Новосибирск Забалуева 74",
              "viewedArea": "20/1/1",
              "priceStart": "850",
              "priceCurrent": "850",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "56700002313",
              "viewedAddress": "Новосибирск Титова 252/2",
              "viewedArea": "43/17/14",
              "priceStart": "3300",
              "priceCurrent": "3300",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "57036001340",
              "viewedAddress": "Новосибирск Титова 236/2",
              "viewedArea": "55/31/9",
              "priceStart": "4700",
              "priceCurrent": "4700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48275",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-01-14 13:04:40.496173",
                  "expiration": "2022-06-27 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-22 15:51:00.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000003",
              "viewedAddress": "Новосибирск Вертковская 40",
              "viewedArea": "55/29/10",
              "priceStart": "4400",
              "priceCurrent": "4400",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447345939",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274123271",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34117",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-05-20 10:47:13.021647",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Комната",
              "typeName": "(Ком.)",
              "reqNumber": "58043000004",
              "viewedAddress": "Новосибирск Титова 34",
              "viewedArea": "82/10/4",
              "priceStart": "850",
              "priceCurrent": "850",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58043000009",
              "viewedAddress": "Новосибирск Римского-Корсакова 46",
              "viewedArea": "284/104/19",
              "priceStart": "18000",
              "priceCurrent": "18000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48338",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 13:46:06.712887",
                  "expiration": "2022-11-18 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-16 16:24:49.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "58043000018",
              "viewedAddress": "Пичугово море Южный бриз 8",
              "viewedArea": "15.00",
              "priceStart": "960",
              "priceCurrent": "960",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447345975",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/270686698",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000024",
              "viewedAddress": "Мошково Западная 15",
              "viewedArea": "58/39/8",
              "priceStart": "1220",
              "priceCurrent": "1220",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000027",
              "viewedAddress": "Новосибирск Немировича-Данченко 24/3",
              "viewedArea": "45/31/6",
              "priceStart": "2900",
              "priceCurrent": "2900",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58043000029",
              "viewedAddress": "Ордынское Вишневая 70",
              "viewedArea": "130/90/20",
              "priceStart": "2180",
              "priceCurrent": "2180",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34125",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-06-09 10:30:28.510600",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000031",
              "viewedAddress": "Верх-Тула Жилмассив 12",
              "viewedArea": "64/39/12",
              "priceStart": "3350",
              "priceCurrent": "3350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000040",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "41/14/12",
              "priceStart": "1710",
              "priceCurrent": "1710",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48549",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 16:16:05.800805",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000050",
              "viewedAddress": "Новосибирск Вертковская 37",
              "viewedArea": "39/17/6",
              "priceStart": "2950",
              "priceCurrent": "2950",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000055",
              "viewedAddress": "Барабинск Аэропорт 5",
              "viewedArea": "33/22/10",
              "priceStart": "850",
              "priceCurrent": "850",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48644",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-01-14 17:17:55.195290",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000057",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "61/30/12",
              "priceStart": "2170",
              "priceCurrent": "2170",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "58043000058",
              "viewedAddress": "Ленинское Морское 70",
              "viewedArea": "10.00",
              "priceStart": "2180",
              "priceCurrent": "2180",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48570",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:31:38.680600",
                  "expiration": "2023-04-24 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-22 17:40:45.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "58043000059",
              "viewedAddress": "Ленинское СНТ Морское 70",
              "viewedArea": "10.00",
              "priceStart": "3270",
              "priceCurrent": "3270",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346100",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/274123346",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58043000060",
              "viewedAddress": "Новосибирск 2-я Гэсстроевская 8",
              "viewedArea": "145/0/0",
              "priceStart": "4700",
              "priceCurrent": "4700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58043000063",
              "viewedAddress": "Новосибирск Амурский 1-й 21",
              "viewedArea": "89/0/0",
              "priceStart": "5800",
              "priceCurrent": "5800",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000067",
              "viewedAddress": "Новосибирск Пархоменко 14А",
              "viewedArea": "95/67/9",
              "priceStart": "5200",
              "priceCurrent": "5200",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48521",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 15:59:31.641655",
                  "expiration": "2022-11-16 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-16 13:32:45.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58043000068",
              "viewedAddress": "Новосибирск Бийская 44",
              "viewedArea": "118/100/12",
              "priceStart": "8520",
              "priceCurrent": "8520",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346130",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/270687679",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000071",
              "viewedAddress": "Новосибирск Немировича-Данченко 30/1",
              "viewedArea": "33/16/6",
              "priceStart": "2990",
              "priceCurrent": "2990",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48648",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 17:21:13.402258",
                  "expiration": "2022-08-31 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-30 16:07:59.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000075",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "84/46/13",
              "priceStart": "3100",
              "priceCurrent": "3100",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346158",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270687732",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48529",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:04:15.773699",
                  "expiration": "2022-08-16 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-16 12:00:47.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000076",
              "viewedAddress": "Новосибирск Филатова 12",
              "viewedArea": "62/48/7",
              "priceStart": "3990",
              "priceCurrent": "3990",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346159",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/270687964",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "53920",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-01 17:48:33.442160",
                  "expiration": "2023-01-31 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-26 10:45:12.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "58043000081",
              "viewedAddress": "СНТ Клевер Ландау 1935",
              "viewedArea": "8.30",
              "priceStart": "2000",
              "priceCurrent": "2000",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346185",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/270688824",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "54697",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-02-07 11:55:06.336085",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000082",
              "viewedAddress": "Криводановка Зелёная 16",
              "viewedArea": "42/15/15",
              "priceStart": "1850",
              "priceCurrent": "1850",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "55177",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-02-10 10:11:21.970721",
                  "expiration": "2022-08-10 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-26 11:27:55.000000"
              },
              "type": "Земельный участок",
              "typeName": "(Уч.)",
              "reqNumber": "58043000083",
              "viewedAddress": "Клевер Ландау 1",
              "viewedArea": "8.34",
              "priceStart": "670",
              "priceCurrent": "670",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346187",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/suburban/270688941",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "59229",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-03-10 15:26:22.373697",
                  "expiration": "2022-04-15 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-05 14:52:24.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000088",
              "viewedAddress": "Криводановка Зелёная 16",
              "viewedArea": "66/34/11",
              "priceStart": "2390",
              "priceCurrent": "2390",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000089",
              "viewedAddress": "Кудряшовский Октябрьская 12",
              "viewedArea": "58/39/7",
              "priceStart": "3700",
              "priceCurrent": "3700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "63434",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-05 15:09:17.976565",
                  "expiration": "2023-04-04 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-22 09:32:35.000000"
              },
              "type": "Гараж",
              "typeName": "(Г.)",
              "reqNumber": "58043000092",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "14/0/0",
              "priceStart": "670",
              "priceCurrent": "670",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346217",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/commercial/274123923",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "63507",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-06 09:33:28.169161",
                  "expiration": "2023-04-07 12:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-22 10:12:06.000000"
              },
              "type": "Гараж",
              "typeName": "(Г.)",
              "reqNumber": "58043000094",
              "viewedAddress": "Новосибирск Дачная 5",
              "viewedArea": "16/0/0",
              "priceStart": "700",
              "priceCurrent": "700",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346219",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/commercial/275112658",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "65339",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-19 14:19:05.948758",
                  "expiration": "2022-10-25 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-25 12:44:23.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000095",
              "viewedAddress": "Криводановка Зелёная 16",
              "viewedArea": "42/15/16",
              "priceStart": "2150",
              "priceCurrent": "2150",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346220",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274124457",
                      "status": "Ошибка",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "65731",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-04-21 15:22:40.973386",
                  "expiration": "2022-10-21 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-04-22 05:40:53.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000107",
              "viewedAddress": "Новосибирск Пархоменко 124",
              "viewedArea": "59/39/8",
              "priceStart": "4450",
              "priceCurrent": "4450",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274124416",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "68997",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-18 13:25:18.628487",
                  "expiration": "2022-11-18 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-18 14:57:54.000000"
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "58043000108",
              "viewedAddress": "Новосибирск Титова 82",
              "viewedArea": "29/16/6",
              "priceStart": "3690",
              "priceCurrent": "3690",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346905",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "70080",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-05-26 14:01:06.098369",
                  "expiration": "2022-11-30 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-05-31 11:08:19.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000109",
              "viewedAddress": "Криводановка Зелёная 16",
              "viewedArea": "66/34/11",
              "priceStart": "2600",
              "priceCurrent": "2600",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346906",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274126330",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "71855",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-07 14:57:41.741593",
                  "expiration": "2022-12-06 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-07 15:38:08.000000"
              },
              "type": "Дом",
              "typeName": "(Д.)",
              "reqNumber": "58043000110",
              "viewedAddress": "Новосибирск Степная 215",
              "viewedArea": "373/350/22",
              "priceStart": "7000",
              "priceCurrent": "7000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "72775",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-14 15:31:11.176848",
                  "expiration": "2022-12-14 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-14 17:52:27.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000111",
              "viewedAddress": "Толмачёво квартал Форда 3",
              "viewedArea": "84/52/12",
              "priceStart": "6800",
              "priceCurrent": "6800",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346929",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274744864",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "73466",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-06-18 12:47:57.473782",
                  "expiration": "2022-09-18 00:00:00.000000",
                  "moderation": "Подтверждено",
                  "moderationDate": "2022-06-19 18:49:02.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58043000112",
              "viewedAddress": "Новосибирск Филатова 11",
              "viewedArea": "32/17/7",
              "priceStart": "2950",
              "priceCurrent": "2950",
              "priceTrend": 0,
              "advStatus": "К размещению",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": "https://realty.yandex.ru/offer/6017494929447346930",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": "https://www.cian.ru/sale/flat/274986070",
                      "status": "Опубликовано",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48297",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Рекламный",
                  "created": "2022-01-14 13:24:32.257362",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Переуступка ДДУ",
              "typeName": "(Нов.)",
              "reqNumber": "58084000003",
              "viewedAddress": "Новосибирск Александра Чистякова 22",
              "viewedArea": "29/11/9",
              "priceStart": "2300",
              "priceCurrent": "2300",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58084000010",
              "viewedAddress": "Колывань Кирова 42",
              "viewedArea": "53/36/6",
              "priceStart": "3000",
              "priceCurrent": "3000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Гараж",
              "typeName": "(Г.)",
              "reqNumber": "58084000015",
              "viewedAddress": "Новосибирск Кропоткина 197 корп 2",
              "viewedArea": "35/0/0",
              "priceStart": "800",
              "priceCurrent": "800",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Комната",
              "typeName": "(Ком.)",
              "reqNumber": "58167000023",
              "viewedAddress": "Новосибирск Забалуева 39",
              "viewedArea": "23/15/2",
              "priceStart": "1000",
              "priceCurrent": "1000",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": null,
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": null,
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58198000085",
              "viewedAddress": "Новосибирск Титова 198/1",
              "viewedArea": "60/42/9",
              "priceStart": "5950",
              "priceCurrent": "5950",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "34128",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": null,
                  "created": "2022-06-16 11:03:01.165405",
                  "expiration": null,
                  "moderation": null,
                  "moderationDate": null
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58198000305",
              "viewedAddress": "Новосибирск Спортивная 11/1",
              "viewedArea": "56/31/10",
              "priceStart": "4090",
              "priceCurrent": "4090",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          },
          {
              "dealId": "48615",
              "assigned_by": {
                  "UID": 2583,
                  "fullName": "Ядрышникова Ольга Сергеевна"
              },
              "contract": {
                  "type": "Эксклюзив",
                  "created": "2022-01-14 16:59:50.288928",
                  "expiration": "2022-05-16 12:00:00.000000",
                  "moderation": "Отклонено",
                  "moderationDate": "2022-05-20 08:34:59.000000"
              },
              "type": "Квартира",
              "typeName": "(Кв.)",
              "reqNumber": "58494000005",
              "viewedAddress": "Криводановка Зеленая 16",
              "viewedArea": "60/41/9",
              "priceStart": "2350",
              "priceCurrent": "2350",
              "priceTrend": 0,
              "advStatus": "Не в рекламе",
              "platformStats": [
                  {
                      "name": "Yandex",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  },
                  {
                      "name": "Cian",
                      "url": null,
                      "status": "Не размещено",
                      "coverage": 0,
                      "searches": 0,
                      "shows": 0,
                      "showsTrand": 0
                  }
              ]
          }
      ],
      "rights": "chief",
      "subordinated": [
          {
              "name": "Кралько Светлана Григорьевна",
              "id": 3849,
              "office": 56,
              "login": "kralko"
          },
          {
              "name": "Мешечко Родион Игоревич",
              "id": 3842,
              "office": 56,
              "login": "meshechkori"
          },
          {
              "name": "Антонова Наталья Александровна",
              "id": 3617,
              "office": 56,
              "login": "antonovana"
          },
          {
              "name": "Шейн Яна Юрьевна",
              "id": 3379,
              "office": 56,
              "login": "sheynyayu"
          },
          {
              "name": "Ядрышникова Ольга Сергеевна",
              "id": 2583,
              "office": 56,
              "login": "yadryishnikovaos"
          },
          {
              "name": "Дегтярёва Елена Николаевна",
              "id": 2551,
              "office": 56,
              "login": "degtyarevaen"
          },
          {
              "name": "Тадевосян Гайк Андраникович",
              "id": 2015,
              "office": 56,
              "login": "tadevosyanga"
          },
          {
              "name": "Андрухова Евгения Викторовна",
              "id": 1658,
              "office": 56,
              "login": "kustovaev"
          },
          {
              "name": "Бриль Наталья Борисовна",
              "id": 1599,
              "office": 56,
              "login": "brilnb"
          },
          {
              "name": "Сорокина Ирина Владимировна",
              "id": 1595,
              "office": 56,
              "login": "sorokina.i"
          },
          {
              "name": "Дергунова Наталья Валерьевна",
              "id": 1594,
              "office": 56,
              "login": "dergunova"
          },
          {
              "name": "Чапская Елена Владимировна",
              "id": 1593,
              "office": 56,
              "login": "chapskaya"
          },
          {
              "name": "Альчикова Оксана Геннадьевна",
              "id": 1583,
              "office": 56,
              "login": "alchikovaog"
          },
          {
              "name": "Безуглов Александр Викторович",
              "id": 1506,
              "office": 56,
              "login": "bezuglovav"
          },
          {
              "name": "Цынкер Любовь Александровна",
              "id": 1503,
              "office": 56,
              "login": "cyinker"
          },
          {
              "name": "Крижановская Татьяна Викторовна",
              "id": 185,
              "office": 56,
              "login": "krizhanovskayatv"
          },
          {
              "name": "Винник Наталья Александровна",
              "id": 54,
              "office": 56,
              "login": "vinnik"
          },
          {
              "name": "Розова Елена Владимировна",
              "id": 3549,
              "office": 63,
              "login": "rozovaev"
          },
          {
              "name": "Сампетова Елена Александровна",
              "id": 2504,
              "office": 63,
              "login": "sampetovaea"
          },
          {
              "name": "Мумбер Евгений Леонидович",
              "id": 2034,
              "office": 63,
              "login": "mumberel"
          },
          {
              "name": "Бондарь Наталья Евгеньевна",
              "id": 1893,
              "office": 63,
              "login": "bondarne"
          },
          {
              "name": "Аибян Лейли Маджитовна",
              "id": 1762,
              "office": 63,
              "login": "aibyanlm"
          },
          {
              "name": "Юдин Дмитрий Павлович",
              "id": 1745,
              "office": 63,
              "login": "yudindp"
          },
          {
              "name": "Андреева Юлия Валерьевна",
              "id": 1643,
              "office": 63,
              "login": "lebedevayuv"
          },
          {
              "name": "Колотыгина Александра Николаевна",
              "id": 992,
              "office": 63,
              "login": "kolotyiginaan"
          },
          {
              "name": "Медведева Татьяна Николаевна",
              "id": 518,
              "office": 63,
              "login": "medvedevatn"
          },
          {
              "name": "Грудев Вячеслав Викторович",
              "id": 388,
              "office": 63,
              "login": "grudevvv"
          },
          {
              "name": "Лобынцев Михаил Михайлович",
              "id": 256,
              "office": 63,
              "login": "lobyincevmm"
          },
          {
              "name": "Рагулина Татьяна Юрьевна",
              "id": 55,
              "office": 63,
              "login": "ragulina"
          },
          {
              "name": "Кислякова Зинаида Сергеевна",
              "id": 3876,
              "office": 66,
              "login": "kislyakovazs"
          },
          {
              "name": "Коробкина Анастасия Андреевна",
              "id": 2931,
              "office": 66,
              "login": "korobkinaaa"
          },
          {
              "name": "Давыденко Елена Александровна",
              "id": 2922,
              "office": 66,
              "login": "davyidenkoea"
          },
          {
              "name": "Долгова Ирина Петровна",
              "id": 1998,
              "office": 66,
              "login": "dolgovaip"
          },
          {
              "name": "Крестьянова Людмила Викторовна",
              "id": 1967,
              "office": 66,
              "login": "krestyanovalv"
          },
          {
              "name": "Матвейкина Анастасия Александровна",
              "id": 1636,
              "office": 66,
              "login": "matveykina"
          },
          {
              "name": "Светляков Василий Николаевич",
              "id": 3885,
              "office": 67,
              "login": "svetlyakovvn"
          },
          {
              "name": "Бебамуратов Данил Захарович",
              "id": 3846,
              "office": 67,
              "login": "bebamuratovdz"
          },
          {
              "name": "Фильченко Станислав Евгеньевич",
              "id": 3840,
              "office": 67,
              "login": "filchenkose1"
          },
          {
              "name": "Богидаева Ирина Николаевна",
              "id": 3759,
              "office": 67,
              "login": "bogidaevain"
          },
          {
              "name": "Белая Алена Гарьевна",
              "id": 3433,
              "office": 67,
              "login": "belayaag"
          },
          {
              "name": "Павлюченко Дмитрий Александрович",
              "id": 3201,
              "office": 67,
              "login": "pavlyuchenkoda"
          },
          {
              "name": "Чухиль Руслан Викторович",
              "id": 2620,
              "office": 67,
              "login": "chukhilrv"
          },
          {
              "name": "Зубова Инга Анатольевна",
              "id": 2022,
              "office": 67,
              "login": "zubovaia"
          },
          {
              "name": "Чичканова Анна Евгеньевна",
              "id": 1925,
              "office": 67,
              "login": "chichkanovaae"
          },
          {
              "name": "Андрейченко Ольга Вячеславовна",
              "id": 3121,
              "office": 68,
              "login": "andreychenkoov"
          },
          {
              "name": "Пасюк Оксана Викторовна",
              "id": 874,
              "office": 68,
              "login": "pasyukov"
          },
          {
              "name": "Федулова Марина Геннадьевна",
              "id": 3714,
              "office": 69,
              "login": "fedulovamg"
          },
          {
              "name": "Борматова Анастасия Евгеньевна",
              "id": 3682,
              "office": 69,
              "login": "bormatovaae"
          },
          {
              "name": "Катренко Галина Валентиновна",
              "id": 3207,
              "office": 69,
              "login": "katrenkogv"
          },
          {
              "name": "Литвинова Ольга Павловна",
              "id": 3083,
              "office": 69,
              "login": "litvinovaop"
          },
          {
              "name": "Полухина Елена Юрьевна",
              "id": 3048,
              "office": 69,
              "login": "polukhinaeyu"
          },
          {
              "name": "Горбаткова Елена Сергеевна",
              "id": 2949,
              "office": 69,
              "login": "gorbatkovaes"
          },
          {
              "name": "Матвиенко Екатерина Сергеевна",
              "id": 2242,
              "office": 69,
              "login": "matvienkoes"
          },
          {
              "name": "Лаврова Елена Викторовна",
              "id": 1779,
              "office": 69,
              "login": "lavrovaev"
          },
          {
              "name": "Голдин Евгений Александрович",
              "id": 1729,
              "office": 69,
              "login": "goldinea"
          },
          {
              "name": "Соколова Юлия Александровна",
              "id": 1656,
              "office": 69,
              "login": "sokolovayua"
          },
          {
              "name": "Шлыкова Юлия Юрьевна",
              "id": 1584,
              "office": 69,
              "login": "shlikova"
          },
          {
              "name": "Кравцова Наталья Михайловна",
              "id": 1519,
              "office": 69,
              "login": "kravtsova"
          },
          {
              "name": "Циглер Ксения Васильевна",
              "id": 2594,
              "office": 70,
              "login": "ciglerkv"
          },
          {
              "name": "Габдрахманова Ольга Олеговна",
              "id": 1907,
              "office": 70,
              "login": "gabdrakhmanovaoo"
          },
          {
              "name": "Корсак Валерия Маратовна",
              "id": 1796,
              "office": 70,
              "login": "korsakvm"
          },
          {
              "name": "Евдокимова Виктория Андреевна",
              "id": 610,
              "office": 70,
              "login": "evdokimovava"
          },
          {
              "name": "Лодясова Анна Евгеньевна",
              "id": 609,
              "office": 70,
              "login": "lodyasovaae"
          },
          {
              "name": "Павловец Ксения Юрьевна",
              "id": 222,
              "office": 70,
              "login": "pavloveckyu"
          },
          {
              "name": "Милахин Руслан Олегович",
              "id": 3936,
              "office": 72,
              "login": "milakhinro"
          },
          {
              "name": "Попов Кирилл Денисович",
              "id": 3901,
              "office": 72,
              "login": "popovkd"
          },
          {
              "name": "Скопич Дарья Александровна",
              "id": 3768,
              "office": 72,
              "login": "skopichda"
          },
          {
              "name": "Парфенов Денис Александрович",
              "id": 3711,
              "office": 72,
              "login": "parfenovda"
          },
          {
              "name": "Половинкина Ольга Борисовна",
              "id": 3693,
              "office": 72,
              "login": "polovinkinaob"
          },
          {
              "name": "Чевелёва Олеся Михайловна",
              "id": 3315,
              "office": 72,
              "login": "chevelevaom"
          },
          {
              "name": "Бажанова Галина Филипповна",
              "id": 3000,
              "office": 72,
              "login": "bazhanova"
          },
          {
              "name": "Корчагина Алина Ивановна",
              "id": 1992,
              "office": 72,
              "login": "korchaginaai"
          },
          {
              "name": "Виноградова Лариса Анатольевна",
              "id": 1823,
              "office": 72,
              "login": "vinogradovala"
          },
          {
              "name": "Мироненко Роман Андреевич",
              "id": 1793,
              "office": 72,
              "login": "mironenkora"
          },
          {
              "name": "Чичкина Марина Леонидовна",
              "id": 1746,
              "office": 72,
              "login": "chichkinaml"
          },
          {
              "name": "Ладченко Татьяна Викторовна",
              "id": 1727,
              "office": 72,
              "login": "ladchenkotv"
          },
          {
              "name": "Тырышкина Татьяна Павловна",
              "id": 1699,
              "office": 72,
              "login": "tirishkina"
          },
          {
              "name": "Кравченко Татьяна Николаевна",
              "id": 1630,
              "office": 72,
              "login": "kravchenkot"
          },
          {
              "name": "Ершова Виктория Валерьевна",
              "id": 1628,
              "office": 72,
              "login": "ershovavv"
          },
          {
              "name": "Гусев Максим Вячеславович",
              "id": 1623,
              "office": 72,
              "login": "gusevmv"
          },
          {
              "name": "Ковинько Ирина Евгеньевна",
              "id": 1619,
              "office": 72,
              "login": "kovinko"
          },
          {
              "name": "Салостий Татьяна Владимировна",
              "id": 1615,
              "office": 72,
              "login": "salostiy"
          },
          {
              "name": "Жигач Светлана Николаевна",
              "id": 1604,
              "office": 72,
              "login": "zhigachsn"
          },
          {
              "name": "Максимова Ольга Геннадьевна",
              "id": 1603,
              "office": 72,
              "login": "maksimovaog"
          },
          {
              "name": "Шлыкова Ольга Михайловна",
              "id": 1602,
              "office": 72,
              "login": "shlyikovao"
          },
          {
              "name": "Федорова Светлана Геннадьевна",
              "id": 1601,
              "office": 72,
              "login": "fedorova"
          },
          {
              "name": "Маркова Мария Михайловна",
              "id": 1572,
              "office": 72,
              "login": "markovamm"
          },
          {
              "name": "Новикова Евгения Михайловна",
              "id": 1571,
              "office": 72,
              "login": "e.novikova"
          },
          {
              "name": "Кашина Оксана Викторовна",
              "id": 1561,
              "office": 72,
              "login": "kashina"
          },
          {
              "name": "Вагайцева Юлия Александровна",
              "id": 1560,
              "office": 72,
              "login": "vagaycevayua"
          },
          {
              "name": "Погромская Елена Ивановна",
              "id": 1556,
              "office": 72,
              "login": "poturemskayaei"
          },
          {
              "name": "Максимов Александр Юрьевич",
              "id": 1161,
              "office": 72,
              "login": "maksimovayu"
          },
          {
              "name": "Волосухина Анжелика Викторовна",
              "id": 1021,
              "office": 72,
              "login": "volosukhinaav"
          },
          {
              "name": "Слёзкин Дмитрий Александрович",
              "id": 472,
              "office": 72,
              "login": "slezkinda"
          },
          {
              "name": "Бурнина Анна Борисовна",
              "id": 213,
              "office": 72,
              "login": "burnina"
          },
          {
              "name": "Агеева Надежда Сергеевна",
              "id": 3907,
              "office": 73,
              "login": "ageevans"
          },
          {
              "name": "Раджабова Надия Маликовна",
              "id": 3898,
              "office": 73,
              "login": "radzhabovanm"
          },
          {
              "name": "Горбунова Дарья Андреевна",
              "id": 3893,
              "office": 73,
              "login": "gorbunovada"
          },
          {
              "name": "Козлов Дмитрий Сергеевич",
              "id": 3834,
              "office": 73,
              "login": "kozlovds"
          },
          {
              "name": "Кисилев Александр Сергеевич",
              "id": 3819,
              "office": 73,
              "login": "kisilevas"
          },
          {
              "name": "Алексеев Денис Викторович",
              "id": 3814,
              "office": 73,
              "login": "alekseevdv"
          },
          {
              "name": "Михайлюков Артём Иванович",
              "id": 3807,
              "office": 73,
              "login": "mikhaylyukovai"
          },
          {
              "name": "Кошмидько Олеся Николаевна",
              "id": 3065,
              "office": 73,
              "login": "koshmidkoon"
          },
          {
              "name": "Лопатина Анна Вадимовна",
              "id": 2708,
              "office": 73,
              "login": "lopatinaav"
          },
          {
              "name": "Иванов Олег Александрович",
              "id": 2051,
              "office": 73,
              "login": "ivanovoa"
          },
          {
              "name": "Ахременко Ярослав Юрьевич",
              "id": 1939,
              "office": 73,
              "login": "akhremenkoyayu"
          },
          {
              "name": "Асанов Евгений Вениаминович",
              "id": 1868,
              "office": 73,
              "login": "asanovev"
          },
          {
              "name": "Толстова Юлия Ивановна",
              "id": 1866,
              "office": 73,
              "login": "tolstovayui"
          },
          {
              "name": "Истифеев Николай Николаевич",
              "id": 1819,
              "office": 73,
              "login": "istifeevnn"
          },
          {
              "name": "Останина Елена Жоржевна",
              "id": 1795,
              "office": 73,
              "login": "ostaninaezh"
          },
          {
              "name": "Ветрова Оксана Викторовна",
              "id": 1590,
              "office": 73,
              "login": "vetrova"
          },
          {
              "name": "Ахременко Владимир Юрьевич",
              "id": 175,
              "office": 73,
              "login": "akhremenkovyu"
          },
          {
              "name": "Дергилева Анастасия Андреевна",
              "id": 1713,
              "office": 83,
              "login": "dergileva"
          },
          {
              "name": "Дягилев Никита Сергеевич",
              "id": 3879,
              "office": 85,
              "login": "dyagilevns"
          },
          {
              "name": "Аль-Рабеа Ирина Олеговна",
              "id": 3820,
              "office": 85,
              "login": "alrabeaio"
          },
          {
              "name": "Макарова Татьяна Дмитриевна",
              "id": 3422,
              "office": 85,
              "login": "makarovatd"
          },
          {
              "name": "Мозговой Андрей Викторович",
              "id": 3167,
              "office": 85,
              "login": "mozgovoyav"
          },
          {
              "name": "Смолянинова Стелла Владимировна",
              "id": 3134,
              "office": 85,
              "login": "smolyaninovasv"
          },
          {
              "name": "Черепянко Нина Валерьевна",
              "id": 3120,
              "office": 85,
              "login": "cherepyankonv"
          },
          {
              "name": "Рожаева Ирина Юрьевна",
              "id": 3056,
              "office": 85,
              "login": "rozhaevaiyu"
          },
          {
              "name": "Широких Ольга Юрьевна",
              "id": 3055,
              "office": 85,
              "login": "shirokikhoyu"
          },
          {
              "name": "Маслянко Виталий Витальевич",
              "id": 3054,
              "office": 85,
              "login": "maslyankovv"
          },
          {
              "name": "Рыбина Анна Николаевна",
              "id": 2578,
              "office": 85,
              "login": "ryibinaan"
          },
          {
              "name": "Макаров Александр Викторович",
              "id": 1786,
              "office": 85,
              "login": "makarovav"
          },
          {
              "name": "Агеева Елена Анатольевна",
              "id": 1574,
              "office": 85,
              "login": "ageeva"
          },
          {
              "name": "Новицкая Елена Николаевна",
              "id": 1573,
              "office": 85,
              "login": "novickaya"
          },
          {
              "name": "Дубовицкая Альбина Геннадьевна",
              "id": 1570,
              "office": 85,
              "login": "dubovitskaya"
          },
          {
              "name": "Пронькина Юлия Николаевна",
              "id": 1569,
              "office": 85,
              "login": "pronkina"
          },
          {
              "name": "Тирских Оксана Анатольевна",
              "id": 1568,
              "office": 85,
              "login": "tirskikh"
          },
          {
              "name": "Богомолова Марина Николаевна",
              "id": 1567,
              "office": 85,
              "login": "bogomolova"
          },
          {
              "name": "Пилецкая Светлана Николаевна",
              "id": 1566,
              "office": 85,
              "login": "pileckaya"
          },
          {
              "name": "Котова Юлия Сергеевна",
              "id": 1565,
              "office": 85,
              "login": "kotova"
          },
          {
              "name": "Сущенко Светлана Маратовна",
              "id": 1564,
              "office": 85,
              "login": "sushenko"
          },
          {
              "name": "Голомидова Анна Владимировна",
              "id": 1513,
              "office": 85,
              "login": "golomidova"
          },
          {
              "name": "Сидорова Наталья Викторовна",
              "id": 1493,
              "office": 85,
              "login": "sidorovanv"
          },
          {
              "name": "Петрова Наталья Анатольевна",
              "id": 3850,
              "office": 86,
              "login": "petrovana"
          },
          {
              "name": "Ленц Наталья Станиславовна",
              "id": 3749,
              "office": 86,
              "login": "lencns"
          },
          {
              "name": "Севко Наталья Александровна",
              "id": 1812,
              "office": 86,
              "login": "sevkona"
          },
          {
              "name": "Кузьменко Евгения Викторовна",
              "id": 1806,
              "office": 86,
              "login": "kuzmenkoev"
          },
          {
              "name": "Ширяева Юлия Владимировна",
              "id": 1760,
              "office": 86,
              "login": "shiryaevayuv"
          },
          {
              "name": "Павлов Анатолий Сергеевич",
              "id": 1722,
              "office": 86,
              "login": "pavlovas"
          },
          {
              "name": "Степанюк Любовь Николаевна",
              "id": 1721,
              "office": 86,
              "login": "stepanyukln"
          },
          {
              "name": "Карнаух Дарья Александровна-Столетова",
              "id": 1705,
              "office": 86,
              "login": "karpichkoda"
          },
          {
              "name": "Передерина Лариса Геннадьевна",
              "id": 1821,
              "office": 88,
              "login": "perederinalg"
          },
          {
              "name": "Кустова Надежда Александровна",
              "id": 1707,
              "office": 88,
              "login": "kustovan"
          },
          {
              "name": "Григорьева Светлана Каримовна",
              "id": 1693,
              "office": 88,
              "login": "grigorevask"
          },
          {
              "name": "Чаусовская Маргарита Николаевна",
              "id": 1661,
              "office": 88,
              "login": "chausovskayam"
          },
          {
              "name": "Тимошенко Марина Меружановна",
              "id": 1642,
              "office": 88,
              "login": "timoshenkom"
          },
          {
              "name": "Пестрикова Виктория Викторовна",
              "id": 1517,
              "office": 88,
              "login": "pestrikova"
          },
          {
              "name": "Ларин Иван Юрьевич",
              "id": 3945,
              "office": 89,
              "login": "lariniyu"
          },
          {
              "name": "Ситнер Елена Александровна",
              "id": 3016,
              "office": 89,
              "login": "sitnerea"
          },
          {
              "name": "Яковлева София Юрьевна",
              "id": 2322,
              "office": 89,
              "login": "yakovlevasyu"
          },
          {
              "name": "Павлецова Алина Андреевна",
              "id": 1664,
              "office": 89,
              "login": "pavlecovaaa"
          },
          {
              "name": "Вараксина Ирина Владимировна",
              "id": 1654,
              "office": 89,
              "login": "varaksina"
          },
          {
              "name": "Филиппенко Татьяна Николаевна",
              "id": 1638,
              "office": 89,
              "login": "filippenko"
          },
          {
              "name": "Карпачева Екатерина Юрьевна",
              "id": 1635,
              "office": 89,
              "login": "karpachevaeyu"
          },
          {
              "name": "Рубахина Наталья Николаевна",
              "id": 1633,
              "office": 89,
              "login": "rubakhinann"
          },
          {
              "name": "Клейн Анжелика Сергеевна",
              "id": 1591,
              "office": 89,
              "login": "sosninaas"
          },
          {
              "name": "Крохалева Ирина Владимировна",
              "id": 1518,
              "office": 89,
              "login": "krokhaleva"
          },
          {
              "name": "Топоркова Ольга Алексеевна",
              "id": 1498,
              "office": 89,
              "login": "toporkovaoa"
          },
          {
              "name": "Койнова Оксана Викторовна",
              "id": 1494,
              "office": 89,
              "login": "koinova"
          },
          {
              "name": "Бакенова Алина",
              "id": 1208,
              "office": 89,
              "login": "bakenovaak"
          },
          {
              "name": "Дергилева Анастасия Андреевна",
              "id": 3948,
              "office": 96,
              "login": "dergileva1"
          },
          {
              "name": "Рекк Ольга Константиновна",
              "id": 3888,
              "office": 96,
              "login": "rekkok"
          },
          {
              "name": "Пановицын Данила Александрович",
              "id": 3887,
              "office": 96,
              "login": "panovicyinda"
          },
          {
              "name": "Кузнецова Людмила Михайловна",
              "id": 1706,
              "office": 96,
              "login": "kuznetsoval"
          },
          {
              "name": "Дмитриева Ирина Александровна",
              "id": 1698,
              "office": 96,
              "login": "dmitrieva"
          },
          {
              "name": "Еремина Людмила Николаевна",
              "id": 1671,
              "office": 96,
              "login": "ereminaln"
          },
          {
              "name": "Ельченко Григорий Александрович",
              "id": 3881,
              "office": 97,
              "login": "elchenkoga"
          },
          {
              "name": "Маркова Татьяна Геннадьевна",
              "id": 3822,
              "office": 97,
              "login": "markovatg"
          },
          {
              "name": "Шушляков Григорий Владимирович",
              "id": 3811,
              "office": 97,
              "login": "shushlyakovgv"
          },
          {
              "name": "Селимханов Руслан Селимханович",
              "id": 1958,
              "office": 97,
              "login": "selimkhanovrs"
          },
          {
              "name": "Григорьева Елена Евгеньевна",
              "id": 1896,
              "office": 97,
              "login": "grigorevaee"
          },
          {
              "name": "Ковалева Валентина Владимировна",
              "id": 1792,
              "office": 97,
              "login": "kovalevavv"
          },
          {
              "name": "Пугачева Ольга Георгиевна",
              "id": 1774,
              "office": 97,
              "login": "grishinaog"
          },
          {
              "name": "Авилова Оксана Сергеевна",
              "id": 1577,
              "office": 97,
              "login": "avilovaos"
          },
          {
              "name": "Дубровин Андрей Игоревич",
              "id": 1576,
              "office": 97,
              "login": "dubrovinai"
          },
          {
              "name": "Федорищев Антон Алексеевич",
              "id": 1530,
              "office": 97,
              "login": "fedorischevaa"
          },
          {
              "name": "Трухачева Наталья Владимировна",
              "id": 3942,
              "office": 98,
              "login": "trukhachevanv"
          },
          {
              "name": "Кононенко Григорий Александрович",
              "id": 3928,
              "office": 98,
              "login": "kononenkoga"
          },
          {
              "name": "Немировский Дмитрий Игоревич",
              "id": 3864,
              "office": 98,
              "login": "nemirovskiydi"
          },
          {
              "name": "Журавлева Елена Георгиевна",
              "id": 3436,
              "office": 98,
              "login": "zhuravlevaeg"
          },
          {
              "name": "Федорова Лариса Николаевна",
              "id": 2648,
              "office": 98,
              "login": "fedorovaln"
          },
          {
              "name": "Давлатова Нодира Ахмедовна",
              "id": 2642,
              "office": 98,
              "login": "davlatovana"
          },
          {
              "name": "Дементьева Елена Юрьевна",
              "id": 1703,
              "office": 98,
              "login": "dementevaeyu"
          },
          {
              "name": "Максагина Тамара Александровна",
              "id": 1668,
              "office": 98,
              "login": "maksaginata"
          },
          {
              "name": "Жукова Людмила Николаевна",
              "id": 1652,
              "office": 98,
              "login": "zhukovaln"
          },
          {
              "name": "Дадоян Кнарик Рафиковна",
              "id": 1596,
              "office": 98,
              "login": "dadoyan"
          },
          {
              "name": "Визигина Татьяна Алексеевна",
              "id": 1578,
              "office": 98,
              "login": "vizigina"
          },
          {
              "name": "Тимошенко Галина Александровна",
              "id": 3710,
              "office": 100,
              "login": "timoshenkoga"
          },
          {
              "name": "Некрасова Анна Владимировна",
              "id": 3004,
              "office": 100,
              "login": "nekrasovaav"
          },
          {
              "name": "Пирожков Дмитрий Сергеевич",
              "id": 2987,
              "office": 100,
              "login": "pirozhkovds"
          },
          {
              "name": "Чанов Вячеслав Григорьевич",
              "id": 1964,
              "office": 100,
              "login": "chanovvg"
          },
          {
              "name": "Кадеркаев Альберт Александрович",
              "id": 1947,
              "office": 100,
              "login": "kaderkaev"
          },
          {
              "name": "Суворова Мария Александровна",
              "id": 1842,
              "office": 100,
              "login": "suvorovama"
          },
          {
              "name": "Левчук Надежда Алексеевна",
              "id": 1750,
              "office": 100,
              "login": "levchukna"
          },
          {
              "name": "Крижевич Наталья Геннадьевна",
              "id": 1585,
              "office": 100,
              "login": "krizhevichng"
          },
          {
              "name": "Болмосова Лариса Анатольевна",
              "id": 1580,
              "office": 100,
              "login": "bolmosova"
          },
          {
              "name": "Мезенцева Светлана Вячеславовна",
              "id": 1538,
              "office": 100,
              "login": "mezencevasv"
          },
          {
              "name": "Самбур Ирина Леонидовна",
              "id": 1537,
              "office": 100,
              "login": "sambur"
          },
          {
              "name": "Морозова Елена Геннадьевна",
              "id": 410,
              "office": 100,
              "login": "shishmarevaeg"
          },
          {
              "name": "Федорченко Дмитрий Сергеевич",
              "id": 3847,
              "office": 102,
              "login": "fedorchenkods"
          },
          {
              "name": "Баборыкин Виталий Валерьевич",
              "id": 642,
              "office": 102,
              "login": "baboryikinvv"
          },
          {
              "name": "Капцова Ольга Михайловна",
              "id": 390,
              "office": 102,
              "login": "kapcovaom"
          },
          {
              "name": "Горбунова Ирина Андреевна",
              "id": 389,
              "office": 102,
              "login": "gorbunovaia"
          },
          {
              "name": "Капцов Михаил Олегович",
              "id": 108,
              "office": 102,
              "login": "kapcovmo"
          },
          {
              "name": "Янбулатова Диляра Равильевна",
              "id": 107,
              "office": 102,
              "login": "yanbulatovadr"
          },
          {
              "name": "Семенихина Елена Владимировна",
              "id": 106,
              "office": 102,
              "login": "semenihina"
          },
          {
              "name": "Фильченко Станислав Евгеньевич-Ленина",
              "id": 1588,
              "office": 107,
              "login": "filchenkose"
          },
          {
              "name": "Ичаловская Инна Викторовна",
              "id": 3903,
              "office": 110,
              "login": "ichalovskayaiv"
          },
          {
              "name": "Карнаух Дарья Александровна",
              "id": 3836,
              "office": 110,
              "login": "karnaukhda"
          },
          {
              "name": "Орлов Андрей Эдуардович",
              "id": 3733,
              "office": 110,
              "login": "orlovaye"
          },
          {
              "name": "Соловьева Олеся Владимировна",
              "id": 3696,
              "office": 110,
              "login": "solovevaov"
          },
          {
              "name": "Вороной Вячеслав Геннадьевич",
              "id": 2964,
              "office": 110,
              "login": "voronoyvg"
          },
          {
              "name": "Барановский Данил Денисович",
              "id": 2591,
              "office": 110,
              "login": "baranovskiydd"
          },
          {
              "name": "Макаренко Юлия Ивановна",
              "id": 2102,
              "office": 110,
              "login": "makarenkoyui"
          },
          {
              "name": "Кравченко Яна Викторовна",
              "id": 1909,
              "office": 110,
              "login": "kravchenkoyav"
          },
          {
              "name": "Власова Наталья Николаевна",
              "id": 1891,
              "office": 110,
              "login": "vlasovann"
          },
          {
              "name": "Добрынина Елизавета Александровна",
              "id": 1887,
              "office": 110,
              "login": "dobryininaea"
          },
          {
              "name": "Меркулова Любовь Анатольевна",
              "id": 1874,
              "office": 110,
              "login": "merkulovala"
          },
          {
              "name": "Торгашова Любовь Ивановна",
              "id": 1870,
              "office": 110,
              "login": "torgashovali"
          },
          {
              "name": "Филиппова Анна Анатольевна",
              "id": 1829,
              "office": 110,
              "login": "filippovaaa"
          },
          {
              "name": "Канева Рената Юрьевна",
              "id": 3597,
              "office": 111,
              "login": "kanevaryu"
          },
          {
              "name": "Ивашко Юлия Фаридовна",
              "id": 2333,
              "office": 111,
              "login": "ivashkoyuf"
          },
          {
              "name": "Рачинская Юлия Николаевна",
              "id": 1782,
              "office": 111,
              "login": "rachinskayayun"
          },
          {
              "name": "Скакунова Ирина Юрьевна",
              "id": 1716,
              "office": 111,
              "login": "skakunova"
          },
          {
              "name": "Мадиссон Елена Владимировна",
              "id": 1715,
              "office": 111,
              "login": "madissonev"
          },
          {
              "name": "Бутьянова Алла Михайловна",
              "id": 1686,
              "office": 111,
              "login": "butyanova"
          },
          {
              "name": "Рябченко Ольга Евгеньевна",
              "id": 1592,
              "office": 111,
              "login": "ryabchenkooe"
          },
          {
              "name": "Архангельский Игорь Олегович",
              "id": 3166,
              "office": 114,
              "login": "arkhangelskiyio"
          },
          {
              "name": "Чакенова Татьяна Васильевна",
              "id": 1978,
              "office": 114,
              "login": "chakenovatv"
          },
          {
              "name": "Грязнов Станислав Константинович",
              "id": 1826,
              "office": 114,
              "login": "gryaznovsk"
          },
          {
              "name": "Никулина Татьяна Борисовна",
              "id": 1813,
              "office": 114,
              "login": "nikulinatb"
          },
          {
              "name": "Свирин Евгений Валерьевич",
              "id": 1802,
              "office": 114,
              "login": "svirinev"
          },
          {
              "name": "Михайлова Ирина Михайловна",
              "id": 1766,
              "office": 114,
              "login": "voynovaim"
          },
          {
              "name": "Свирина Инна Сергеевна",
              "id": 1738,
              "office": 114,
              "login": "larionovas"
          },
          {
              "name": "Угроватая Лариса Борисовна",
              "id": 1692,
              "office": 114,
              "login": "ugrovataya"
          },
          {
              "name": "Хадаковская Эльвира Викторовна",
              "id": 1679,
              "office": 114,
              "login": "hadakovskaya"
          },
          {
              "name": "Терентьева Елена Сергеевна",
              "id": 1648,
              "office": 114,
              "login": "terentevaes"
          },
          {
              "name": "Манаков Олег Кириллович",
              "id": 3398,
              "office": 116,
              "login": "manakovok"
          },
          {
              "name": "Гайкова Валентина Сергеевна",
              "id": 3256,
              "office": 116,
              "login": "gaykovavs"
          },
          {
              "name": "Шульга Валентина Ивановна",
              "id": 3082,
              "office": 116,
              "login": "shulgavi"
          },
          {
              "name": "Летецкая Наталья Александровна",
              "id": 3080,
              "office": 116,
              "login": "leteckayana"
          },
          {
              "name": "Винникова Ольга Александровна",
              "id": 2653,
              "office": 116,
              "login": "vinnikovaoa"
          },
          {
              "name": "Рашитова Марина Валерьевна",
              "id": 1827,
              "office": 116,
              "login": "rashitovamv"
          },
          {
              "name": "Пупышева Инна Васильевна",
              "id": 1758,
              "office": 116,
              "login": "pupyishevaiv"
          },
          {
              "name": "Базева Ольга Николаевна",
              "id": 1754,
              "office": 116,
              "login": "bazevaon"
          },
          {
              "name": "Соколов Александр Владимирович",
              "id": 1726,
              "office": 116,
              "login": "sokolovav"
          },
          {
              "name": "Манакова Татьяна Анатольевна",
              "id": 1687,
              "office": 116,
              "login": "manakovata"
          },
          {
              "name": "Артюхина Ирина Геннадьевна",
              "id": 1670,
              "office": 116,
              "login": "artyukhinaig"
          },
          {
              "name": "Петрова Светлана Николаевна",
              "id": 1655,
              "office": 116,
              "login": "s.petrova"
          },
          {
              "name": "Мироненко Павел Андреевич",
              "id": 1527,
              "office": 116,
              "login": "mironenkopa"
          },
          {
              "name": "Синицына Любовь Евгеньевна",
              "id": 3767,
              "office": 117,
              "login": "sinicyinale"
          },
          {
              "name": "Меженин Денис Анатольевич",
              "id": 3093,
              "office": 117,
              "login": "mezheninda"
          },
          {
              "name": "Сергеев Егор Александрович",
              "id": 2925,
              "office": 117,
              "login": "sergeevea"
          },
          {
              "name": "Коновалова Надежда Валентиновна",
              "id": 1828,
              "office": 117,
              "login": "konovalovanv"
          },
          {
              "name": "Гончарова Наталья Владимировна",
              "id": 1732,
              "office": 117,
              "login": "goncharovanv"
          },
          {
              "name": "Заворина Ольга Сергеевна",
              "id": 1731,
              "office": 117,
              "login": "skachilova"
          },
          {
              "name": "Данилова Ирина Викторовна",
              "id": 1680,
              "office": 117,
              "login": "danilovaiv"
          },
          {
              "name": "Перфильева Елена Борисовна",
              "id": 1562,
              "office": 117,
              "login": "perfileva"
          },
          {
              "name": "Дунаева Юлия Викторовна",
              "id": 1520,
              "office": 117,
              "login": "dunaeva"
          },
          {
              "name": "Петрова Наталья Анатольевна-Богдана хмельниц",
              "id": 1714,
              "office": 122,
              "login": "petrovan"
          },
          {
              "name": "Падчеров Денис Анатольевич-Трудовая",
              "id": 3164,
              "office": 127,
              "login": "padcherov"
          },
          {
              "name": "Хрущ Владимир Вениаминович",
              "id": 1957,
              "office": 127,
              "login": "khruschvv"
          },
          {
              "name": "Ольховский Алексей Александрович",
              "id": 3892,
              "office": 129,
              "login": "olkhovskiyaa"
          },
          {
              "name": "Харитонкина Татьяна Александровна",
              "id": 3771,
              "office": 129,
              "login": "kharitonkinata"
          },
          {
              "name": "Молодцова Ольга Николаевна",
              "id": 3662,
              "office": 129,
              "login": "molodcovaon"
          },
          {
              "name": "Троценко Кирилл Олегович",
              "id": 3548,
              "office": 129,
              "login": "trocenkoko"
          },
          {
              "name": "Михеечкина Ольга Дмитриевна",
              "id": 2288,
              "office": 129,
              "login": "mikheechkinaod"
          },
          {
              "name": "Калабин Леонид Юрьевич",
              "id": 2257,
              "office": 129,
              "login": "kalabinlyu"
          },
          {
              "name": "Петеримов Сергей Анатольевич",
              "id": 2193,
              "office": 129,
              "login": "peterimovsa"
          },
          {
              "name": "Букреева Снежана Николаевна",
              "id": 1801,
              "office": 129,
              "login": "bukreevasn"
          },
          {
              "name": "Минакова Кристина Андреевна",
              "id": 1942,
              "office": 133,
              "login": "minakovaka"
          },
          {
              "name": "Задара Александр Сергеевич",
              "id": 1081,
              "office": 133,
              "login": "zadaraas"
          },
          {
              "name": "Васильченко Ольга Юрьевна",
              "id": 529,
              "office": 133,
              "login": "vasilchenkooyu"
          },
          {
              "name": "Скоробогатова Елена Анатольевна",
              "id": 3226,
              "office": 166,
              "login": "skorobogatovaea"
          },
          {
              "name": "Бердышев Евгений Владиславович",
              "id": 3185,
              "office": 166,
              "login": "berdyishevev"
          },
          {
              "name": "Кливер Елена Викторовна",
              "id": 3183,
              "office": 166,
              "login": "kliverev"
          },
          {
              "name": "Иванова Екатерина Николаевна",
              "id": 3036,
              "office": 166,
              "login": "ivanovaen"
          },
          {
              "name": "Зернова Ирина Станиславовна",
              "id": 1934,
              "office": 166,
              "login": "zernovais"
          },
          {
              "name": "Бахарев Сергей Сергеевич",
              "id": 1720,
              "office": 166,
              "login": "bakharevss"
          },
          {
              "name": "Королева Марина Викторовна",
              "id": 901,
              "office": 166,
              "login": "korolevamv"
          },
          {
              "name": "Кузнецова Алёна Николаевна",
              "id": 369,
              "office": 166,
              "login": "kuznecovaan"
          },
          {
              "name": "Бердышева Анна Александровна",
              "id": 237,
              "office": 166,
              "login": "berdyishevaaa"
          },
          {
              "name": "Рябкова Светлана Владимировна",
              "id": 3258,
              "office": 168,
              "login": "ryabkovasv"
          },
          {
              "name": "Шевелева Анна Юрьевна",
              "id": 3017,
              "office": 168,
              "login": "sheveleva"
          },
          {
              "name": "Павлютина Кристина Александровна",
              "id": 1843,
              "office": 168,
              "login": "pavlyutinaka"
          },
          {
              "name": "Ильичева Светлана Дмитриевна",
              "id": 1709,
              "office": 168,
              "login": "ilichevasd"
          },
          {
              "name": "Зеленская Марина Владимировна",
              "id": 1708,
              "office": 168,
              "login": "zelenskaya"
          },
          {
              "name": "Буданова Галина Михайловна",
              "id": 1669,
              "office": 168,
              "login": "budanova"
          },
          {
              "name": "Падчеров Денис Анатольевич",
              "id": 3923,
              "office": 181,
              "login": "padcherovda"
          },
          {
              "name": "Теребецкий Яков Валерьевич",
              "id": 3905,
              "office": 181,
              "login": "terebeckiyyav"
          },
          {
              "name": "Сибирякова Жанна Александровна",
              "id": 3712,
              "office": 181,
              "login": "sibiryakovazha"
          },
          {
              "name": "Волхин Михаил Александрович",
              "id": 3569,
              "office": 181,
              "login": "volkhinma"
          },
          {
              "name": "Демидов Роман Алексеевич",
              "id": 2942,
              "office": 181,
              "login": "demidovra"
          },
          {
              "name": "Хохлявина Галина Александровна",
              "id": 2018,
              "office": 181,
              "login": "khokhlyavinaga"
          },
          {
              "name": "Хохлявин Константин Александрович",
              "id": 1497,
              "office": 181,
              "login": "khokhlyavinka"
          },
          {
              "name": "Баженов Олег Евгеньевич",
              "id": 3896,
              "office": 191,
              "login": "bazhenovoe"
          },
          {
              "name": "Самочернова Евгения Федоровна",
              "id": 3841,
              "office": 191,
              "login": "samochernovaef"
          },
          {
              "name": "Сулим Евгения Радомировна",
              "id": 2689,
              "office": 191,
              "login": "sulimer"
          },
          {
              "name": "Турищева Ольга Сергеевна",
              "id": 2241,
              "office": 191,
              "login": "turischevaos"
          },
          {
              "name": "Некрасова Елена Владимировна",
              "id": 2238,
              "office": 191,
              "login": "nekrasovaev"
          },
          {
              "name": "Петрова Алёна Викторовна",
              "id": 2969,
              "office": 194,
              "login": "petrenkoa"
          },
          {
              "name": "Суворова Людмила Алексеевна",
              "id": 1805,
              "office": 194,
              "login": "suvorovala"
          },
          {
              "name": "Ведерников Илья Николаевич",
              "id": 1784,
              "office": 194,
              "login": "vedernikovin"
          },
          {
              "name": "Тихонова Жанна Викторовна",
              "id": 1704,
              "office": 194,
              "login": "tikhonovazh"
          },
          {
              "name": "Капчик Мария Павловна",
              "id": 1697,
              "office": 194,
              "login": "kapchik"
          },
          {
              "name": "Мусатова Галина Валентиновна",
              "id": 1673,
              "office": 194,
              "login": "musatovagv"
          },
          {
              "name": "Ленченко Надежда Николаевна",
              "id": 1659,
              "office": 194,
              "login": "lenchenko"
          },
          {
              "name": "Латонова Татьяна Викторовна",
              "id": 1637,
              "office": 194,
              "login": "latonova"
          },
          {
              "name": "Никитин Анатолий Петрович",
              "id": 1631,
              "office": 194,
              "login": "nikitinap"
          },
          {
              "name": "Захарова Татьяна Юрьевна",
              "id": 1575,
              "office": 194,
              "login": "zaharova"
          },
          {
              "name": "Лячина Ольга Викторовна",
              "id": 3813,
              "office": 195,
              "login": "lyachinaov"
          },
          {
              "name": "Торовин Олег Владимирович",
              "id": 3040,
              "office": 195,
              "login": "torovinov"
          },
          {
              "name": "Титова Наталья Ивановна",
              "id": 3015,
              "office": 195,
              "login": "titovani"
          },
          {
              "name": "Чепизубов Дмитрий Викторович",
              "id": 3003,
              "office": 195,
              "login": "chepizubovdv"
          },
          {
              "name": "Шугаева Галина Владимировна",
              "id": 2938,
              "office": 195,
              "login": "shugaevagv"
          },
          {
              "name": "Пужак Лилия Владимировна",
              "id": 2593,
              "office": 195,
              "login": "puzhaklv"
          },
          {
              "name": "Таценко Анна Геннадьевна",
              "id": 2338,
              "office": 195,
              "login": "tacenkoag"
          },
          {
              "name": "Померова Мария Георгиевна",
              "id": 2337,
              "office": 195,
              "login": "pomerovamg"
          },
          {
              "name": "Сидорова Юлия Анатольевна",
              "id": 1917,
              "office": 195,
              "login": "sidorovayua"
          },
          {
              "name": "Дизендорф Анна Николаевна",
              "id": 1897,
              "office": 195,
              "login": "dizendorfan"
          },
          {
              "name": "Пимонова Оксана Васильевна",
              "id": 1551,
              "office": 195,
              "login": "pimonovaov"
          },
          {
              "name": "Барышева Оксана Юрьевна",
              "id": 1546,
              "office": 195,
              "login": "baryshevao"
          },
          {
              "name": "Цветкова Оксана Анатольевна",
              "id": 1545,
              "office": 195,
              "login": "yanchenkooa"
          },
          {
              "name": "Палатовская Марина Аликовна",
              "id": 1544,
              "office": 195,
              "login": "palatovskayama"
          },
          {
              "name": "Нечипорук Марина Викторовна",
              "id": 1542,
              "office": 195,
              "login": "nechiporuk"
          },
          {
              "name": "Шмельцле Татьяна Валерьевна",
              "id": 1515,
              "office": 195,
              "login": "shmel"
          },
          {
              "name": "Кузнецова Валерия Сергеевна",
              "id": 3790,
              "office": 207,
              "login": "kuznecovavs"
          },
          {
              "name": "Волобуев Иван Евгеньевич",
              "id": 3757,
              "office": 207,
              "login": "volobuevie"
          },
          {
              "name": "Рост Александр Юрьевич",
              "id": 3737,
              "office": 207,
              "login": "rostayu"
          },
          {
              "name": "Алспаев Данияр Сагындыкович",
              "id": 3466,
              "office": 207,
              "login": "alspaevds"
          },
          {
              "name": "Желтов Леонид Игоревич",
              "id": 3355,
              "office": 207,
              "login": "zheltovli"
          },
          {
              "name": "Карпенко Оксана Сергеевна",
              "id": 3865,
              "office": 232,
              "login": "karpenkoos"
          },
          {
              "name": "Сорокина Ольга Николаевна",
              "id": 3848,
              "office": 232,
              "login": "sorokinaon"
          },
          {
              "name": "Кузикова Татьяна Владимировна",
              "id": 1895,
              "office": 232,
              "login": "kuzikovatv"
          },
          {
              "name": "Пистунова Анжелика Юрьевна",
              "id": 1767,
              "office": 232,
              "login": "pistunovaayu"
          },
          {
              "name": "Ушакова Наталья Михайловна",
              "id": 1536,
              "office": 232,
              "login": "ushakova"
          },
          {
              "name": "Ермолина Елена Геннадьевна",
              "id": 1535,
              "office": 232,
              "login": "ermolina"
          },
          {
              "name": "Рябцев Иван Ильич",
              "id": 3956,
              "office": 283,
              "login": "ryabcevii"
          },
          {
              "name": "Дубровин Владимир Александрович",
              "id": 3955,
              "office": 283,
              "login": "dubrovinva"
          },
          {
              "name": "Вдовцов Сергей Владимирович",
              "id": 3954,
              "office": 283,
              "login": "vdovcovsv"
          },
          {
              "name": "Витушкина Юлия Вячеславовна",
              "id": 3953,
              "office": 283,
              "login": "vitushkinayuv"
          },
          {
              "name": "Выходцева Екатерина Андреевна",
              "id": 3952,
              "office": 283,
              "login": "vyikhodcevaea"
          },
          {
              "name": "Желтоусова Арина Сергеевна",
              "id": 3951,
              "office": 283,
              "login": "zheltousovaas"
          },
          {
              "name": "Иванилов Иван Валерьевич",
              "id": 3950,
              "office": 283,
              "login": "ivaniloviv"
          },
          {
              "name": "Комбаров Сергей Алексеевич",
              "id": 3944,
              "office": 283,
              "login": "kombarovsa"
          },
          {
              "name": "Храпов Евгений Евгеньевич",
              "id": 3938,
              "office": 283,
              "login": "khrapovee"
          },
          {
              "name": "Лабутин Александр Алексеевич",
              "id": 3937,
              "office": 283,
              "login": "labutinaa"
          },
          {
              "name": "Алиев Мурад Махарат оглы",
              "id": 3911,
              "office": 283,
              "login": "alievmm"
          },
          {
              "name": "Крапивина Наталья Алексеевна",
              "id": 3906,
              "office": 283,
              "login": "krapivinana"
          },
          {
              "name": "Подколзин Владислав Владимирович",
              "id": 3900,
              "office": 283,
              "login": "podkolzinvv"
          },
          {
              "name": "Диль Лидия Андреевна",
              "id": 3897,
              "office": 283,
              "login": "dilla"
          },
          {
              "name": "Сильнягина Евгения Сергеевна",
              "id": 3877,
              "office": 283,
              "login": "silnyaginaes"
          },
          {
              "name": "Андриянова Александра Сергеевна",
              "id": 3873,
              "office": 283,
              "login": "andriyanovaas"
          },
          {
              "name": "Савченко Николай Николаевич",
              "id": 3857,
              "office": 283,
              "login": "savchenkonn"
          },
          {
              "name": "Карбовский Родион Сергеевич",
              "id": 3856,
              "office": 283,
              "login": "karbovskiyrs"
          },
          {
              "name": "Ситников Алан Людвигович",
              "id": 3845,
              "office": 283,
              "login": "sitnikoval"
          },
          {
              "name": "Жучков Владимир Сергеевич",
              "id": 3844,
              "office": 283,
              "login": "zhuchkovvs"
          },
          {
              "name": "Федоров Юрий Витальевич",
              "id": 3833,
              "office": 283,
              "login": "fedorovyuv"
          },
          {
              "name": "Цырендоржыев Зоригто Баторович",
              "id": 3817,
              "office": 283,
              "login": "cyirendorzhyievzb"
          },
          {
              "name": "Логвиненко Александр Николаевич",
              "id": 3760,
              "office": 283,
              "login": "logvinenkoan"
          },
          {
              "name": "Токарев Димитрий Александрович",
              "id": 3716,
              "office": 283,
              "login": "tokarevda"
          },
          {
              "name": "Руденко Ольга Владимировна",
              "id": 3697,
              "office": 283,
              "login": "rudenkoov"
          },
          {
              "name": "Чащина Нина Викторовна",
              "id": 2492,
              "office": 283,
              "login": "chaschinanv"
          },
          {
              "name": "Мищенко Иван Владимирович",
              "id": 2198,
              "office": 262,
              "login": "mischenkoiv"
          }
      ],
      "office": [
          {
              "name": "Фасадная",
              "id": 56
          },
          {
              "name": "Зорге, 1",
              "id": 63
          },
          {
              "name": "Авиастроителей, 13",
              "id": 66
          },
          {
              "name": "Б.Хмельницкого 5",
              "id": 67
          },
          {
              "name": "Отдел аренды",
              "id": 68
          },
          {
              "name": "Станиславского, 20",
              "id": 69
          },
          {
              "name": "Служба клиентского сервиса",
              "id": 70
          },
          {
              "name": "Красный проспект, 51",
              "id": 72
          },
          {
              "name": "Д.Ковальчук",
              "id": 73
          },
          {
              "name": "Бердск 2-ой отдел продаж",
              "id": 78
          },
          {
              "name": "Станиславского, 2",
              "id": 83
          },
          {
              "name": "Красный проспект, 51/2 1ОП",
              "id": 84
          },
          {
              "name": "Гоголя 39",
              "id": 85
          },
          {
              "name": "Столетова",
              "id": 86
          },
          {
              "name": "Новосибирская, 24",
              "id": 88
          },
          {
              "name": "Б.Богаткова",
              "id": 89
          },
          {
              "name": "Лазурная, 4",
              "id": 94
          },
          {
              "name": "Ватутина 33",
              "id": 96
          },
          {
              "name": "Морской Проспект 38",
              "id": 97
          },
          {
              "name": "Блюхера 28",
              "id": 98
          },
          {
              "name": "9 Гвардейской дивизии",
              "id": 100
          },
          {
              "name": "Отдел коммерческой недвижимости",
              "id": 102
          },
          {
              "name": "Ленина 73",
              "id": 107
          },
          {
              "name": "Красный проспект, 81",
              "id": 108
          },
          {
              "name": "Рассветная 8",
              "id": 110
          },
          {
              "name": "Учительская 19",
              "id": 111
          },
          {
              "name": "Зорге, 73",
              "id": 114
          },
          {
              "name": "Станиславского, 31",
              "id": 115
          },
          {
              "name": "Комсомольская, 3",
              "id": 116
          },
          {
              "name": "Дзержинского, 30",
              "id": 117
          },
          {
              "name": "Б.Хмельницкого 68",
              "id": 122
          },
          {
              "name": "Трудовая, 3 2-й отдел продаж",
              "id": 127
          },
          {
              "name": "Маяковского,17",
              "id": 129
          },
          {
              "name": "Отдел продаж новостроек",
              "id": 133
          },
          {
              "name": "Блюхера 13",
              "id": 166
          },
          {
              "name": "Выборная",
              "id": 168
          },
          {
              "name": "Красный проспект, 184 1ОП",
              "id": 181
          },
          {
              "name": "Бердск",
              "id": 191
          },
          {
              "name": "Восход 11",
              "id": 194
          },
          {
              "name": "Гребенщикова 9 1 ОП",
              "id": 195
          },
          {
              "name": "Красный проспект, 184 2й ОП",
              "id": 207
          },
          {
              "name": "Красный проспект, 184 3й ОП",
              "id": 231
          },
          {
              "name": "Красный проспект, 184 4й ОП",
              "id": 232
          },
          {
              "name": "Красный проспект 184",
              "id": 283
          }
      ],
      "viewedOfficeId": 56
  })
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [data])


  return (
    <>
      {
        !loading &&
        <>
          <Header
            officeList={data?.office ? data?.office : []}
            currentOfficeId={data.viewedOfficeId}
            rights={data?.rights ? data?.rights : ''}
          />
          <TableList
            list={data?.objectsData ? data?.objectsData : []}
            subordinated={data?.subordinated ? data?.subordinated : []}
            rights={data?.rights ? data?.rights : ''}
          />
        </>
      }
    </>
  )
}