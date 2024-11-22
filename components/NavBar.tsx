import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className='bg-white text-black py-4 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-2xl font-bold'>
            <Link href='/'>PENZILLA</Link>
          </div>
          <ul className='flex space-x-6'>
            <li>
              <Link href='/'>
                <div className='hover:underline'>Home</div>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <div className='hover:underline'>About</div>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <div className='hover:underline'>Contact</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
