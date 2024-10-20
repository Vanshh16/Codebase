import React from "react";

function Carousel() {
  return (
    <div className="rounded-xl bg-gradient-to-b from-slate-950 to-slate-900 p-4 md:p-8 flex flex-col items-center mx-auto space-y-4">

    <div className="carousel space-x-4 carousel-center rounded-box">
      <div className="carousel-item h-[15rem] md:h-[30rem]">
        <img src="/assets/gallery1.jpg" alt="Pizza" />
      </div>
      <div className="carousel-item h-[15rem] md:h-[30rem]">
        <img src="/assets/gallery2.jpg" alt="Pizza" />
      </div>
      <div className="carousel-item h-[15rem] md:h-[30rem]">
        <img src="/assets/gallery3.jpg" alt="Pizza" />
      </div>
      <div className="carousel-item h-[15rem] md:h-[30rem]">
        <img src="/assets/gallery4.jpg" alt="Pizza" />
      </div>
      {/* <div className="carousel-item h-[30rem]">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
  </div>
  <div className="carousel-item h-[30rem]">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
  </div>
  <div className="carousel-item h-[30rem]">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Pizza" />
  </div> */}
    </div>
    </div>
  );
}

export default Carousel;
