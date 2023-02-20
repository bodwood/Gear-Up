import { Wrap, Center, WrapItem } from '@chakra-ui/react';
import { products } from '../products';
const ProductsScreen = () => {
  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh'>
      {products.map((e) => {
        const { id, name } = e;
        return (
          <WrapItem key={id}>
            <Center w='250px' h='550px'>{name}</Center>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};
export default ProductsScreen;
