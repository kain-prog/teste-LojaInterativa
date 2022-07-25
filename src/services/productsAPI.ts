import axios from 'axios';

const enderecoAPI = axios.create({
    baseURL: 'http://localhost:3333/api'
});

async function getAllProducts(){
    let {data, status} = await enderecoAPI.get('/')
    if(status === 200){
        return data;
    }else{
        return console.log(status);
    }
}


async function createProduct(product: any){
    let query = await enderecoAPI.post('/', product );
    return query;
}

async function deleteProduct(id: number){
    await enderecoAPI.delete(`/${id}`);
}

export { getAllProducts, createProduct, deleteProduct};