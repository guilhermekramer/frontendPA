
import React, { useState, useContext } from 'react';
import { Box, Heading, Input, InputGroup, InputLeftElement, Button, Stack, Text } from '@chakra-ui/react';
import { AtSignIcon, LockIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContexts'; 
import { loginUser } from '../../server/api'; 


const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("entrou")
      const { access } = await loginUser({ username, password });
      setAuth({ token: access });
      console.log("access", access);
      console.log("setAuth", setAuth);
      setSuccess('Login successful!');
      setError('');
      navigate('/');
    } catch (err) {
      setError('Login failed. Please check your username and password.');
      setSuccess('');
    }
  };

  return (
    <Box
      maxW="sm"
      mx="auto"
      mt="10"
      p="5"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Heading as="h1" size="lg" mb="6" textAlign="center">
        Coin-Cout
      </Heading>

      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AtSignIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Username"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <LockIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
          </InputGroup>

          <Button colorScheme="teal" width="full" type="submit">
            Login
          </Button>

          {success && <Text color="green.500" textAlign="center">{success}</Text>}
          {error && <Text color="red.500" textAlign="center">{error}</Text>}

          <Stack spacing="4" textAlign="center">
            <Text>
              Don't have an account?{' '}
              <Link to="/signup" style={{ color: '#319795' }}>
                Sign Up
              </Link>
            </Text>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
