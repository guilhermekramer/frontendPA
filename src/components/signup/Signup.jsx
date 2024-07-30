// components/signup/Signup.jsx

import React from 'react';
import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createUser } from '../../server/api';

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {

    event.preventDefault();

    try {
      const user = { name, username, email, password };
      console.log(user)
      await createUser(user);
      setSuccess('Account created successfully!');
      setError('');

    } catch (error) {

      setError('Failed to create account. Please try again.');
      setSuccess('');
    }
  };

  return (
    <Box maxW="md" mx="auto" p={4}>
      <Stack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Sign Up</Text>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            mb={4}
          />
          <Input
            placeholder="Userame"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            mb={4}
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={4}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb={4}
          />
          <Button colorScheme="teal" mt={4} type="submit">Sign Up</Button>
        </form>
        {success && <Text color="green.500">{success}</Text>}
        {error && <Text color="red.500">{error}</Text>}
        <Text>Already have an account? <Link to="/login"> Login</Link></Text>
      </Stack>
    </Box>
  );
}

export default Signup;
