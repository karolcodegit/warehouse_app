import LoginLayout from "./LoginLayout";
import MainLayout from "./MainLayout";

const WithLayout = ({ component: Component, layout: Layout, ...rest }) => {
    return (
      <Layout>
        <Component {...rest} />
      </Layout>
    );
  };
  
  const RenderRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return <WithLayout component={Component} layout={Layout} {...rest} />;
  };

export default RenderRoute;
