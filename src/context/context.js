import React, { useReducer, createContext } from 'react'
import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
  {
    amount: 6565161,
    category: 'House',
    type: 'Expense',
    date: '2021-08-11',
    id: '40bf15ec-5895-4165-9359-f0a9f976d3df',
  },
  {
    amount: 100,
    category: 'Salary',
    type: 'Income',
    date: '2021-08-11',
    id: '81bb1f99-710d-45cd-99ba-2dc6a2f69255',
  },
]

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState)

  // Action Creators
  const deleteTransaction = (id) =>
    dispatch({ type: 'DELETE_TRANSACTION', payload: id })
  const addTransaction = (transaction) =>
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === 'Income'
      ? acc + currVal.amount
      : acc - currVal.amount
  }, 0)
  // console.log(transactions)
  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  )
}
