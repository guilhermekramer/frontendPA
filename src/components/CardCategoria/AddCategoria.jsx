import React, { useState } from 'react'
import { Box, Flex, Heading, Button, Stack, useBreakpointValue, InputGroup, InputLeftElement, Input, Text, Select} from '@chakra-ui/react';
import { createGasto, getCategories, getUserById } from '../../server/api';

const AddCategoria = ({ request }) => {

    const [name, setName] = useState('')

  
    const handleSubmitGasto = async () =>{
  
      if(name){
  
        debugger
        try{
          await createGasto({ name }).catch((error) => {
            console.log(error)
          })
          setSuccess('Categoria adicionada com sucesso!');
          setError('');
          setName('');     
        }catch(error){
          console.error('Erro ao criar categoria na pagina de categoria:', error);
          setError(error)
        }
      }  
    }
  
    const retornoCategorias = async () => {
      try{
        const categorias = await getCategories()
        categorias.forEach((categoria) => setCategory(categoria.name))
        console.log("categorias", categorias)
      }catch(e){
        console.log("erro pegando categorias",  e)
      }
    }
  
    
    return (
      <Box maxW="sm" mx="auto" mt="10" p="5" borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Heading as="h1" size="lg" mb="6" textAlign="center">Adicionar Categoria</Heading>
  
        {error && <Text color="red.500" mb="4">{error}</Text>}
        {success && <Text color="green.500" mb="4">{success}</Text>}
  
          <InputGroup mb="6">
            <InputLeftElement pointerEvents="none">
            </InputLeftElement>
            <Input type="text" placeholder="Nome" value={description} onChange={(e) => setNome(e.target.value)} />
          </InputGroup>
  
          <Button colorScheme="teal" width="full" type="submit" onClick={handleSubmitGasto}>Adicionar</Button>
      </Box>
    )
  }

export default AddCategoria