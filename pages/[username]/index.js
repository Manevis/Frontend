import React from 'react';
import Layout from '../../components/Layout';

const UserPage = props => {
  console.log(props);

  return (
    <Layout title="صفحه آقای فلانی">
      <div>
        <h1>User page</h1>
      </div>
    </Layout>
  )
};

export default UserPage;
