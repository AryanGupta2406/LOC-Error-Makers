import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
import LiveWave from '../components/LiveWave'
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';


const Home=()=> {
  return (
    <div>
                        <Navbar2 />


<section class="text-gray-700 body-font bg-[#008080]">
  <div class="container mx-auto flex px-5 lg:py-8 lg:px-4 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:ml-4">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-black font-dm">LensLuxe

      </h1>
      <p class="mb-8 leading-relaxed font-medium font-dm text-black text-xl">"Welcome to LensLuxe, the ultimate platform for photographers to connect, learn, and showcase their talent. Here, you can network with fellow photographers from all over the world, showcase your best work, and learn from industry experts.Whether you're a seasoned professional or just starting out, LensLuxe is the perfect place to grow your skills and elevate your photography career."</p>
      {/* <div class="flex justify-center">
        <button class="inline-flex text-black bg-white py-2 px-6 focus:outline-none rounded text-lg font-dm border-black border-2 font-medium hover:bg-[#ff7f50]">Try FacePilot</button>
        <button class="border-black border-2 font-medium ml-4 inline-flex text-black font-dm bg-[#008080] py-2 px-6 focus:outline-none rounded text-lg hover:bg-[#ff7f50]">Documentation</button>
      </div> */}
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:mr-8">
      <ImageCarousel/>
    </div>
  </div>
</section>
<LiveWave/>
<section class="text-gray-700 body-font border-t border-gray-200">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="font-dm text-xs text-black tracking-widest font-medium title-font mb-1">Photography</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-black font-dm">EXPLORE OUR SERVICES</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#ff7f50] text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Competition</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a href="/" class="mt-3 text-[#ff7f50] inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#ff7f50] text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Community</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a href="/" class="mt-3 text-[#ff7f50] inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#ff7f50] text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Gallery</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a href="/" class="mt-3 text-[#ff7f50] inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<LiveWave/>


<section class="text-gray-700 body-font border-t border-gray-200">
  <div class="container px-5 py:auto lg:py-8 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-lg">What new technology does is create new oppourtunities to do a job that customers want done.</p>
      <span class="inline-block h-1 w-10 rounded bg-[#ff7f50] m-auto lg:mt-4 lg:mb-4"></span>
      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">TIM O'REILLY</h2>
      <p class="text-gray-500">Philosopher</p>
    </div>
  </div>
</section>
<section class="text-gray-700 body-font relative">
  <div class="absolute inset-0 bg-gradient-to-r from-[#008080] to-black">
  </div>
  <div class="container px-5 py-24 mx-auto flex">
  {/* <img src={Write} alt=''/> */}
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 class="text-gray-900 text-lg mb-1 font-semibold title-font font-dm">Write To Us</h2>
      <p class="leading-relaxed mb-5 text-gray-600 font-dm">Your Inputs are valuable to us, please feel free to write us anything!!!</p>
      <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email"/>
      <textarea class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
      <button class="text-black bg-[#ff7f50] border-2 border-black py-2 px-6 focus:outline-none hover:bg-[#008080] rounded text-lg font-dm">Send</button>
      <p class="text-xs text-gray-500 mt-3">Your Suggestions are valuable to us.</p>
    </div>
  </div>
</section>

<a href="https://github.com/AakashGoradia/COC-The-Machine-Minds" class="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg></a>
  <Footer />
    </div>
  )
}

export default Home