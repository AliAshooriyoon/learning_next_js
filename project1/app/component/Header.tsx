'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const path = usePathname();
  console.log(path);
  const [adresse, setAdresse] = useState('');
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
      <div className="text-center cursor-pointer mt-4 text-cyan-500 text-2xl flex gap-8 items-center justify-around w-[40%] mx-auto">
        {/* Header ({adresse}) */}
        <span className={adresse == "home" ? "text-orange-600" : undefined}>
          <Link href={'/'}>Haus</Link>
        </span>
        <span className={adresse == "shop" ? "text-orange-600" : undefined}>

          <Link href={'/shop'}>Shop</Link>
        </span>
        <span className={adresse == "about" ? "text-orange-600" : undefined}>

          <Link href={'/about-us'}>Über uns</Link>
        </span>
      </div>
    </>
  )
}
export default Header;
