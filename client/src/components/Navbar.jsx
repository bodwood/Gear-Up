import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  // Button,
  // Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import { FaHelicopter } from 'react-icons/fa';

const linkArray = [
  { linkName: 'Products', path: '/products' },
  { linkName: 'ShoppingCart', path: '/cart' },
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
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems='center' justifyContent={'space-between'}>
        <IconButton
          size='md'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack>
          <Link as={ReactLink} to='/'>
            <Flex alignItems='center'>
              <Icon as={FaHelicopter} h={59} w={59} color='black' />
              <Text fontWeight='extrabold' fontSize='20px'>
                Gear Up
              </Text>
            </Flex>
          </Link>
          <HStack>
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
        <Flex alignItems='center'>
          <NavLink>
            <Icon
              as={colorMode === 'light' ? MoonIcon : SunIcon}
              alignSelf='center'
              onClick={() => toggleColorMode()}
            />
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
