import SingleItem from '../components/SingleItem';

// Stateless functional component.
const Item = (props) => (
  <div>
    <SingleItem id={props.query.id} />
  </div>
);

export default Item;
