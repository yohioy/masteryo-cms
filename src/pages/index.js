import { useEffect } from 'react';
import Router from 'next/router';
import getRoutes from '../lib/api/getRoutes';

function Index({ routes }) {
  useEffect(() => {
    localStorage.removeItem('routes');
    localStorage.setItem('routes', JSON.stringify(routes));
  }, [routes]);

  useEffect(() => {
    Router.push('/dashboard');
  });

  return <div />;
}

export async function getServerSideProps() {
  const routes = await getRoutes();

  return {
    props: {
      routes: routes
    }
  };
}

export default Index;
