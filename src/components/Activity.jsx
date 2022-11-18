import React from "react";

const Activity = () => {
  return (
    <>
      <section className="container">
        <h1 className="text-4xl py-4 text-[#F4E3CF]">Activity</h1>
        {/* <p className="text-lg text-[#F4E3CF]">View timeline / Filter activities</p> */}
        <div className="flex flex-col">
          <div className="box-text mb-5">1</div>
          <div className="box-text mb-5">2</div>
          <div className="box-text mb-5">3</div>
          <div className="box-text mb-5">4</div>
          <div className="box-text mb-5">5</div>
          <div className="box-text mb-5">6</div>
        </div>
      </section>
    </>
  );
};

export default Activity;
