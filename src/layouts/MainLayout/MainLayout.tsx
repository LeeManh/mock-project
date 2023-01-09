import Footer from "components/Footer";
import HeaderMainLayout from "components/HeaderMainLayout";

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <HeaderMainLayout />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
