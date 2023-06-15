import { Outlet } from "react-router-dom";
import Layout from "../components/shared/Layout";

function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default Root;
