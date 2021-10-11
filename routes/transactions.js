const express = require('express');
const Router = express.Router();

const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions')

Router.route('/').get(getTransactions);
Router.route('/').post(addTransaction);
Router.route('/:id').delete(deleteTransaction);


module.exports = Router;