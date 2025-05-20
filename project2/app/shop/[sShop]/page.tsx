import Link from "next/link";
const Product = ({ params }) => {
  return (
    <>
      <div className="product text-center mt-12">
        Produkt ist : {params.sShop}{" "}
      </div>

      <p className="text-center">
        <Link className="text-3xl" href="/shop">
          Go Back
        </Link>
      </p>
    </>
  );
};
export default Product;
