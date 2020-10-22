import Link from 'next/link';

const Isg = ({ page }) => (
  <>
    <pre>ISG Page: {page}</pre>
    <ul>
      <li>
        <Link href='/isg/page1'>Page 1</Link>
      </li>
      <li>
        <Link href='/isg/page2'>Page 2</Link>
      </li>
      <li>
        <Link href='/isg/page3'>Page 3</Link>
      </li>
    </ul>
  </>
);

export default Isg;

export async function getStaticPaths() {
  const paths = [{ params: { page: 'page1' } }, { params: { page: 'page2' } }];

  return {
    paths,
    fallback: 'unstable_blocking',
  };
}

export async function getStaticProps(props) {
  const {
    params: { page },
  } = props;
  console.log('params', page);

  return {
    props: {
      page,
    },
    revalidate: 1 * 60 * 15,
  };
}
