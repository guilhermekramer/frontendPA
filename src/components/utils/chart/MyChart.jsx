import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Box, Text } from '@chakra-ui/react';
import { getGastos } from '../../../server/api';

// Dados atualizados para incluir duas novas linhas
const data = [
  { name: 'Jan', value1: 4000, value2: 2400, value3: 2000 },
  { name: 'Feb', value1: 3000, value2: 1398, value3: 1500 },
  { name: 'Mar', value1: 2000, value2: 9800, value3: 1800 },
  { name: 'Apr', value1: 2780, value2: 3908, value3: 2500 },
  { name: 'May', value1: 1890, value2: 4800, value3: 2200 },
  { name: 'Jun', value1: 2390, value2: 3800, value3: 2300 },
  { name: 'Jul', value1: 3490, value2: 4300, value3: 2800 },
  { name: 'Ago', value1: 3490, value2: 4300, value3: 2900 },
  { name: 'Set', value1: 3490, value2: 4300, value3: 3000 },
  { name: 'Out', value1: 3490, value2: 4300, value3: 3100 },
  { name: 'Nov', value1: 3490, value2: 4300, value3: 3200 },
  { name: 'Dec', value1: 3490, value2: 4300, value3: 3300 },
];



const LineChartComponent = () => (
  <Box
    p={4}
    bg="white"
    borderRadius="md"
    shadow="md"
    width="90%"
    mx="auto"
    mb={6}
    display="flex"
    flexDirection="column"
    alignSelf="center"
  >
    <Text fontSize="xl" mb={4} textAlign="center">
      Categorias com maior gastos
    </Text>
    <LineChart dataKey={"name"}  width={1500} height={550} data={data}> 
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value1" stroke="#8884d8" strokeWidth={4} name="Linha 1" />
      <Line type="monotone" dataKey="value2" stroke="#82ca9d" strokeWidth={4} name="Linha 2" />
      <Line type="monotone" dataKey="value3" stroke="#ff7300" strokeWidth={4} name="Linha 3" />
    </LineChart>
  </Box>
);

export default LineChartComponent;
