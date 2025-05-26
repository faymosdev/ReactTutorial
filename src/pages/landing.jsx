import Navbar from "../components/navbar.jsx";

function Landing() {
  return (
    <>
      <Navbar />
      <div
        className="bg-blue-300 text-lg "
        style={{ padding: "4rem", textAlign: "center" }}
      >
        <h1 className="font-bold">Welcome to Our Website!</h1>
        <p className="mb-5 pt-4 text-gray-900">
          This is a simple landing page built with React. Explore our features
          and learn more about us.
        </p>
        <a
          href="/login"
          style={{ marginRight: "1rem" }}
          className="border-2 bg-black p-2 rounded text-white border-blue-500"
        >
          Login
        </a>
        <a
          href="/about"
          className="border-2 bg-black p-2 rounded text-white border-blue-500"
        >
          About Us
        </a>
      </div>
    </>
  );
}

export default Landing;
