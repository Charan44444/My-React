import Products from './Products'
import img1 from './assets/architecture.jpg'
import img2 from './assets/desert.jpg'
import img3 from './assets/book.jpg.jpg'
import img4 from './assets/pages.jpg'


function ProductsList() {
    const Product = [
        {
            id: 1,
            image: img1,
            name: 'Architecture',
            price: 2000
        },
        {
            id: 2,
            image: img2,
            name: 'Desert',
            price: 10000
        },
        {
            id: 3,
            image: img3,
            name: 'Books',
            price: 1000
        },
        {
            id: 4,
            image: img4,
            name: 'Pages',
            price: 5000
        }

    ]
    
   
    function handleDelete(id){
        const newbooks = Impbooks.filter()
    }

    Product.sort((x,y) =>x.price - y.price)
    const ListOfProducts = Product.map(
        (Product) =>
            <Products key={Product.id} image={Product.image} name={Product.name} price={Product.price} />)

    return (
        <>
            {ListOfProducts}
        </>
    )

}
export default ProductsList