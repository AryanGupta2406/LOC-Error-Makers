import React from "react";
// import Image10 from "../assets/patrick-pahlke-G7wgKn7j_Rs-unsplash.jpg";
import Image11 from "../assets/jeshoots-com-p8kaVRe4edM-unsplash (1).jpg";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from "@chakra-ui/react";
import Image20 from "../assets/william-thomas-ny6tO4ItOEY-unsplash.jpg"
import Image21 from "../assets/wan-san-yip-tLK02oHjT8c-unsplash.jpg"
import Image22 from "../assets/senad-palic-Yyjs1z15Q_0-unsplash.jpg"
import Image23 from "../assets/julian-steenbergen-G4JAcx_0ZRQ-unsplash.jpg"
import Image24 from "../assets/devin-avery-VBBs_SWsdwU-unsplash.jpg"
import Image25 from "../assets/alexander-zvir-AELxxNHdvtA-unsplash.jpg"


const Courses = () => {
  return (
    <div>
      <div>
        
        <div className=" text-white mx-auto bg-[url('../public/patrick-pahlke-G7wgKn7j_Rs-unsplash.jpg')] h-96  bg-no-repeat bg-cover" >
          <h3 className="text-left text-6xl ml-6 text-white bottom-6  pt-24 font-bold">Courses</h3>
          <br />
          <p className="ml-6 text-2xl  text-left w-5/12 mt-4 font-serif">
            Challenges to help photographers test their skills,get recognized
            for their work,and win exciting prizes.
          </p>
        </div>
        <br />

      </div>
      <div className="grid grid-cols-3 lg:flex-row ml-[5rem]">
        <div class='flex-auto mt-6'>
           <Card maxW="sm" className="">
          <CardBody className="mx-4 border-2">
            <Image
              src={Image25}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Snap MasterClass</Heading>
              <Text>
              Snap MasterClass is the perfect course for photographers looking to take their creativity to the next level. Learn how to capture your unique vision and develop your own personal style.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $9
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        </div>
        <div class=' flex-auto mt-6'>
        <Card maxW="sm">
          <CardBody className="mx-4">
            <Image
              src={Image24}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Captured Vision</Heading>
              <Text>
              CapturedVision is the perfect course for photographers looking to take their creativity to the next level. Learn how to capture your unique vision and develop your own personal style.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $49
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        </div>
        <div class='flex-auto mt-6'>
           <Card maxW="sm">
          <CardBody className="mx-4">
            <Image
              src={Image22}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Pixel Pro</Heading>
              <Text>
              Pixel Pro is the perfect course for photographers looking to take their creativity to the next level. Learn how to capture your unique vision and develop your own personal style.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $79
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        </div>
        <div class='flex-auto mt-6'>
           <Card maxW="sm">
          <CardBody className="mx-4">
            <Image
              src={Image21}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">LensCrafters</Heading>
              <Text>
              LensCrafters is the perfect course for photographers looking to take their creativity to the next level. Learn how to capture your unique vision and develop your own personal style.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $45
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        </div>
        <div class='flex-auto mt-6'>
           <Card maxW="sm">
          <CardBody className="mx-4">
            <Image
              src={Image20}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">PicturePerfect Academy</Heading>
              <Text>
              PicturePerfect Academy is the perfect course for photographers looking to take their creativity to the next level. Learn how to capture your unique vision and develop your own personal style.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $119
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        </div>
        <div class='flex-auto mt-6'>
           <Card maxW="sm">
          <CardBody className="mx-4">
            <Image
              src={Image23}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Shutter School</Heading>
              <Text>
              Shutter is the perfect course for photographers looking to take their creativity to the next level. Learn how to capture your unique vision and develop your own personal style.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $99
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        </div>
        
      </div>

      {/* <div class="flex flex-col items-center justify-center mt-32">
    
    <div class="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
        
        <div class="inline relative group h-48">
            
            <img class="absolute rounded-t object-cover h-full w-full"
                src={Image11}
                alt="Product Preview" />

               
                <div class="flex flex-row absolute justify-end
                    h-16 w-full bottom-0 px-3 space-x-2
                    bg-none opacity-0 group-hover:opacity-100
                    group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent 
                    transition-all ease-in-out duration-200 delay-100">

                    
                    <button class="bg-gray-50/10 rounded-full 
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                        <i class="mdi mdi-playlist-plus text-xl text-gray-200
                            hover:text-white transition-all duration-200"
                            title="Add to Bookmarks"></i>
                    </button>

                   
                    <button class="bg-gray-50/10 rounded-full 
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200">
                        <i class="mdi mdi-heart text-xl text-gray-200 p-1
                            hover:text-white transition-all duration-200"
                            title="Add to Favorites"></i>
                    </button>
                </div>
        </div>

       
        <div class="flex flex-col bg-white rounded-b p-3">
            
            <div class="text-sm font-semibold text-gray-900 hover:underline truncate">
                Snap Master Class
            </div>

            
            <div class="text-xxs text-gray-400 truncate mt-1">
                by

                
                <a class="font-semibold hover:underline"> EgoistDeveloper </a>

                in
                
                <a class="font-semibold hover:underline"> e-commerce </a>
            </div>

           
            <div class="text-sm text-gray-600 font-bold mt-4 mb-1">
                $23
            </div>

            
            <div class="flex flex-row mt-2">
                
                <div class="flex flex-col flex-auto">
                    
                    <div class="flex flex-row group">
                        <i class="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                            title="Worst"></i>

                        <i class="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                            title="Bad"></i>

                        <i class="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                            title="Not Bad"></i>

                        <i class="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200" 
                            title="Good"></i>

                        <i class="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                            title="Awesome"></i>

                        <div class="text-xxs text-gray-400 ml-1 hover:underline">
                            (45)
                        </div>
                    </div>

                    
                    <div class="text-xxs text-gray-400 mt-1" title="34k Downlaods in this year">
                        34k Downloads
                    </div>
                </div>

                
                <div class="flex flex-row flex-auto justify-end">
                    
                    <a class="flex text-xs border px-3 my-auto py-2 mr-2
                        border-amber-500 group hover:bg-amber-500 
                        rounded-xss
                        transition-all duration-200">
                        
                       
                        <i class="mdi mdi-cart-outline text-amber-700
                            group-hover:text-white delay-100"></i>
                    </a>

                    
                    <a class="flex text-xs border px-3 my-auto py-2 
                        border-amber-500 group hover:bg-amber-500 
                        rounded-xss
                        transition-all duration-200">
                        
                        
                        <i class="mdi mdi-eye-outline text-amber-700
                            group-hover:text-white delay-100"></i>

                        
                        <div class="text-xxs text-amber-700 font-semibold ml-2
                            group-hover:text-white delay-100">
                            Live Preview
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    
    <span class="text-center font-bold my-20">
        MDI (npm i @mdi/font) reuqired for icons

        <hr class="my-4"/>

        <a href="https://egoistdeveloper.github.io/twcss-to-sass-playground/" target="_blank" class="text-blue-600">
            Convetert to SASS
        </a>

        <hr class="my-4"/>

        <a href="https://unsplash.com/photos/p8kaVRe4edM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" target="_blank" class="text-blue-600">
            Image Source
        </a>
    </span>
</div> */}
    </div>
  );
};
export default Courses;
