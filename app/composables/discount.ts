export const useDiscount = (price: number, discount: number) => {
	const discountPrice = (price * discount) / 100

	return Math.round(price - discountPrice)
}
