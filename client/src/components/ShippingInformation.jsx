import { Box, Heading, VStack, FormControl, Flex, Stack, Text, Radio, RadioGroup } from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';
import { useDispatch } from 'react-redux';
import { setExpress } from '../redux/actions/cartActions';
import { useState } from 'react';
import { setShippingAddress, setShippingAddressError } from '../redux/actions/orderActions';

const ShippingInformation = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ address: '', postalCode: '', city: '', country: '' }}
      validationSchema=
      {Yup.object({
        address: Yup.string().required('This field is required.').min('This address is too short.'),
        postalCode: Yup.string().required('This field is required.').min('This postal code is too short.'),
        city: Yup.string().required('This field is required.').min('This city is too short.'),
        country: Yup.string().required('This field is required.').min('This country is too short.'),
      })}>
       {(formik) => <VStack as='form'></VStack>}
    </Formik>
  );
};
export default ShippingInformation;
