import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
    return (
        <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;