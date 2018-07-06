require('seedrandom');

module.exports = () => {
// Seed the random number generator so it
// returns the same set of orders every time.
  Math.seedrandom('2018-03-20');

  const orders = [];

// Start around a year ago.
  const startDate = 1490000000000;
  let orderId = 1000;

// Loop through dates until now, incrementing date and ID randomly.
  for (let timestamp = startDate; timestamp < Date.now(); timestamp += Math.random() * 5000000) {
    orderId += 1 + Math.round(Math.random());

    const completedAt = new Date(timestamp);

    orders.push({
      id: orderId,
      total: Math.ceil(Math.random() * 100) * 100,
      completed_at: completedAt.toISOString()
    })
  }

  return orders;
};
