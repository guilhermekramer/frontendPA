import { getUsers } from "../server/api";

const useHomePage = () => {
    
    const [data, setData] = useState();

    useEffect(() => {
        const fetchDataGastos = async () => {
            const response = await getGastos();
            setData(response);
        }
    }, [])


}

export default useHomePage;