import { ProductCategory } from './product-category';

export interface Product {
    label: string;
    price: number;
    category: ProductCategory;
    isImported?: boolean;
}
