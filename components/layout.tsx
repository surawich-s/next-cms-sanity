import Footer from "./footer";
import Meta from "./meta";
import Navbar from "./navbar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Meta />
            <Navbar />
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
