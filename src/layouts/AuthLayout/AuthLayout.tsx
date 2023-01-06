import Footer from "components/Footer";
import HeaderAuthLayout from "components/HeaderAuthLayout";

const AuthLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <HeaderAuthLayout />

      {children}

      <Footer />
    </div>
  );
};

export default AuthLayout;
