'use strict'

const customers = ['Max', 'Manuel', 'Anna'];
const activeCustomers = ['Max', 'Manuel'];

// const inactiveCustomers = customers - activeCustomers;
const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers)