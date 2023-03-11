import React from "react";
import land from "../assets/land.jpg";
import Image21 from "../assets/wan-san-yip-tLK02oHjT8c-unsplash.jpg";
import Image22 from "../assets/senad-palic-Yyjs1z15Q_0-unsplash.jpg";
import Image23 from "../assets/julian-steenbergen-G4JAcx_0ZRQ-unsplash.jpg";
import Image24 from "../assets/devin-avery-VBBs_SWsdwU-unsplash.jpg";
import Image25 from "../assets/alexander-zvir-AELxxNHdvtA-unsplash.jpg";

const names = [Image21, Image22, Image23, Image24, Image25];

const ProfileMain = () => {
  return (
    <div
      class=" bg-gradient-to-r from-cyan-500 to-blue-500
    h-screen"
    >
      <div class="relative mx-auto md:max-w-2xl  bg-white min-w-0 break-words  w-screen mb-6 shadow-lg rounded-xl top-24">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
              <div class="relative">
                <img
                  src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
                  class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div class="w-full text-center mt-20">
              <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    3,360
                  </span>
                  <span class="text-sm text-slate-400">Photos</span>
                </div>
                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    2,454
                  </span>
                  <span class="text-sm text-slate-400">Followers</span>
                </div>

                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    564
                  </span>
                  <span class="text-sm text-slate-400">Following</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
              Mike Thompson
            </h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              Paris, France
            </div>
          </div>
          <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4">
                <p class="font-light leading-relaxed text-slate-600 mb-4">
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
                <a
                  href="javascript:;"
                  class="font-normal text-slate-700 hover:text-slate-400"
                >
                  Follow Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" mt-24">
        {/* {names.map((name, index) => (
    <li key={index}>
      {<img   src={name}
              alt="error"
              borderRadius="lg"
            />     }
    </li>
  ))} */}
      </div>

      <div class="p-10  mt-4 flex justify-between">
        {/* card */}
        {/* <div class=" rounded overflow-hidden shadow-lg flex-auto">
    <img class="w-full" src="" alt="Mountain" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Mountain</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div> */}
        {names.map((name) => {
          return (
            <div class="w-96  bg-white border-black  border-2 rounded overflow-hidden shadow-lg mt-1 mx-2">
                <img class="w-full" src={name} alt="Mountain"></img>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mountain</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <span class="inline-block bg-red-500 text-white rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  SPECIALITY
                </span>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// bg-gradient-to-r from-cyan-500 to-blue-500
export default ProfileMain;
