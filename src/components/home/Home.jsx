import { getUsers } from '../../server/api'
import MyChart from '../utils/chart/MyChart'
import './style.css'
const Home = () => {

  const data = getUsers()
  console.log(data)
  return (<>
        <div className="container">

          <MyChart/>      
        </div>
    </>)
  
}

export default Home