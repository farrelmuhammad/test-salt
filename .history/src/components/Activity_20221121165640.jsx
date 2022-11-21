import React from "react";
import { FaComment, FaVideo, FaUnlock, FaHeart, FaFile } from "react-icons/fa";

const Activity = () => {
  return (
    <>
      <section className="container max-w-xl">
        <div className="flex items-end justify-between py-3">
          <h1 className="text-4xl text-[#F4E3CF]">Activity</h1>
          <a href="" className="text-base text-[#F4E3CF]">
            View timeline / Filter activities
          </a>
        </div>

        <hr className="hr-top" />

        <div class="flex flex-col space-y-5">
          <div class="card hover:border-[#F4E3CF]">
            <div className="w-48 bg-[#F4E3CF]"></div>

            <div class="py-1 pl-4 truncate text-[#F4E3CF]">
              <h5 class="text-xl font-semibold">
                John Doe{" "}
                <span className="text-base font-normal">commented</span>
              </h5>
              <p class="text-base mb-3 truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, similique!
              </p>
              <p class="text-sm flex items-center">
                <FaComment className="w-4 h-4 mr-2" />2 seconds ago
              </p>
            </div>
          </div>

          <div class="card hover:border-[#F4E3CF]">
            <div className="w-48 bg-[#F4E3CF]"></div>

            <div class="py-1 pl-4 truncate text-[#F4E3CF]">
              <h5 class="text-xl font-semibold">
                John Doe{" "}
                <span className="text-base font-normal">added a new video</span>
              </h5>
              <p class="text-base mb-3 truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, similique!
              </p>
              <p class="text-sm flex items-center">
                <FaVideo className="w-4 h-4 mr-2" />5 minutes ago
              </p>
            </div>
          </div>

          <div class="card hover:border-[#F4E3CF]">
            <div className="w-48 bg-[#F4E3CF]"></div>

            <div class="py-1 pl-4 truncate text-[#F4E3CF]">
              <h5 class="text-xl font-semibold">
                John Doe{" "}
                <span className="text-base font-normal">shared a document</span>
              </h5>
              <p class="text-base mb-3 truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, similique!
              </p>
              <p class="text-sm flex items-center">
                <FaFile className="w-4 h-4 mr-2" />1 day ago
              </p>
            </div>
          </div>

          <div class="card hover:border-[#F4E3CF]">
            <div className="w-48 bg-[#F4E3CF]"></div>

            <div class="py-1 pl-4 truncate text-[#F4E3CF]">
              <h5 class="text-xl font-semibold">
                Arjun{" "}
                <span className="text-base font-normal">
                  unlocked new badge
                </span>
              </h5>
              <p class="text-base mb-3 truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, similique!
              </p>
              <p class="text-sm flex items-center">
                <FaUnlock className="w-4 h-4 mr-2" />
                44 minutes ago
              </p>
            </div>
          </div>

          {/* <div class="card hover:border-[#F4E3CF]">
            <div className="w-48 bg-[#F4E3CF]"></div>

            <div class="py-1 pl-4 truncate text-[#F4E3CF]">
              <h5 class="text-xl font-semibold">
                Micheal{" "}
                <span className="text-base font-normal">
                  uploaded a new video
                </span>
              </h5>
              <p class="text-base mb-3 truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, similique!
              </p>
              <p class="text-sm flex items-center">
                <FaVideo className="w-4 h-4 mr-2" />1 hour ago
              </p>
            </div>
          </div> */}

          <div class="card hover:border-[#F4E3CF]">
            <div className="w-48 bg-[#F4E3CF]"></div>

            <div class="py-1 pl-4 truncate text-[#F4E3CF]">
              <h5 class="text-xl font-semibold">
                John Doe{" "}
                <span className="text-base font-normal">liked a video</span>
              </h5>
              <p class="text-base mb-3 truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, similique!
              </p>
              <p class="text-sm flex items-center">
                <FaHeart className="w-4 h-4 mr-2" />
                19 minutes ago
              </p>
            </div>
          </div>
        </div>

        <hr className="hr-bottom" />
      </section>
    </>
  );
};

export default Activity;
