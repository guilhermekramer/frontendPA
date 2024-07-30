import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContexts.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    </ChakraProvider>

)
