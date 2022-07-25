import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { deleteProduct, getAllProducts } from '../services/productsAPI';

export default function Content(){

    const [products, setProducts ] = useState([]);
    const [constProducts, setConstProducts] = useState([]);
    const [search, setSearch ] = useState('');

    //GetAllProducts
    async function getProducts(){
        const res = await getAllProducts();
        setProducts(res);
        setConstProducts(res);
    }


    useEffect(() => {
        getProducts();
    }, [])

    //Filter
    async function filterData(){
        const filtered = products.filter((e: any) => e.name === search);

        setProducts(filtered);

    }

    useEffect(()=>{
        if(search === ''){
            setProducts(constProducts);
        }
    },[search])

    //Delete
    async function destroyData(id: number){
        deleteProduct(id);
        window.location.reload();
    }


    return(
        <>
            <div className="w-100 ms-5">

                <div className='d-flex justify-content-between mb-4'>
                    <div>
                        <h5 className='text-primary'>Produtos Cadastrados</h5>
                    </div>

                    <div className=''>
                        <input type="text" className="h-100 p-2 rounded border border-secondary" placeholder='Sua Busca' value={search} onChange={(e:any) => setSearch(e.target.value)}/>
                        <button type="button" onClick={filterData} className="ms-3 btn btn-primary">BUSCAR</button>
                    </div>
                </div>

                <Table striped bordered hover size="sm">

                    <tbody>
                            {products? products.map((product: any) => (
                                <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.maker}</td>
                                <td>{product.quantity}</td>
                                <td>R$ {product.price}</td>
                                <td><a className="c-pointer" onClick={()=> {destroyData(product.id)}}><i className="text-danger bi bi-x-square"></i></a></td>
                                </tr>
                            ))
                        : 'Nenhum produto encontrado'}

                    </tbody>
                </Table>
            
            </div>
            <div>
                
            </div>


        </>
    )
}