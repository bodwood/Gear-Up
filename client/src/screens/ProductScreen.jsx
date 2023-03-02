import { useParams } from 'react-router-dom';
import {
  Box,
  Image,
  Text,
  Wrap,
  Stack,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Flex,
  Badge,
  Heading,
  HStack,
  Button,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import { MinusIcon, StartIcon, SmallAddIcon } from '@chakra-ui/icons';
import { BiPackage, BiCheckShield, BiSupport } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import { addCartItems } from '../redux/actions/cartActions';
import { useEffect, useState } from 'react';

const ProductScreen = () => {
  const [amount, setAmount] = useState(1);
  let { id } = useParams();
  const toast = useToast();
  //redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { loading, error, product } = products;

  const cartContent = useSelector((state) => state.cart);
  const { cart } = cartContent;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id, cart]);

  return;
  <Wrap spacing='30px' justify='center' minHeight='100vh'>
    {loading ? <p>loading</p> : error ? <p>error</p> : product && <h1>product</h1>}
  </Wrap>;
};
export default ProductScreen;
