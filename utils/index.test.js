import { reduceNumberOfOrders, reduceTotalValueOfOrders } from './index';

const rawPayload = {
  data: [
    { id: 24991, total: 1300, completed_at: '2018-06-10T16:56:08.325Z' },
    { id: 24992, total: 1000, completed_at: '2018-06-10T16:45:08.325Z' },
    { id: 24996, total: 3400, completed_at: '2018-06-20T18:53:03.332Z' },
    { id: 25001, total: 7200, completed_at: '2018-06-30T21:37:49.279Z' }
  ]
};

describe('Test reduceNumberOfOrders()', () => {
  const expected = {
    '6/10': 2,
    '6/20': 1,
    '6/30': 1
  };

  it('should return a new obj', () => {
    expect(reduceNumberOfOrders(rawPayload)).toEqual(expected);
  });
});

describe('Test reduceTotalValueOfOrders()', () => {
  const expected = {
    '6/10': 2300,
    '6/20': 3400,
    '6/30': 7200
  };

  it('should return a new obj', () => {
    expect(reduceTotalValueOfOrders(rawPayload)).toEqual(expected);
  });
});
