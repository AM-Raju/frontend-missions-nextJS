const ShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();

  return (
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
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{shoe?.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">${shoe?.price}</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoesPage;
