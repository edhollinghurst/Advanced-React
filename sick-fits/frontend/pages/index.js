import Link from 'next/link';

// Stateless functional component.
const Home = props => (
  <div>
    <p>Hey!!</p>
    <Link href="/sell">
      <a>Sell!!!</a>
    </Link>
  </div>
);

export default Home;