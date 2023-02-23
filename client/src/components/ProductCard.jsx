import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  HStack,
  Text,
} from '@chakra-ui/react';

import { FiShoppingCart } from 'react-icons/fi';
import { Link as ReactLink } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  return (
    <Stack
      p='2'
      spacing='3px'
      bg={useColorModeValue('white', 'gray.800')}
      minW='240px'
      h='450px'
      borderWidth='1px'
      rounded='lg'
      shadow='lg'
      position='relative'
    >
      {product.isNew && <Circle size='10px' position='absolute' top={2} right={2} bg='green.300' />}
      {product.stock <= 0 && <Circle size='10px' position='absolute' top={2} right={2} bg='red.300' />}
      <Image src={product.image} alt={product.name} roundedTop='lg' />
      <Box>
        {product.stock <= 0 && (
          <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
            Sold Out
          </Badge>
        )}
        {product.isNew && (
          <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='green'>
            New
          </Badge>
        )}
      </Box>
      <Flex mt='1' justifyContent='space-between' align='center'>
        <Link as={ReactLink} to={`/product${product._id}`} pt='2' cursor='pointer'>
          <Box>{product.name}</Box>
        </Link>
      </Flex>
      <Flex>
        <Box>
          <Box>$</Box>
          {product.price.toFixed(2)}
        </Box>
        <Tooltip label='Add to cart' bg='white' placement='top' color='gray.800' fontSize='1.2em'>
          <Button variant='ghost' display='flex' disabled={product.stock <= 0}>
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf='center/'></Icon>
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};
export default ProductCard;
