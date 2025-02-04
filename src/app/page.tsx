import Link from "next/link";

const Home = () => {
  return <div className=" flex min-h-screen items-center justify-center">
    <p>Hello World</p>
     Click <Link href="/documents/123"><span className="text-blue-500 underline">phere</span></Link> to go to DocumentId
  </div>;
};

export default Home;
