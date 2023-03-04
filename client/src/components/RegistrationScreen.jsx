import {
 Box,
 Button,
 Container,
 FormControl,
 Heading,
 HStack,
 Stack,
 Text,
 useBreakpointValue,
 useColorModeValue as mode,
 AlertIcon,
 AlertTitle,
 Alert,
 AlertDescription,
 useToast
} from '@chakra-ui/react'
import TextField from './TextField'
import PasswordTextField from './PasswordTextField'
import {useState, useEffect} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../redux/actions/userActions'

const RegistrationScreen = () => {
  return (
    <div>RegistrationScreen</div>
  )
}
export default RegistrationScreen