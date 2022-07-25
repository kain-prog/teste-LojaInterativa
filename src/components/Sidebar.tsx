import { useState } from "react"
import { createProduct } from "../services/productsAPI";

export default function Sidebar(){

    const [name, setName] = useState('');
    const [maker, setMaker] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    function onSubmit(e: any){

        const product = {
            name: name,
            maker: maker,
            category: category,
            quantity: quantity,
            price: price
        }

        newProducts(product);
    }


    async function newProducts(product: any){
        await createProduct(product);
    }

    


    return(
        <>

            <div className="">
                <div className="mb-4">
                    <h5 className="text-primary">Cadastrar Produto</h5>
                </div>

                <form onSubmit={onSubmit}>

                
                    <div className="mb-3">
                        <p className="text-primary fs-7">NOME DO PRODUTO</p>
                        <input className="rounded border border-secondary" type="text" value={name} onChange={(e: any) => setName(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <p className="text-primary fs-7 fw-light">FABRICANTE DO PRODUTO</p>
                        <input className="rounded border border-secondary" type="text"  value={maker} onChange={(e: any) => setMaker(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <p className="text-primary fs-7">CATEGORIA DO PRODUTO</p>
                        <input className="rounded border border-secondary" type="text"  value={category} onChange={(e: any) => setCategory(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <p className="text-primary fs-7">QUANTIDADE</p>
                        <input className="rounded border border-secondary" type="number"  value={quantity} onChange={(e: any) => setQuantity(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <p className="text-primary fs-7">VALOR UNIDADE</p>
                        <input className="rounded border border-secondary" type="number"  value={price} onChange={(e: any) => setPrice(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Adicionar Produto</button>


                </form>

                
            </div>
            
        </>
    )
}