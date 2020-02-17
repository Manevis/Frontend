import 'bootstrap/scss/bootstrap-reboot.scss'
import 'bootstrap/scss/bootstrap-grid.scss'
import '../assets/style/styles.scss'
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => (
  <Layout seo={pageProps.SEO}>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
