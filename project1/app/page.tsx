import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <p>
          <h2 className='text-center text-3xl mt-4'>

            Haus Seite
            <p>
              <Link href={'/shop'}>Shop</Link>
            </p>
          </h2>
        </p>
      </div>
    </>
  );
}
