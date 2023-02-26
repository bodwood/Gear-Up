import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  useColorModeValue,
  Stack,
  Spinner,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
  Wrap,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const CartScreen = () => {
  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh'>
      {loading ? (
        <Stack direction='row' spacing={4}>
          <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='orange.500' size='xl' />
        </Stack>
      ) : error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Oops!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : cart.length <= 0 ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Cart is empty.</AlertTitle>
          <AlertDescription>
            <Link as={ReactLink} to='/products'>
              Click to view our products
            </Link>
          </AlertDescription>
        </Alert>
      ) : (
        <p>display</p>
      )}
    </Wrap>
  );
};
export default CartScreen;
