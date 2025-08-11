"use client"

import { useState } from 'react';
import { Box, Text, IconButton, Flex, Circle } from '@chakra-ui/react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const testimonials = [
  {
    image: '/placeholder.png',
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    author: 'Lorem Ipsum',
    role: 'Internship Class',
  },
  {
    image: '/placeholder.png',
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    author: 'Lorem Ipsum',
    role: 'Internship Class',
  },
  {
    image: '/placeholder.png',
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    author: 'Lorem Ipsum',
    role: 'Internship Class',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Flex direction="column" align="center" textAlign="center" px={4}>
      <Flex align="center" justify="center" gap={4}>
        <IconButton
          aria-label="Previous"
          icon={<GoArrowLeft />}
          onClick={prevSlide}
          borderRadius="full"
          bg="gray.100"
          _hover={{ bg: 'gray.700' }}
        />

        <Box w={60} h={60} bg="black" />

        <IconButton
          aria-label="Next"
          icon={<GoArrowRight />}
          onClick={nextSlide}
          borderRadius="full"
          bg="gray.100"
          _hover={{ bg: 'gray.700' }}
        />
      </Flex>

      <Text fontSize="lg" mt={8} maxW="lg">
        “{testimonials[current].quote}”
      </Text>
      <Text mt={4} color="gray.600" fontSize="sm">
        - {testimonials[current].author} <i>{testimonials[current].role}</i>
      </Text>

      <Flex mt={4} gap={2}>
        {testimonials.map((_, idx) => (
          <Circle
            key={idx}
            size="2"
            bg={idx === current ? 'gray.700' : 'gray.300'}
          />
        ))}
      </Flex>
    </Flex>
  );
}
