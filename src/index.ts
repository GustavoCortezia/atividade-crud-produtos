import { Product } from "./types";
import { v4 as uuidv4} from 'uuid';

function listProducts(){
    products.forEach(product => {
        console.log(product);
    })
}

function createProduct(id:string, name:string, price:number):Product {
    const newP = {
        id: id,
        name: name,
        price: price
    }
    products.push(newP);
    return newP;
}

function editProduct(id:string, name:string, price:number) {
    let prod = products.find(product => { product.id == id});
    if(prod){
        prod.name == name;
        prod.price == price;
    } else {
        console.log("produto não encontrado");
    }
}

function deleteProduct(id:string){
    let prod = products.findIndex(product => { product.id == id});
    if(products[prod]){
        products.splice(prod);
    }
}



const p1:Product = {
    id: uuidv4(),
    name: "Caderno",
    price: 20
}

const p2:Product = {
    id: uuidv4(),
    name: "Caneta",
    price: 2
}

const p3:Product = {
    id: uuidv4(),
    name: "Livro",
    price: 50
}

const products:Product[] = [p1,p2,p3];



