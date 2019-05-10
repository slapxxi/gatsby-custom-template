import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Index Page</h1>
      <p>Hello, world!</p>
    </Layout>
  );
}

export default IndexPage;
