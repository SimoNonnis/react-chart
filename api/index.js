const orders = require('./generateOrders');

module.exports.getOrders = (req, res) => {
  const fromDate = req.query.start;
  const toDate = req.query.end;

  const emulateSlowNetwork = !req.query.fast;

  const filteredOrders = orders().filter(order => {
    if (fromDate && order.completed_at < fromDate) return false;
    if (toDate && order.completed_at > toDate) return false;
    return true;
  });

  setTimeout(() => {
    res.set('Access-Control-Allow-Origin', '*')
       .json({ data: filteredOrders });
  }, emulateSlowNetwork ? 3000 : 0);
};
