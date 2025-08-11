import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
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
        <Card variant={{sm: 'filled', base: 'unstyled'}}>
            <CardBody>
                <div className='flex md:flex-col flex-row-reverse items-center text-center
                      lg:h-[467px] md:h-[449px] h-[128px]
                      lg:pt-[71px] md:pt-[63px]'>
                    <div className=''>
                        <Image
                            src={imageSrc}
                            alt="Board Meeting"
                            width={0}
                            height={0}
                            sizes="120vw"
                            style={{ width: "100%", height: "auto" }}
                            className='rounded-full'
                        />
                    </div>
                    
                    <div className={`${livvic.className} flex md:h-[45px] h-[22px] items-center
                                    md:text-2xl text-base`}> {heading} </div>
                    <div className={`${inter.className} text-intern md:text-base text-sm
                                    lg:w-[259px] md:w-[173px] w-[343px]`}>
                        {description}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
