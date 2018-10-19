import UpdateItem from '../components/UpdateItem';

const Sell = ({ query }) => (
  <div>
    <p>Sell!!</p>
    <UpdateItem id={query.id} />
  </div>
);

export default Sell;
