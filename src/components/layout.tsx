import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: any) => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow px-4 py-8">{children}</main>
        <Footer  />
      </div>
    </div>
  );
};

export default Layout;
