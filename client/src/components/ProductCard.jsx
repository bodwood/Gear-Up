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
  useToast,
} from '@chakra-ui/react';

import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addCartItem } from '../redux/actions/cartActions';
import { useNavigate, Link as ReactLink, useLocation } from 'react-router-dom';


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const cartInfo = useSelector((state) => state.cart);
  const { cart } = cartInfo;

  const addItem = (id) => {
    if (cart.some((cartItem) => cartItem.id === id)) {
      toast({
        description: 'This item is already in your cart. Go to your cart to change the amount.',
        status: 'error',
        isClosable: true,
      });
    } else {
      dispatch(addCartItem(id, 1));
      toast({
        description: 'Item has been added.',
        status: 'success',
        isClosable: true,
      });
    }
  };


  return (
    <Stack
      p='2'
      spacing='3px'
      bg={useColorModeValue('white', 'gray.800')}
      minW='240px'
      h='500px'
      borderWidth='0px'
      rounded='lg'
      shadow='md'
      position='relative'
    >
      {product.productIsNew && <Circle size='10px' position='absolute' top={2} right={2} bg='green.300' />}
      {product.stock <= 0 && <Circle size='10px' position='absolute' top={2} right={2} bg='red.300' />}
      <Link as={ReactLink} to={`/product/${product._id}`}>
        <Image className='products-images' src={product.image} alt={product.name} roundedTop='lg' roundedBottom='lg' />
      </Link>

      <Box flex='1' maxH='5' alignItems='baseline'>
        {product.stock <= 0 && (
          <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
            Sold Out
          </Badge>
        )}
        {product.productIsNew && (
          <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='green'>
            New
          </Badge>
        )}
      </Box>

      <Flex mt='1' justifyContent='space-between' alignContent='center'>
        <Link as={ReactLink} to={`/product/${product._id}`} pt='2' cursor='pointer' style={{ textDecoration: 'none' }}>
          <Box fontSize='2xl' fontWeight='semibold' as='h4' lineHeight='tight'>
            <Tooltip label={`View ${product.name}`}>{product.name}</Tooltip>
          </Box>
        </Link>
      </Flex>
      <Flex justify='space-between'>
        <Box fontSize='2xl' color={useColorModeValue('gray.800', 'white')}>
          <Box as='span' color={'grey.600'} fontSize='lg'>
            $
          </Box>
          {product.price}
        </Box>
        <Tooltip label='Add to cart' bg='white' placement='top' color='gray.800' fontSize='1.2em'>
          <Button variant='ghost' display='flex' disabled={product.stock <= 0} onClick={() => addItem(product._id)}>
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf='center/'></Icon>
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};
export default ProductCard;
