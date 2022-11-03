import Navbar from '../components/_App/Navbar';
import PageTitle from '../components/Common/PageTitle';
import Footer from '../components/_App/Footer';
import ProfileArea from '../components/Profile/ProfileArea';

const MyProfile = ({ user }) => {
    return (
        <>
            <Navbar user={user} />
            
            <PageTitle
                pageTitle="My Profile" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="My Profile"
            />

            <ProfileArea />

            <Footer />
        </>
    );
};

export default MyProfile;
