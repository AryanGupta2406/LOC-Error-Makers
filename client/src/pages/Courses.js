import React from "react";
// import Image10 from "../assets/patrick-pahlke-G7wgKn7j_Rs-unsplash.jpg";
import Image11 from "../assets/jeshoots-com-p8kaVRe4edM-unsplash (1).jpg";
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from "@chakra-ui/react";
import Image20 from "../assets/william-thomas-ny6tO4ItOEY-unsplash.jpg"
import Image21 from "../assets/wan-san-yip-tLK02oHjT8c-unsplash.jpg"
import Image22 from "../assets/senad-palic-Yyjs1z15Q_0-unsplash.jpg"
import Image23 from "../assets/julian-steenbergen-G4JAcx_0ZRQ-unsplash.jpg"
import Image24 from "../assets/devin-avery-VBBs_SWsdwU-unsplash.jpg"
import Image25 from "../assets/alexander-zvir-AELxxNHdvtA-unsplash.jpg"
// import Navbar2 from "../components/Navbar2";
import { Link } from 'react-router-dom';
const Courses = () => {
  return (
    <div>

      <Navbar2 />
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
        <Link to = "/Overview">
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
        </Link>
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

      <Footer />

    </div>
  );
};
export default Courses;
