import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css'
import { products } from '../data/products';


export const ShoppingPage = () => {
   

const {shoppingCart, onProductCountChange} = useShoppingCart();

            /*             if (count === 0)  {
            const {[product.id]: toDelete, ...rest} = oldShoppingCart;

            return {...rest}
            }
                return {
                    ...oldShoppingCart,
                    [product.id]: {...product, count}
                } */

                
                return (
                    <div >
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                
                {products.map(product => (
                    <ProductCard 
                    product={ product }
                    className='bg-dark text-white'
                    key={product.id}
                    onChange={onProductCountChange}
                    value={shoppingCart[product.id]?.count || 0}
                    
                    >
                    <ProductImage className='custom-image'/>
                    <ProductTitle className=' text-bold' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>
                ))}
                


            </div>

            <div className='shopping-cart'>

                    {
                        Object.entries(shoppingCart).map( ([ key, product ]) => (
                            
                            <ProductCard 
                            product={ product }
                            className='bg-dark text-white'
                            key={product.id}
                            style={{width:'100px'}}
                            value={product.count}
                            onChange={onProductCountChange}
                            >
                                      <ProductImage className='custom-image'/>
                                      <ProductButtons className='custom-buttons'
                                      style={{display: 'flex', justifyContent: 'center',}}
                                      />
                                  </ProductCard>

))
                    }
        
            </div>
        </div>
    )
}

