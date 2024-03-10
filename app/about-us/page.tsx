import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white mb-40">
      <div className="container mx-auto">
        <h1 className="main-color mt-20 px-4 mb-4 text-[45px] md:text-[55px]">
          About Us
        </h1>
        <p className="mb-6 text-3xl px-4 md:text-2xl leading-10">
          Prival excels as a vacation home rental company, harmonizing property
          portfolios with facility management and operational partners for a
          streamlined and effective approach.
        </p>
        <div className="">
          <img
            src="/images/aboutUs/about-us.png"
            className="object-cover h-[700px] w-[100%]"
          />
        </div>
        <h1 className="main-color mt-10 px-4 mb-4 text-[45px] md:text-[55px]">
          Vacation Homes Rental
        </h1>
        <p className="mb-6 text-4xl md:text-2xl px-4 leading-10">
          Vacation home rental involves shorter leases on furnished units,
          transforming your property into a hotel apartment and yielding higher
          profitability.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;