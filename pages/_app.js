import '../styles/bootstrap.min.css';
import '../styles/animate.min.css';
import '../styles/fontawesome.min.css';
import '../styles/footer.css';
import '../styles/header.css';
import 'react-tabs/style/react-tabs.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import "swiper/css";
import "swiper/css/bundle";
// Global Style
import '../styles/style.css';
import '../styles/responsive.css';
  
import { Provider } from 'react-redux';
import Layout from '../components/_App/Layout';
import axios from 'axios';
import { parseCookies, destroyCookie } from 'nookies';
import { redirectUser } from '../utils/auth';
import baseUrl from '../utils/baseUrl';
import { useStore } from '../store';

const MyApp = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState);
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const { luan_token } = parseCookies(ctx);
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    if (!luan_token) {
        // if a user not logged in then user can't access those pages
        const isProtectedRoute =
        ctx.pathname === '/profile' ||
        ctx.pathname === '/product/create' ||
        ctx.pathname === '/admin/dashboard' ||
        ctx.pathname === '/admin/orders/my-orders' ||
        ctx.pathname === '/admin/orders';

        if (isProtectedRoute) {
            redirectUser(ctx, '/authentication');
        }
    } else {
        // if a user logged in then user can't access those pages
        const ifLoggedIn = ctx.pathname === '/authentication';
        if (ifLoggedIn) {
            redirectUser(ctx, '/');
        }
        try {
            const payload = { headers: { Authorization: luan_token } };
            const url = `${baseUrl}/api/v1/auth/account`;
            const response = await axios.get(url, payload);
            const user = response.data;

            const isAdmin = user.role === 'admin';

            const isNotPermitted =
                !isAdmin &&
                (ctx.pathname === '/product/create' ||
                ctx.pathname === '/admin/orders' ||
                ctx.pathname === '/admin/dashboard');

            if (isNotPermitted) {
                redirectUser(ctx, '/');
            }

            // console.log(user)
            // If user status disabled then user autometically logged out
            if (!user || !user.active) {
                destroyCookie(ctx, 'luan_token');
            }
            pageProps.user = user;
        } catch (error) {
            // invalid luan_token
            // console.log(error)
            destroyCookie(ctx, 'luan_token');
        }
    }

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        pageProps,
    };
};

export default MyApp;