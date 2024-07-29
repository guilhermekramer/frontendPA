import React from 'react'
import { Box, Flex, Heading, Button, Stack, useBreakpointValue, InputGroup, InputLeftElement, Input} from '@chakra-ui/react';

const CadastroComponent = () => {
  return (
    <Box maxW="sm" mx="auto" mt="10" p="5" borderWidth="1px" borderRadius="lg" boxShadow="lg">
    <Heading as="h1" size="lg" mb="6" textAlign="center">Coin-Cout</Heading>

    <InputGroup mb="4">
      <InputLeftElement pointerEvents="none">
      </InputLeftElement>
      <Input type="text" placeholder="User" />
    </InputGroup>

    <InputGroup mb="4">
      <InputLeftElement pointerEvents="none">
      </InputLeftElement>
      <Input type="text" placeholder="E-mail" />
    </InputGroup>

    <InputGroup mb="6">
      <InputLeftElement pointerEvents="none">
      </InputLeftElement>
      <Input type="password" placeholder="Password" />
    </InputGroup>

    <Button colorScheme="teal" width="full">Cadastra-se</Button>
  </Box>
)
}

export default CadastroComponent