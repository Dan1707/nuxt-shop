<script setup lang="ts">
import type { Product } from '~/types/product'
import Input from '../ui/input/Input.vue'
import type { Database } from '~~/database.types'

const productsArr = useProductsArr()

const supa = useSupabaseClient<Database>()

const inputText = ref('')

const searchProducts = async (): Promise<Product[]> => {
	const { data, error } = await supa
		.from('products')
		.select('*')
		.ilike('title', `%${inputText.value}%`)

	console.log(data)

	if (error) {
		console.log(error)
	}

	return (productsArr.value = data as Product[])
}
</script>

<template>
	<header
		class="border-b backdrop-blur-3xl sticky z-[999] top-0 w-full bg-gray-800 border-gray-200 py-5"
	>
		<div class="container gap-4 flex items-center justify-between">
			<div class="flex items-center gap-2 max-w-75 w-full justify-between">
				<div class="flex items-center gap-1">
					<h1 class="uppercase text-2xl font-black shrink-0 text-primary">
						Nuxt shop
					</h1>
					<Icon name="mdi:shopping-outline" class="w-8 h-8 text-primary" />
				</div>
				<Button size="lg">
					<Icon name="mdi:basket-outline" class="w-5 h-5" />
					Catalog
				</Button>
			</div>
			<div
				class="flex items-center max-w-[600px] bg-white rounded-full shadow w-full"
			>
				<Input
					type="search"
					v-model="inputText"
					placeholder="I search for..."
					@input="searchProducts"
					class="w-full !border-none shadow-none"
				/>
				<Icon name="mdi:search-web" class="w-6 h-6 mr-6" />
			</div>
			<nav class="max-w-[300px] w-full">
				<ul class="flex items-center gap-2.5 justify-between w-full">
					<li
						class="text-primary !font-primary text-lg flex items-center gap-2 cursor-pointer"
					>
						<Button variant="secondary">
							<Icon name="mdi:list-box-outline" class="w-6 h-6 text-white" />
						</Button>
					</li>
					<li
						class="text-primary !font-primary text-lg flex items-center gap-2 cursor-pointer"
					>
						<Button variant="secondary">
							<Icon name="mdi:scale-balance" class="w-6 h-6 text-white" />
						</Button>
					</li>
					<li
						class="text-primary !font-primary text-lg flex items-center gap-2 cursor-pointer"
					>
						<Button variant="secondary">
							<Icon name="mdi:cart-outline" class="w-6 h-6 text-white" />
						</Button>
					</li>
					<li
						class="text-primary !font-primary text-lg flex items-center gap-2 cursor-pointer"
					>
						<Button>
							<Icon name="mdi:account-badge-outline" class="w-5 h-5" /> log in
						</Button>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>
