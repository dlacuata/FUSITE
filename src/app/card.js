import { Card, CardBody } from '@chakra-ui/react';
import Image from "next/image";
import { Livvic } from "next/font/google";
import { Inter } from "next/font/google";
const livvic = Livvic({
  weight: ["700"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

export default function CardComponent({ imageSrc = "/placeholder.png", heading, description }) {
    return (
        <Card bg={{base: "transparent", md: "white"}} variant={{md: 'elevated', base: 'unstyled'}}>
            <CardBody>
                <div className='flex md:flex-col flex-row items-center text-center
                      lg:h-[440px] md:h-[400px] h-[128px]
                      lg:pt-[71px] md:pt-[63px]
                      '>
                    <div className='flex h-[128px] bg-white rounded-tl-2xl'>
                        <Image
                            src={imageSrc}
                            alt="Board Meeting"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className='rounded-full'
                        />
                    </div>
                    
                    <div className='flex-col'>
                        <div className={`${livvic.className} flex md:h-[80px] h-[22px] items-center sm:justify-center
                                        md:text-4xl text-base indent-2 sm:indent-0`}> {heading} </div>
                        <div className={`${inter.className} flex text-intern lg:text-base text-sm md:leading-6 sm:text-center
                                        lg:w-[259px] md:w-[173px] w-[192px] sm:ml-0 ml-2 text-left`}>
                            {description}
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
