import { JSX } from "react";
import Link from "next/link";
const Shop: () => JSX.Element = () => {
  return (
    <>
      <div className="shop indent-4 text-center">Shop</div>
      <p className="text-center text-2xl text-cyan-600">
        <Link href="/shop/product-1">Product1</Link>
      </p>
      <br />
      <p className="text-center text-2xl text-cyan-600">
        <Link href="/shop/product-2"> Product2 </Link>
      </p>
      <h3 className="text-center text-4xl text-orange-700 mt-6">
        <Link className="" href="/">
          Home
        </Link>
      </h3>
    </>
  );
};
export default Shop;
