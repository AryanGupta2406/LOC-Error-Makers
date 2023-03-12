import React from 'react'
import Image1 from "../assets/land.jpg";
import Image2 from "../assets/land1.jpg";
import Navbar2 from '../components/Navbar2';
import Image from '../assets/andrew-winkler-Ez3IdcUELzs-unsplash.jpg';
import Image3 from '../assets/tom-pumford-8VU4ntHjOys-unsplash.jpg';
import Blog1 from '../assets/blog1.png';
import Blog2 from '../assets/blog2.png';
import Blog3 from '../assets/blog3.png';
import Footer from '../components/Footer';

const Blog = () => {
    return (
        <div>
                                    <Navbar2 />

            <div class='relative mx-auto'>
                <div class='head-image'>
                    <img src={Image} alt="feature" className="object-cover object-center  w-full h-screen" class='height:150px' />
                </div>
                <div class='absolute top-2/3'>
                    <p class='ml-7 text-7xl text-black '>
                        THIS IS THE MAIN TEXT</p>
                        <p class='ml-7 text-4xl text-[#008080]'>
                        bODY OF THE TAG BLAH BLAH BLAH</p>
                </div>
            </div>

            {/* 5 columns */}
            <div class='grid grid-cols-5 mt-9 mb-9 border-2'>
                
                <div class='col-span-2  w-96 border-black mt-6 mb-9'>
                    <h1>Phonography</h1>
                    <p>PhoneographyCameras, smartphones, and tablets have begun to rival professional cameras in terms of quality and software. Any individual with a smartphone or a tablet can easily capture an image, edit it, and post online on various social media websites.</p>

                </div>
                <div class='col-span-3 mt-6 mb-9 row-span-2t5'>
                    <img src={Blog1} alt="feature" className="object-cover object-center w-full h-48" />

                </div>
                

                <div class='col-span-3   border-black mt-6 mb-9'>
                    <img src={Blog2} alt="feature" className="object-cover object-center   w-full h-48" />

                </div>
                <div class='col-span-2 mt-6 mb-9'>
                    <h1>The Canon Powershot zoom</h1>
                    <p>The Powershot zoom cannot be called a camera, but it is more of a digital monocular. This is not a device that can be used in low-light. As per Canon, it will suit people who enjoy outdoor activities like birdwatching and hiking.</p>
                </div>
                
                <div class='col-span-2  w-96 border-black mt-6 mb-9'>
                    <h1>360 Panorama</h1>
                    <p>Now that software can correct for the unsteady hand, panoramas that capture a 360-degree view of a location are becoming popular Day by day.</p>

                </div>
                <div class='col-span-3  border-black mt-6'>
                    <img src={Blog3} alt="feature" className="object-cover object-center   w-full h-48" />


                </div>


               




               
            </div>
            <Footer />

        </div>
    )
}

export default Blog
