<script lang="ts" setup>
import type { Database } from '../../database.types'
import type { Product } from '~/types/product'

const supa = useSupabaseClient<Database>()
const productsArr = useProductsArr()

await useAsyncData('products', async () => {
	const { data, error } = await supa.from('products').select('*')
	if (error) throw error
	productsArr.value = data as Product[]
})
</script>

<template>
	<section>
		<div class="container grid gap-2 grid-cols-5 mt-4">
			<productCard
				v-for="product in productsArr"
				:key="product.id"
				:product="product"
			/>
		</div>
	</section>
</template>
