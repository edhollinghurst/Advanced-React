import Items from '../components/Items';

// Stateless functional component.
const Home = (props) => (
  <div>
    <Items page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Home;
