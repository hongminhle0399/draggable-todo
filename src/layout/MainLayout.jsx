import Header from "../components/TheHeader";
import Footer from "../components/TheFooter";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
