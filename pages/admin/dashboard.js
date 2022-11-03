import Navbar from '../../components/_App/Navbar';
import Footer from '../../components/_App/Footer';
import PageTitle from '../../components/Common/PageTitle';
import DashboardArea from '../../components/Admin/DashboardArea';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';

const Dashboard = ({products, totalPages, user}) => {
    console.log('dash', products);
    return (
        <>
            <Navbar user={user}/>

            <PageTitle
                pageTitle="Dashboard" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Dashboard"
            />

            <DashboardArea 
                products={products} 
                totalPages={totalPages}
            />

            <Footer />
        </>
    );
};

Dashboard.getInitialProps = async ctx => {
    const page = ctx.query.page ? ctx.query.page : "1"
  
    const payload = {
        params: { 
            page, 
            limit: 100
        }
    }
  
    const url = `${baseUrl}/api/v1/products`
    const response = await axios.get(url, payload)
    return response.data
}
export default Dashboard;
