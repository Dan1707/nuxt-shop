<script lang="ts" setup>
import type { Product } from '~/types/product'

defineProps<{
	product: Product
}>()

const isFavorite = ref(false)
</script>

<template>
	<article class="border-2 rounded-xl overflow-hidden" v-if="product">
		<div class="w-full h-60 relative">
			<div class="absolute top-5 left-5 flex flex-col gap-2">
				<span
					v-if="product.onSale"
					class="text-white !font-primary text-xs bg-red-500 rounded-full py-1 text-center px-3"
					>Sale</span
				>
				<span
					v-if="product.discount"
					class="text-white !font-primary text-xs bg-blue-500 rounded-full py-1 text-center px-3"
					>-{{ product.discount }}%</span
				>
			</div>
			<Button
				@click="isFavorite = !isFavorite"
				variant="icon_btn"
				class="absolute top-5 right-5"
			>
				<Icon
					:name="isFavorite ? 'mdi:heart' : 'mdi:heart-outline'"
					class="w-6 h-6"
				/>
			</Button>
			<img
				:src="product.image"
				v-if="product.image"
				class="w-full h-full object-cover bg-gray-400"
			/>
		</div>
		<div class="p-5 min-h-37 flex flex-col justify-between self-stretch">
			<h3 class="text-xl line-clamp-2">
				{{ product.title }}
			</h3>
			<div class="flex items-center justify-between mt-4">
				<p class="!font-primary text-xl">{{ product.price }}$</p>
				<Button>
					<Icon name="mdi:cart-outline" />
				</Button>
			</div>
		</div>
	</article>
</template>
