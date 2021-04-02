import Maintain from 'components/page/Maintain/Maintain';

function Error({ statusCode }) {
  return (
    <Maintain />
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
}

export default Error;