import { Image, Card, Stack, Text, CardFooter, CardBody } from '@chakra-ui/react';
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Testimonial({ imageSrc = "/placeholder.png", name, internClass, description, direction="row" }){
    return (
        <Card
            direction={{ base: 'hidden', sm: `${direction}` }}
            overflow='hidden'
            height={{base:"205px", lg:"314px"}}
        >
        <Image
            objectFit='cover'
            w={{ base: '100%'}}
            src={imageSrc}
            alt="Testimonial Photo"
        />

        <Stack className='bg-(--color-card)'>
            <CardBody>
                <Text fontSize={{lg:'2xl', base:'md'}} py='2' className={inter.className}>
                    {description}
                </Text>
            </CardBody>

            <CardFooter className={inter.className}>
                <Text>
                   - {name} 
                </Text>
                <Text as="i">
                    , {internClass}
                </Text>
            </CardFooter>
        </Stack>
        </Card>
    )
}