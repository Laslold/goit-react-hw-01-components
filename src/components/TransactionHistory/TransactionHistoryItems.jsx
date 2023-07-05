import PropTypes from "prop-types";
export default function TransactionHistoryItems(props) {
  const { currency, amount, type } = props;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
TransactionHistoryItems.protoType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
