import GlobalStyles from "globalStyle.styled";
import useRouteElement from "hooks/useRouteElement";

const App = () => {
  const elements = useRouteElement();

  return (
    <>
      {elements}
      <GlobalStyles />
    </>
  );
};

export default App;
