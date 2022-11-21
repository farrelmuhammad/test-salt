import React from "react";
import { HiUpload } from "react-icons/hi";

const People = () => {
  return (
    <>
      <section className="container">
        <div className="flex items-end justify-between py-4">
          <h1 className="text-4xl text-[#F4E3CF]">People</h1>
          <a href="" className="text-base text-[#F4E3CF]">
           View All
          </a>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 row-span-2 box-text flex flex-col justify-end">
            <h2 className="text-4xl font-semibold mb-2">How to improve your skills</h2>
            <div className="flex justify-between">
              <h4 className="text-xl font-semibold">Waseem Arshad</h4>

              <p className="text-base font-semibold">187.789 views</p>
            </div>
          </div>

          <div class="box-text flex flex-col justify-end">
            <div className="flex justify-between">
              <h4 className="text-xl font-semibold">Michael Koligh</h4>

              <p className="text-base font-semibold">15.454 views</p>
            </div>
          </div>

          <div class="box-text flex flex-col justify-end">
            <div className="flex justify-between">
              <h4 className="text-xl font-semibold">Ahmed Yasin</h4>

              <p className="text-base font-semibold">1984 views</p>
            </div>
          </div>

          <div class="box-text flex flex-col justify-end">
            <div className="flex justify-between">
              <h4 className="text-xl font-semibold">John Stainior</h4>

              <p className="text-base font-semibold">2.554 views</p>
            </div>
          </div>

          <div class="box-text flex flex-col justify-end">
            <div className="flex justify-between">
              <h4 className="text-xl font-semibold">John Stainior</h4>

              <p className="text-base font-semibold">2.554 views</p>
            </div>
          </div>

          <div class="border-4 border-[#F4E3CF] text-[#F4E3CF] flex items-center justify-center">
            <HiUpload className="rounded-full w-10 h-10 mr-2" /> <h2 className="text-xl font-semibold">Upload Your Own Video</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
