import TransactionHistoryItems from './TransactionHistoryItems';
import PropTypes from 'prop-types';
import styled from './transactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={styled.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => (
          <TransactionHistoryItems
            type={el.type}
            amount={el.amount}
            currency={el.currency}
            key={el.id}
          />
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
