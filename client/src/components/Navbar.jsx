import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
  useToast,
  MenuList,
  Menu,
  MenuItem,
  MenuButton,
  MenuDivider
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import { FaHelicopter } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg'
import { MdLocalShipping, MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logout } from '../redux/actions/userActions';
import { FiShoppingCart } from 'react-icons/fi';

const ShoppingCartIcon = () => {
  const cartInfo = useSelector((state) => state.cart)
  const { cart } = cartInfo;
  return <Flex>
    <Text as='sub' fontSize='xs'>
    {cart.length}
    </Text>
    <Icon ml='-1.5' as={FiShoppingCart} h='4' w='7' alignSelf='center' />
    Cart</Flex>
}

const linkArray = [
  { linkName: 'Products', path: '/products' },
  { linkName: <ShoppingCartIcon /> , path: '/cart' },
];

const NavLink = ({ path, children }) => {
  return (
    <Link
      as={ReactLink}
      to={path}
      px={2}
      py={2}
      rounded='md'
      _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isHovering, setIsHovering } = useState(false);
  const user = useSelector((state) => state.user); //asks redux store what is going on with user state
  const { userInfo } = user;
  const dispatch = useDispatch();
  const toast = useToast();

  const logoutHandler = () => {
    dispatch(logout());
    toast({ description: 'You have been logged out.', status: 'success', position: 'top', isClosable: true });
  };

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems='center' justifyContent={'space-between'}>
        <HStack>
          <Link as={ReactLink} to='/' _hover={{ textDecorationLine: 'none' }}>
            <Flex alignItems='center'>
            
              <Text
                fontWeight='extrabold'
                fontSize='20px'
                _hover={{
                  textDecoration: 'none !important',
                  bgGradient: 'linear(to-l, #9C4F96, #FF6355, #FBA949, #FAE442, #8BD448, #2AA8F2)',
                  bgClip: 'text',
                }}
              >
                Gear Up
              </Text>
            </Flex>
          </Link>
          <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
            {' '}
            {/*if in mobile (base) don't display, medium screen above display */}
            {linkArray.map((e) => {
              const { linkName, path } = e;
              return (
                <NavLink key={linkName} path={path}>
                  {linkName}
                </NavLink>
              );
            })}
          </HStack>
        </HStack>
        <Flex alignItems='center' as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
          <NavLink>
            <Icon
              as={colorMode === 'light' ? MoonIcon : SunIcon}
              alignSelf='center'
              onClick={() => toggleColorMode()}
            />
          </NavLink>
          {userInfo ? (
            <>
              <Menu>
                <MenuButton px='4' py='2' transition='all 0.3s' as={Button}>
                  {userInfo.name} <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem as={ReactLink} to='/profile'>
                    <CgProfile />
                    <Text ml='2'>Profile</Text>
                  </MenuItem>
                  <MenuItem as={ReactLink} to='/your-orders'>
                    <MdLocalShipping />
                    <Text ml='2'>Orders</Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={logoutHandler}>
                    <MdLogout />
                    <Text ml='2'>Log out</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <>
              <Button as={ReactLink} to='/login' p={2} fontSize='sm' fontWeight={400} variant='link'>
                Sign in
              </Button>
              <Button
                as={ReactLink}
                to='/registration'
                p={2}
                fontSize='sm'
                fontWeight={600}
                _hover={{ bg: 'orange.400' }}
                bg='orange.500'
                color='white'
              >
                Sign Up
              </Button>
            </>
          )}
        </Flex>
        <IconButton
          size='md'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: 'none' }} // Any screen size that is medium or larger will not display the hamburger icon
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }} textAlign='right'>
          {/* referring to the open hamburger menu */}
          <Stack as='nav' spacing={4}>
            {linkArray.map((e) => {
              const { linkName, path } = e;
              return (
                <NavLink key={linkName} path={path}>
                  {linkName}
                </NavLink>
              );
            })}
            <NavLink key='sign up' path='/registration'>
              Sign Up
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
export default Navbar;
