import React, { useState } from 'react'
import { Box, Flex, Heading, Button, Stack, useBreakpointValue, InputGroup, InputLeftElement, Input, Text, Select} from '@chakra-ui/react';
import { createGasto, getCategories, getUserById } from '../../server/api';

const AdicionarGastos = ({ request }) => {

  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const [category, setCategory] = useState([])
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmitGasto = async () =>{

    if(name && cost && category && description){

      debugger
      try{
        await createGasto({ name, cost, category, description }).catch((error) => {
          console.log(error)
        })
        setSuccess('Gasto adicionado com sucesso!');
        setError('');
        setName('');
        setCost('');
        setCategory('');
        setDescription('');        
      }catch(error){
        console.error('Erro ao criar gasto na pagina de gasto:', error);
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
      console.log("erro pegando categoas",  e)
    }
  }

  
  return (
    <Box maxW="sm" mx="auto" mt="10" p="5" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Heading as="h1" size="lg" mb="6" textAlign="center">Adicionar Gastos</Heading>

      {error && <Text color="red.500" mb="4">{error}</Text>}
      {success && <Text color="green.500" mb="4">{success}</Text>}

      
        <InputGroup mb="4">
          <InputLeftElement pointerEvents="none">
          </InputLeftElement>
          <Input type="text" placeholder="Data" onChange={(e)=>setName(e.target.value)}/>
        </InputGroup>

        <InputGroup mb="4">
          <InputLeftElement pointerEvents="none">
          </InputLeftElement>
          <Input type="number" placeholder="cost" value={cost} onChange={(e) => setCost(e.target.value)} />
        </InputGroup>

        {/* <InputGroup mb="4">
          <InputLeftElement pointerEvents="none">
          </InputLeftElement>
          <Input type="text" placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
        </InputGroup> */}

        <Stack>
          { category.forEach((categoria) => <Select>{categoria.name}</Select> ) }
          <Select/>
        </Stack>

        <InputGroup mb="6">
          <InputLeftElement pointerEvents="none">
          </InputLeftElement>
          <Input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
        </InputGroup>

        <Button colorScheme="teal" width="full" type="submit" onClick={handleSubmitGasto}>Adicionar</Button>
    </Box>
  )
}

export default AdicionarGastos