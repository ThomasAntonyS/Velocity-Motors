import Accesoriescard from "./Accessoriescard";

export default Accesories = () =>{

    const product =[
        {
            name:'Seat Cover',
            price:'1000'
        },
        {
            name:'Car freshner',
            price:'2000'
        }
    ]

    return(
        <>
            <p>hi</p>
            <Accesoriescard product={product} />
        </>
    )
}