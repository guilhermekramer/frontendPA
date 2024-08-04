import React from 'react'
import { Box, Flex, Heading, Button, Stack, useBreakpointValue, InputGroup, InputLeftElement, Input} from '@chakra-ui/react';

const AdicionarGastos = () => {
  return (
    <Box maxW="sm" mx="auto" mt="10" p="5" borderWidth="1px" borderRadius="lg" boxShadow="lg">
    <Heading as="h1" size="lg" mb="6" textAlign="center">Adicionar Gastos</Heading>

    <InputGroup mb="4">
      <InputLeftElement pointerEvents="none">
      </InputLeftElement>
      <Input type="text" placeholder="Data" />
    </InputGroup>

    <InputGroup mb="4">
      <InputLeftElement pointerEvents="none">
      </InputLeftElement>
      <Input type="text" placeholder="Valor" />
    </InputGroup>

    <InputGroup mb="6">
      <InputLeftElement pointerEvents="none">
      </InputLeftElement>
      <Input type="text" placeholder="Categoria" />
    </InputGroup>

    <InputGroup mb="6">
      <InputLeftElement pointerEvents="none">
      </InputLeftElement>
      <Input type="text" placeholder="Descrição" />
    </InputGroup>
    

    <Button colorScheme="teal" width="full">Adicionar</Button>
  </Box>
)
}

export default AdicionarGastos