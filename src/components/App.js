

import ExpenseItem from './ExpenseItem';


const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  return (
    <div>
      <h2 >Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount} />
      <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount} />
      <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount} />

    </div>
  );
}

export default App;
