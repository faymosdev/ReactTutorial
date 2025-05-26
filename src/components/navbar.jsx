import Landing from '../pages/landing.jsx';

function Navbar() {
   return (
     <nav className="flex justify-between items-center bg-black text-white p-10 border-b-2 border-b-pink-500">
       <h1 className="text-2xl font-bold text-blue-300 ">My Website</h1>
       <div className="flex justify-between items-center space-x-5 font-semibold ">
         <a href="/" className="hover:text-blue-400">
           Home
         </a>
         <a href="/login" className="hover:text-blue-400">
           Login
         </a>
         <a href="/about" className="hover:text-blue-400">
           About
         </a>
       </div>
     </nav>
   );
}
export default Navbar