import { Props as productButtonsProps} from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as productImageProps} from '../components/ProductImage';
import { Props as productTitleProps} from '../components/ProductTitle';


export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
}




export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Buttons: (Props: productButtonsProps) => JSX.Element
    Image: ( Props: productImageProps) => JSX.Element,
    Title: (Props: productTitleProps) => JSX.Element,
}


