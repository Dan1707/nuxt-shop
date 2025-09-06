<script lang="ts" setup>
import type { Product } from '~/types/product'

const props = defineProps<{
	product: Product
}>()

const isFavorite = ref(false)

const discount = ref(0)

if (props.product.price && props.product.discount) {
	discount.value = useDiscount(props.product.price, props.product.discount)
}
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

			<Icon
				@click="isFavorite = !isFavorite"
				:name="isFavorite ? 'mdi:heart' : 'mdi:heart-outline'"
				class="w-6 h-6 absolute top-5 right-5 text-primary"
			/>
			<NuxtImg
				:src="product.image"
				loading="lazy"
				v-if="product.image"
				class="w-full h-full object-cover bg-gray-200"
			/>
		</div>
		<div class="p-5 min-h-45 flex flex-col justify-between self-stretch">
			<h3 class="text-xl line-clamp-2">
				{{ product.title }}
			</h3>
			<div class="flex items-center gap-2">
				<p
					class="text-md mt-4 font-semibold"
					:class="{ 'line-through text-gray-400 text-sm': product.discount }"
				>
					${{ product.price }}
				</p>
				<p v-if="product.discount" class="text-md mt-4 font-semibold">
					${{ discount }}
				</p>
			</div>
			<Button class="mt-2">
				<Icon name="mdi:cart-outline" />
				Add to cart
			</Button>
		</div>
	</article>
</template>
