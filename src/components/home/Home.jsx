import CategoriaElement from '../CardCategoria/CategoriaElement'
import './style.css'
const Home = () => {
  return (<>
        <div className="container">

            
            <main>
                {/* <section className="categorias">
                    <h1 className="title">Categorias</h1>
                    <div>
                        <div className="categoria-list">
                        <CategoriaElement/>
                        </div>


                        <div className="categoria-item">
                            <CategoriaElement/>
                        </div>
                        <div className="categoria-item">
                         <CategoriaElement/>
                        </div>
                        <div className="categoria-item">
                            <CategoriaElement/>
                        </div>
                        <div className="categoria-item">
                            <CategoriaElement/>
                        </div>
                        <div className="categoria-item">
                            <CategoriaElement/>
                        </div>
                        <div className="categoria-item">
                            <CategoriaElement/>
                        </div>
                        <div className="categoria-item">
                            <CategoriaElement/>
                        </div>
                    </div>
                </section> */}
                <section className="gastos">
                    <h1 className="title">Gastos</h1>
                    <div className="gasto-header">
                        <span>Data</span>
                        <span>Valor</span>
                        <span>Descrição</span>
                        <span>Categoria</span>
                    </div>
                    <div className="gasto-list">
                        <div className="gasto-item">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <button className="button is-link is-hovered">Add gasto</button>
                </section>
            </main>
        </div>
    </>)
  
}

export default Home