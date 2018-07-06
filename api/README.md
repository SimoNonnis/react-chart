# Mock Orders API

Real quick, this endpoint returns a bunch of random but consistent orders in the following format:

```
{
  id: <int>,
  total: <int>,
  completed_at: <string>
}
```

The IDs and dates increment somewhat randomly but are contained within the date range provided.

The `generateOrders.js` file actually generates the orders and uses the `seedrandom` package to seed `Math.random()` so that the returned orders are consistent between calls to the endpoint.

Deploy to Google Cloud Functions or host with node.
