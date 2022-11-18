import React from "react";
import { HiUpload } from "react-icons/hi";

const Box = () => {
  return (
    <>
      <section className="container">
        <h1 className="text-4xl py-4 text-[#F4E3CF]">Videos</h1>
        {/* <p className="text-lg text-[#F4E3CF]">Browse all videos</p> */}
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 row-span-2 box-text">
            <h2 className="text-2xl font-semibold">How to improve your skills</h2>
            <h4 className="text-xl font-semibold">Waseem Arshad</h4>
            <p className="text-base font-semibold">187.789 views</p>
          </div>
          <div class="box-text">
            {" "}
            <h4 className="text-xl font-semibold">Michael Koligh</h4>
            <p className="text-base font-semibold">15.454 views</p>
          </div>
          <div class="box-text">
            {" "}
            <h4 className="text-xl font-semibold">Ahmed Yasin</h4>
            <p className="text-base font-semibold">1984 views</p>
          </div>
          <div class="box-text">
            {" "}
            <h4 className="text-xl font-semibold">John Stainior</h4>
            <p className="text-base font-semibold">2554 views</p>
          </div>
          <div class="box-text">
            {" "}
            <h4 className="text-xl font-semibold">John Doe</h4>
            <p className="text-base font-semibold">2554 views</p>
          </div>
          <div class="border-4 border-[#F4E3CF] text-[#F4E3CF]">
            <HiUpload className="border-2 border-[#F4E3CF] rounded-full" /> <h2 className="text-xl">Upload Your Own Video</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Box;
