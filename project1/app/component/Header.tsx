'use client'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const path = usePathname()
  console.log(path);
  const [adresse, setAdresse] = useState('')
  useEffect(() => {
    if (path.startsWith('/shop')) {
      setAdresse('shop');
    } else if (path == '/') {
      setAdresse('home');
    } else if (path.startsWith('/about-us')) {
      setAdresse('about');
    }
  }, [path])
  return (
    <>
      <div className="text-center mt-4 text-cyan-500 text-2xl">
        Header ({adresse})
      </div>
    </>
  )
}
export default Header;
