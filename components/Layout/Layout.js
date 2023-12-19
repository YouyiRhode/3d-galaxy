import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Layout.module.scss';

const Layout = ({children}) => {
    const titles = [ 'About', 'Portfolio', 'Contact','Resume'];
    return ( 
        <>
           <div className="content" style={{position:'relative'}}>
                <NavBar ownerName= 'Vivian Rhode' titles={titles}>
                    <MobileMenu titles={titles}/>
                </NavBar>
                 {children}
                <Footer ownerName= 'Vivian Rhode'/>
            </div>
        </>
     );
}
 
export default Layout;
