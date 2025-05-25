import logoFile from "@/public/icons8-lion-and-sun-100.png";
import classes from "./headerStyles.module.css";
import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <>
      <div className="text-center text-2xl mt-4">
        <Image className={classes.pic} src={logoFile} alt=""></Image>
        <p className="title_header">Header</p>
      </div>
      <Link href={'/s'}>sdsfvs</Link>
      <p>
<h3></h3>
      </p>
      </>
  );
};
