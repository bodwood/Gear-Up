import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Stack,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Radio,
  RadioGroup
} from '@chakra-ui/react';
import TextField from '../components/TextField';
import PasswordTextField from '../components/PasswordTextField';
import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, resetUpdateSuccess } from '../redux/actions/userActions';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { setAdmin } from '../redux/actions/userActions'

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userInfo, error, loading, updateSuccess } = user;
  const location = useLocation();
  const toast = useToast();

  useEffect(() => {
    if (updateSuccess) {
      toast({ description: 'Profile updated.', status: 'success', position: 'top', isClosable: true });
      dispatch(resetUpdateSuccess());
    }
  }, [toast, updateSuccess]);
  return userInfo ? (
    <Formik
      initialValues={{ email: userInfo.email, password: '', name: userInfo.name, confirmPassword: ' ' }}
      validationSchema={Yup.object({
        name: Yup.string().required('A name is required.'),
        email: Yup.string().email('Invalid email.').required('An email address is required.'),
        password: Yup.string()
          .min(1, 'Password is too short - must contain at least 1 character')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .min(1, 'Password is too short - must contain at least 1 character')
          .required('Password is required')
          .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
        adminPassword: Yup.string()
          .min(1, 'Password is too short - must contain at least 1 character')
          .required('Password is required')
          .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
      })}
      onSubmit={(values) => {
        dispatch(updateProfile(userInfo._id, values.name, values.email, values.password, values.isAdmin));
      }}
    >
      {(formik) => (
        <Box
          minH='100vh'
          maxW={{ base: '3xl', lg: '7xl' }}
          mx='auto'
          px={{ base: '4', md: '8', lg: '12' }}
          py={{ base: '6', md: '8', lg: '12' }}
        >
          <Stack spacing='10' direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }}>
            <Stack flex='1.5' md={{ base: '2xl', md: 'none' }}>
              <Heading fontSize='2xl' fontWeight='extrabold'>
                Profile
              </Heading>
              <Stack spacing='6'>
                <Stack spacing='6' as='form' onSubmit={formik.handleSubmit}>
                  {error && (
                    <Alert
                      status='error'
                      flexDirection='column'
                      alignItems='center'
                      justifyContent='center'
                      textAlign='center'
                    >
                      <AlertIcon />
                      <AlertTitle>Oops!</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <Stack spacing='5'>
                    <FormControl>
                      <TextField type='text' name='name' placeholder='Jane Doe' label='Full name' />
                      <TextField type='text' name='email' placeholder='janedoe@email.com' label='Email' />
                      <PasswordTextField type='password' name='password' placeholder='********' label='Password' />
                      <PasswordTextField
                        type='password'
                        name='confirmPassword'
                        placeholder='********'
                        label='Confirm password'
                      />
                      <PasswordTextField
                        type='password'
                        name='adminPassword'
                        placeholder='***********'
                        label='Admin Password'
                      />


                      <RadioGroup
                        defaultValue='false'
                        onChange={(e) => {
                          dispatch(setAdmin(e));
                        }}
                      >
                        <Stack direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }}>
                          <Stack pr='10' spacing={{ base: '8', md: '10' }} flex='1.5'>
                            <Box>
                              <Radio value='true'>
                                <Text fontWeight='bold'>Admin</Text>
                                <Text>True</Text>
                              </Radio>
                            </Box>
                            <Stack spacing='6'>Express</Stack>
                          </Stack>
                          <Radio value='false'>
                              <Box>
                                <Text fontWeight='bold'>Admin</Text>
                                <Text>False</Text>
                              </Box>
                          </Radio>
                        </Stack>
                      </RadioGroup>


                    </FormControl>
                  </Stack>
                  <Stack spacing='6'>
                    <Button colorScheme='orange' size='lg' fontSize='md' isLoading={loading} type='submit'>
                      Save
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Flex direction='column' align='center' flex='1' _dark={{ bg: 'gray.900' }}>
              <Card>
                <CardHeader>
                  <Heading size='md'>User Report</Heading>
                </CardHeader>
                <CardBody>
                  <Stack divider={<StackDivider />} spacing='4'>
                    <Box pt='2' fontSize='sm'>
                      Registered on {new Date(userInfo.createdAt).toDateString()}
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Flex>
          </Stack>
        </Box>
      )}
    </Formik>
  ) : (
    <Navigate to='/login' replace={true} state={{ from: location }} />
  );
};
export default ProfileScreen;
