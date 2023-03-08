import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { FaHelicopter } from 'react-icons/fa';

const LandingScreen = () => (
  <Box maxW='12xl' mx='auto' px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }} minH='6xl'>
    <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
      <Box
        width={{ sm: 'sm' }}
        transform={{ base: 'translateY(-50%)', lg: 'none' }}
        bg={{ base: useColorModeValue('orange.50', 'gray.700'), lg: 'transparent' }}
        mx={{ base: '6', md: '8', lg: '0' }}
        px={{ base: '6', md: '8', lg: '0' }}
        py={{ base: '6', md: '8', lg: '12' }}
      >
        <Stack spacing={{ base: '8', lg: '10' }}>
          <Stack spacing={{ base: '2', lg: '4' }}>
            <Flex alignItems='center'></Flex>
            <Text fontSize='4xl' fontWeight='bold'>
              Gear Up
            </Text>
            <Heading size='xl' fontWeight='normal'>
              Refresh your kicks
            </Heading>
          </Stack>
          <HStack spacing='3'>
            <Link
              as={ReactLink}
              to='/products'
              fontWeight='bold'
              fontSize='lg'
            >
              Discover now
            </Link>
            <Icon as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex='1' overflow='hidden'>
        <Image
          src='https://images.pexels.com/photos/7228053/pexels-photo-7228053.jpeg'
          alt='Lovely Image'
          fallback={<Skeleton />}
          maxH='450px'
          minW='300px'
          objectFit='cover'
          flex='1'
        />
        <Image
          display={{ base: 'none', sm: 'initial' }}
          src='https://cdn.shopify.com/s/files/1/1173/7128/products/DRESSFRONT-14_400x.jpg?v=1630107768'
          alt='Lovely Image'
          fallback={<Skeleton />}
          maxH='450px'
          objectFit='cover'
        />
      </Flex>
    </Stack>

    <Center mt='5%'>
      <Text fontSize='5xl' fontWeight='bold'>
        Women's History Month
      </Text>
    </Center>
    <Center>
      <Text fontSize='2xl' fontWeight='bold'>
        Celebrating Women
      </Text>
    </Center>

    <Stack mt='10'>
      <Flex>
        <Image
          src='https://images.pexels.com/photos/3325917/pexels-photo-3325917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Lovely Image'
          fallback={<Skeleton />}
          maxH='350px'
          maxW='100vw'
          width='100%'
          objectFit='cover'
        />
      </Flex>
    </Stack>

    <Text mt='5%' mb='1%' fontSize='2xl' ml='1%' fontWeight='semibold'>
      Trending Now
    </Text>
    <Flex flex='1' overflow='hidden' justifyContent='center'>
      <Image
        src='https://cdn.filtergrade.com/wp-content/uploads/2021/11/08145643/pexels-kyle-karbowski-9715552-1229x1536.jpg'
        alt='Lovely Image'
        fallback={<Skeleton />}
        maxH='800px'
        minW='800px'
        objectFit='cover'
      />
      <Image
        display={{ base: 'none', sm: 'initial' }}
        src='https://images.pexels.com/photos/10371092/pexels-photo-10371092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='Lovely Image'
        fallback={<Skeleton />}
        maxH='800px'
        minW='800px'
        objectFit='cover'
        ml='2%'
      />
    </Flex>
  </Box>
);

export default LandingScreen;
