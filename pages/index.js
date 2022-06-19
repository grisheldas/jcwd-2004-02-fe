import Head from "next/head";
import Footer from "../components/Footer";
import ModalInputAdmin from "./admin/admin";
import ModalAdminEditDetail from "./admin/adminEditDetail";
import ModalAdminEditFoto from "./admin/adminEditFoto";
import ModalAdminEditStok from "./admin/adminEditStok";
import AddProductSuccess from "./admin/addProductSuccess";
import Profile from "./profile/profile";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Footer</title>
        <link rel="icon" href="/pro.ico" />
      </Head>
      {/* <ModalInputAdmin />
      <ModalAdminEditDetail />
      <ModalAdminEditStok />
      <ModalAdminEditFoto />
      <AddProductSuccess /> */}
      <Profile />
      {/* <Footer /> */}
    </div>
  );
}
