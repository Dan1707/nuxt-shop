import type { Product } from '~/types/product'

export const useProductsArr = () => useState<Product[]>('productsArr', () => [])
