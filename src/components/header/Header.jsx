import React from 'react';
import { Box, Flex, Link, Heading, Button, Stack, useBreakpointValue } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContexts';
import { useHref, useLocation } from 'react-router-dom';


const Header = () => {
  const location = useLocation();
  const {logout} = useAuth();
  return (
    <Box bg="teal.500" color="white" py={3}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        align="center"
        justify="space-between"
        direction={useBreakpointValue({ base: 'column', md: 'row' })}
      >
        <Heading as="h1" size="lg">
         Coin-Cout
        </Heading>
        <Stack
          spacing={4}
          direction={useBreakpointValue({ base: 'column', md: 'row' })}
          align="center"
        >
          <Button variant="outline" colorScheme="whiteAlpha">
            Home
          </Button>
          <Button variant="outline" colorScheme="whiteAlpha">
            Categorias
          </Button>
          <Button variant="outline" colorScheme="whiteAlpha">
            Adicionar Gasto 
          </Button>

          {location.pathname !== "/login"  && (
            <Button variant="outline" colorScheme="whiteAlpha" onClick={logout}>
              Logout
            </Button>
          )}
          
        
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
