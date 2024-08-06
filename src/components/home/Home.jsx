import { getGastos, getUsers } from '../../server/api'
import MyChart from '../utils/chart/MyChart'
import './style.css'
const Home = () => {

  const data = getGastos()
  console.log("dasdasd", data) 
  return (<>
        <div className="container">
          <MyChart/>      
        </div>

        
    </>)
  
}

export default Home