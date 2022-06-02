const fs = require('fs');

class Contenedor {

    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo
        async function exe() {
            await fs.promises.readFile(`./${nombreArchivo}`, 'utf-8')
                .then(async (data) => {
                    if(data.length === 0){
                        console.log('El archivo está vacio')
                        await fs.promises.writeFile(`./${nombreArchivo}`, '[]')
                    }
                })
                .catch(async (err) => {
                    console.log('Se creó el archivo')
                    await fs.promises.writeFile(`./${nombreArchivo}`, '[]')
                })
        }
        exe(); 
    }

    save(obj) {
        setTimeout(async () => {
            let archivo = await fs.promises.readFile(`./${this.nombreArchivo}`, 'utf-8')
            archivo = JSON.parse(archivo);
            if (archivo.length === 0) {
                const nuevoObj = {
                    ...obj,
                    id: 1
                }
                archivo.push(nuevoObj)
                let data = JSON.stringify(archivo);
                await fs.promises.writeFile(`./${this.nombreArchivo}`, data);
                try {
                    console.log(`Se guardó el archivo con el id: ${nuevoObj.id}`);
                } catch (error) {
                    console.log(`Error ${error}`)
                }
            } else {
                const nuevoObj = {
                    ...obj,
                    id: archivo.length + 1
                }
                archivo.push(nuevoObj)
                let data = JSON.stringify(archivo);
                await fs.promises.writeFile(`./${this.nombreArchivo}`, data);
                try {
                    console.log(`Se guardó el archivo con el id: ${nuevoObj.id}`);
                } catch (error) {
                    console.log(`Error ${error}`)
                }
            }
        }), 1000
    };

    getById(id) {
        setTimeout(async () => {
            let archivo = await fs.promises.readFile(`./${this.nombreArchivo}`, 'utf-8')
            archivo = JSON.parse(archivo);
            let obj = archivo.find(obj => obj.id === id)
            if (obj) {
                console.log(obj);
            } else {
                console.log(null)
            }
        }), 1000
    }


    async getAll() {
        let archivo = await fs.promises.readFile(`./${this.nombreArchivo}`, 'utf-8');
        archivo = JSON.parse(archivo);
        return console.log(archivo);
    }

    async deleteById(id) {
        let archivo = await fs.promises.readFile(`./${this.nombreArchivo}`, 'utf-8');
        archivo = JSON.parse(archivo);
        let newArr = archivo.findIndex(obj => obj.id == id);
        if(newArr === -1){
            console.log('No se encuentra el archivo')
        }else{
            archivo.splice(newArr, 1);
            archivo = JSON.stringify(archivo);
            await fs.promises.writeFile(`./${this.nombreArchivo}`, archivo);
            console.log('El archivo ha sido eliminado')
        }
    }

    async deleteAll() {
            await fs.promises.writeFile(`./${this.nombreArchivo}`, '[]')
            console.log('Archivo reseteado')
        
    }
}


/*CREAR EL ARCHIVO */

const arrProducts = [
    {
        nombre: 'Coca-Cola',
        precio: '$250',
        thumbnail: 'https://jumboargentina.vtexassets.com/arquivos/ids/666704/Coca-cola-Sabor-Original-1-5-Lt-2-245092.jpg?v=637674357676600000'
    },
    {
        nombre: 'Pepsi',
        precio: '$200',
        thumbnail: 'http://cdn.shopify.com/s/files/1/0254/2947/5433/products/gaseosa-pepsi-pet-500-siempreencasa_1000x.png?v=1629814534'

    },
    {
        nombre: '7Up',
        precio: '$230',
        thumbnail: 'https://cdn.shopify.com/s/files/1/0254/2947/5433/products/gaseosa-7up-sin-azucar-pet-1500-siempreencasa_1_500x.png?v=1643387499?nocache=0.11452011740766466'

    }
] 

for(let i = 0; i < arrProducts.length; i++){
    setTimeout(() => {
    productos.save(arrProducts[i])
    }, 1000 * i)
} 


 const productos = new Contenedor('productos.txt'); 


// productos.save(productos[0])

// productos.getById(1)

// productos.getAll()

// productos.deleteById(1)

// productos.deleteAll()
