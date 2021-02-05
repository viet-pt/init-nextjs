import React, { useEffect, useState } from 'react';
import './style.scss';
import Spin from 'antd/es/spin';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const ProgressTurn = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setLoading(false);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  if (!loading) {
    return null;
  }

  return (
    <div className="progress-turn">
      <Spin size="large" />
    </div>
  )
}

export default React.memo(ProgressTurn);
