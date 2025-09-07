<script lang="ts" setup>
import type { Database } from '../../database.types'
import type { Product } from '~/types/product'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination'
import Skeleton from './ui/skeleton/Skeleton.vue'

const supa = useSupabaseClient<Database>()
const productsArr = useProductsArr()

const arrLength = ref(0)
const productsPerPage = 25

// Get amount of products
const { pending } = await useLazyAsyncData(
	'products',
	async () => {
		const { data, error } = await supa.from('products').select('*')
		if (error) throw error

		arrLength.value = data.length

		return data
	},
	{ server: false }
)

// Start and end of pagination
const start = ref(0)
const end = ref(productsPerPage)

// Pagination fetching data from SB
const isLoading = ref(false)

const getPaginationPage = async () => {
	try {
		isLoading.value = true

		const { data, error } = await supa
			.from('products')
			.select('*')
			.range(start.value, end.value)
		if (error) throw error

		productsArr.value = data as Product[]
	} catch (error) {
		console.log(error)
	} finally {
		isLoading.value = false
	}
}

// Counting start and end of current page
const goToCurrentPage = (p: number) => {
	start.value = productsPerPage * p - productsPerPage
	end.value = productsPerPage * p - 1

	console.log(start.value, end.value)
	getPaginationPage()
}

// Next and prev buttons logic
const next = () => {
	start.value = start.value + productsPerPage
	end.value = end.value + productsPerPage

	console.log(start.value, end.value)

	getPaginationPage()
}

const prev = () => {
	start.value = start.value - productsPerPage
	end.value = end.value - productsPerPage

	console.log(start.value, end.value)

	getPaginationPage()
}

// Fetching first pagination page
onMounted(() => {
	goToCurrentPage(1)
})
</script>

<template>
	<section>
		<div
			class="container grid gap-2 grid-cols-5 mt-4"
			v-if="pending || isLoading"
		>
			<Skeleton
				class="w-full h-[431px]"
				v-for="i in productsPerPage"
				:key="i"
			/>
		</div>

		<div class="container grid gap-2 grid-cols-5 mt-4" v-else>
			<productCard
				v-for="product in productsArr"
				:key="product.id"
				:product="product"
			/>
		</div>

		<Pagination
			class="my-5"
			v-slot="{ page }"
			:items-per-page="productsPerPage"
			:total="arrLength"
			v-if="pending === false"
		>
			<PaginationContent v-slot="{ items }">
				<PaginationPrevious @click="prev" />

				<template v-for="(item, index) in items" :key="index">
					<PaginationItem
						v-if="item.type === 'page'"
						:value="item.value"
						:is-active="item.value === page"
						@click="goToCurrentPage(item.value)"
					>
						{{ item.value }}
					</PaginationItem>
				</template>

				<PaginationNext @click="next" />
			</PaginationContent>
		</Pagination>
	</section>
</template>
