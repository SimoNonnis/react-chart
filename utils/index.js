import getMonth from 'date-fns/get_month';
import getDate from 'date-fns/get_date';

export function getData(startDate) {
  return fetch(
    `https://us-central1-wi-q-145611.cloudfunctions.net/mockOrdersAPI?start=${startDate.toISOString()}`
  ).then(response => response.json());
}

export function reduceNumberOfOrders(res) {
  return res.data.reduce((totals, order) => {
    const month = getMonth(new Date(order.completed_at)) + 1;
    const date = getDate(new Date(order.completed_at));
    const key = `${month}/${date}`;

    totals[key] = totals[key] ? totals[key] + 1 : 1;
    return totals;
  }, {});
}

export function reduceTotalValueOfOrders(res) {
  return res.data.reduce((totals, order) => {
    const month = getMonth(new Date(order.completed_at)) + 1;
    const date = getDate(new Date(order.completed_at));
    const key = `${month}/${date}`;

    totals[key] = totals[key] ? totals[key] + order.total : order.total;
    return totals;
  }, {});
}
