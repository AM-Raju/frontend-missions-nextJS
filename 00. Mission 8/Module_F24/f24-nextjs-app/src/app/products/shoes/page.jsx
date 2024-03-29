import Link from "next/link";

const ShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 30,
    },
  });
  const shoes = await res.json();

  return (
    <div>
      <div className="flex justify-around max-w-7xl mx-auto">
        {shoes.slice(0, 3).map((shoe) => (
          <div key={shoe?.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">${shoe.price}</div>
              </h2>
              <p>{shoe?.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary px-5">
                  Fashion
                </button>
                <button className="btn btn-outline btn-primary px-5">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-10">
        <Link href="/products/all-shoes">
          <button className="btn btn-outline btn-primary px-5">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoesPage;
