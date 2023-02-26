import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-3 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Booking Rentals works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Plus</p>
        <p>Lux</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It&lsquo;s a pretty awesome clone</p>
        <p>Referrals Accepted</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
      </div>
    </div>
  );
};

export default Footer;
