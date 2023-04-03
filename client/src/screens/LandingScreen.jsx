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
    <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }} mt='10'>
      <Box
        width={{ sm: 'sm' }}
        transform={{ base: 'translateY(-50%)', lg: 'none' }}
        bg={{ base: useColorModeValue('orange.50', 'gray.700'), lg: 'transparent' }}
        mx={{ base: '6', md: '8', lg: '0' }}
        px={{ base: '6', md: '8', lg: '0' }}
        py={{ base: '6', md: '8', lg: '12' }}
      >
        <Stack spacing={{ base: '8', lg: '10' }}>
          <Stack spacing={{ base: '2', lg: '4' }} marginLeft='4%'>
            <Flex alignItems='center'></Flex>
            <Text
              fontSize='4xl'
              fontWeight='bold'
              bgGradient='linear(to-l, #9C4F96, #FF6355, #FBA949, #FAE442, #8BD448, #2AA8F2)'
              bgClip='text'
            >
              Clay by Kady
            </Text>
            <Heading size='xl' fontWeight='normal'>
              Handmade polymer clay earrings
            </Heading>
          </Stack>
          <HStack spacing='3'>
            <Link as={ReactLink} to='/products' fontWeight='bold' fontSize='lg' marginLeft='4%'>
              Discover now
            </Link>
            <Icon as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex='1' overflow='hidden'>
        <Image
          src='https://i.etsystatic.com/34448913/r/il/7a369d/3716250128/il_794xN.3716250128_2pn7.jpg'
          alt='Woman on stairs'
          fallback={<Skeleton />}
          maxH='450px'
          minW='300px'
          objectFit='cover'
          flex='1'
          marginRight='1%'
        />
        <Image
          display={{ base: 'none', sm: 'initial' }}
          src='https://i.etsystatic.com/34448913/r/il/c9002b/3727265694/il_794xN.3727265694_18pg.jpg'
          alt='Woman in white sweatpants'
          fallback={<Skeleton />}
          maxH='450px'
          objectFit='cover'
        />
      </Flex>
    </Stack>

    <Text mt='5%' mb='1%' fontSize='2xl' ml='1%' fontWeight='semibold'>
      Trending Now
    </Text>
    <Flex flex='1' overflow='hidden' justifyContent='center'>
      <Image
        src='https://i.etsystatic.com/34448913/r/il/4537fe/3763820739/il_794xN.3763820739_5bv1.jpg'
        alt='Woman in black outfit'
        fallback={<Skeleton />}
        maxH='800px'
        minW='800px'
        objectFit='cover'
      />
      <Image
        display={{ base: 'none', sm: 'initial' }}
        src='https://i.etsystatic.com/34448913/r/il/86c77b/3763848649/il_794xN.3763848649_f28k.jpg'
        alt='Women blue sweatsuit'
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
