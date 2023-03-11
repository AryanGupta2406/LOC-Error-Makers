import React from 'react'
import Image1 from "../assets/land.jpg";
import Image2 from "../assets/land1.jpg";


const Blog = () => {
    return (
        <div>
            <div class='relative mx-auto'>
                <div class='head-image'>
                    <img src={Image1} alt="feature" className="object-cover object-center  w-full " class='height:150px' />
                </div>
                <div class='absolute top-1/2'>
                    <p class='ml-2 text-3xl text-white'>
                        hiii</p>
                </div>
            </div>

            {/* 5 columns */}
            <div class='grid grid-cols-5 mt-9 mb-9 border-2'>
                
                <div class='col-span-2   border-black mt-6 mb-9'>
                    <h1>h1</h1>

                </div>
                <div class='col-span-3 mt-6 mb-9'>
                    <img src={Image2} alt="feature" className="object-cover object-center   w-full h-48" />

                </div>
                

                <div class='col-span-3   border-black mt-6 mb-9'>
                    <img src={Image2} alt="feature" className="object-cover object-center   w-full h-48" />

                </div>
                <div class='col-span-2 mt-6 mb-9'>
                    <h1>h1</h1>
                </div>
                {/* <div class='border-2 border-black'>
                    <div class='col-span-3  border-black mt-2 border-2 flex-row'>
                        <img src={Image2} alt="feature" className="object-cover object-center   w-full h-48" />

                    </div>
                    <div class='col-span-2'>
                        <h1>col2</h1>
                    </div>
                </div> */}




                <div class='col-span-2 mt-6'>

                </div>
                <div class='col-span-3  border-black mt-6'>
                    <img src={Image2} alt="feature" className="object-cover object-center   w-full h-48" />


                </div>


               




               
            </div>
        </div>
    )
}

export default Blog
