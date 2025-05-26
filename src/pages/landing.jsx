import Navbar from "../components/navbar.jsx";

function Landing() {
  return (
    <>
      <Navbar />
      <div
        className="bg-blue-300 text-lg width-full h-screen "
        style={{ padding: "4rem", textAlign: "center" }}
      >
        <h1 className="font-semibold text-3xl pt-10 text-pink-500">Welcome to Our Website!</h1>
        <p className="mb-10 pt-7 text-gray-900 text-xl">
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
