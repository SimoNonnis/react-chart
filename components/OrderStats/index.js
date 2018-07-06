import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import subWeeks from 'date-fns/sub_weeks';
import subMonths from 'date-fns/sub_months';

import { Select } from '../Select';
import { Chart } from '../Chart';
import {
  getData,
  reduceNumberOfOrders,
  reduceTotalValueOfOrders
} from '../../utils';

import { Container, ChartWrapper, Loader } from './style';

export class OrderStats extends Component {
  state = {
    lastWeek: {
      numberOfOrders: {},
      totalValueOfOrders: {}
    },
    lastMonth: {
      numberOfOrders: {},
      totalValueOfOrders: {}
    },
    selectedView: 'week'
  };

  componentDidMount() {
    // Get last week
    const startDateLastWeek = subWeeks(new Date(), 1);
    // Fetch data lastWeek
    const dataLastWeek = getData(startDateLastWeek);

    dataLastWeek.then(res =>
      this.setState({
        ...this.state,
        lastWeek: {
          numberOfOrders: reduceNumberOfOrders(res),
          totalValueOfOrders: reduceTotalValueOfOrders(res)
        }
      })
    );
  }

  handleSelectView = ({ target }) => {
    this.setState({
      ...this.state,
      selectedView: target.value
    });

    target.blur();

    if (target.value === 'month') {
      const { numberOfOrders, totalValueOfOrders } = this.state.lastMonth;

      if (isEmpty(numberOfOrders) && isEmpty(totalValueOfOrders)) {
        // Get last month
        const startDateLastMonth = subMonths(new Date(), 1);
        // Fetch data
        const dataLastMonth = getData(startDateLastMonth);

        dataLastMonth.then(res =>
          this.setState({
            ...this.state,
            lastMonth: {
              numberOfOrders: reduceNumberOfOrders(res),
              totalValueOfOrders: reduceTotalValueOfOrders(res)
            }
          })
        );
      }
    }
  };

  render() {
    const { selectedView, lastWeek, lastMonth } = this.state;
    const numberOfOrders =
      selectedView === 'week'
        ? lastWeek.numberOfOrders
        : lastMonth.numberOfOrders;
    const totalValueOfOrders =
      selectedView === 'week'
        ? lastWeek.totalValueOfOrders
        : lastMonth.totalValueOfOrders;

    return (
      <Container>
        <Select
          label="Choose date range"
          value={selectedView}
          onChange={this.handleSelectView}
        />
        <ChartWrapper>
          {isEmpty(numberOfOrders) ? (
            <Loader>...Loading</Loader>
          ) : (
            <Chart data={numberOfOrders} label="# of Orders" />
          )}
        </ChartWrapper>
        <ChartWrapper>
          {isEmpty(totalValueOfOrders) ? (
            <Loader>...Loading</Loader>
          ) : (
            <Chart data={totalValueOfOrders} label="Total value" />
          )}
        </ChartWrapper>
      </Container>
    );
  }
}
