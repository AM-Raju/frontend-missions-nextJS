import React from "react";

const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl text-center mb-10">All Shoes</h1>
      <div className="grid grid-cols-3 gap-4">
        {shoes.map((shoe) => (
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
    </div>
  );
};

export default AllShoesPage;
