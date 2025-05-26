import Landing from '../pages/landing.jsx';

function Navbar() {
   return (
     <nav className='flex justify-between items-center bg-black text-white p-5'>
       <h1 className="text-xl font-bold ">My Website</h1>
       <div className='flex justify-between items-center space-x-5 font-semibold'>
         <a href="/">Home</a>
         <a href="/login">Login</a>
         <a href="/about">About</a>
       </div>
     </nav>
   );
}
export default Navbar