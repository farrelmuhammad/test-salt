import React from "react";

const Channels = () => {
  return (
    <>
      <section className="container max-w-xl">
        <div className="flex items-end justify-between py-4">
          <h1 className="text-4xl text-[#F4E3CF]">Channels</h1>
          <a href="" className="text-base text-[#F4E3CF]">
            Browse all channels
          </a>
        </div>

        <hr className="hr-top" />

        <div class="grid grid-cols-2 gap-4 ">
          <div class="box-text text-xl font-semibold flex items-end">Google</div>
          <div class="box-text text-xl font-semibold flex items-end">Dribbble</div>
          <div class="box-text text-xl font-semibold flex items-end">Microsoft</div>
          <div class="box-text text-xl font-semibold flex items-end">Behance</div>
          <div class="box-text text-xl font-semibold flex items-end">Weather Channel</div>
          <div class="box-text text-xl font-semibold flex items-end">Gurus</div>
          <div class="box-text text-xl font-semibold flex items-end">iMedia</div>
          <div class="box-text text-xl font-semibold flex items-end">Creativeye</div>
          <div class="box-text text-xl font-semibold flex items-end">Khan Studios</div>
          <div class="box-text text-xl font-semibold flex items-end">Yahoo</div>
        </div>

        <hr className="hr-bottom" />
      </section>
    </>
  );
};

export default Channels;
