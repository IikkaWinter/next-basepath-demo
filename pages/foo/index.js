import Link from 'next/link';

const Foo = (query) => (
  <>
    <pre>{JSON.stringify(query)}</pre>
    <ul>
      <li>
        <Link as='/foo' href='/foo?param=default'>
          /param1
        </Link>
      </li>
      <li>
        <Link as='/foo?param=bar' href='/foo?param=bar'>
          /foo?param=bar
        </Link>
      </li>
      <li>
        <Link href='/foo?param=foobar'>/foo?param=bar</Link>
      </li>
    </ul>
  </>
);

export const getServerSideProps = ({ query }) => {
  console.log('query', query);
  return { props: { query } };
};

export default Foo;
