import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center text-4xl">This is home page</h1>

      <h2 className="text-3xl text-center">Image using image tag</h2>
      <img
        className="mx-auto"
        src={
          "https://cdn.pixabay.com/photo/2023/04/05/09/17/spring-7901015_1280.jpg"
        }
        width={500}
        height={500}
        alt="Next Image"
      />
      <h2 className="text-3xl text-center">
        Image using nextJS image component
      </h2>
      <Image
        src={
          "https://cdn.pixabay.com/photo/2023/04/05/09/17/spring-7901015_1280.jpg"
        }
        width={500}
        height={500}
        alt="Next Image"
        className="mx-auto"
      />
    </div>
  );
};

export default HomePage;
