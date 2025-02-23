import Link from "next/link";
import { Navbar } from "./navbar";
import { TemplateGallery } from "./templates-gallery";

const Home = () => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 b-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
     <TemplateGallery/>
      </div>
    </div>
  );
};

export default Home;
