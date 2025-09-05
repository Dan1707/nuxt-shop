<script setup lang="ts">
import Input from '../ui/input/Input.vue'
</script>

<template>
	<header
		class="border-b backdrop-blur-3xl sticky z-[999] top-0 w-full bg-gray-800 border-gray-200 py-5"
	>
		<div class="container gap-4 flex items-center justify-between">
			<div class="flex items-center gap-2 max-w-75 w-full justify-between">
				<div class="flex items-center gap-2">
					<Icon name="mdi:shopping-outline" class="w-8 h-8 text-white" />
					<h1 class="uppercase text-3xl font-black shrink-0 text-primary">
						Nuxt shop
					</h1>
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
					placeholder="I search for..."
					class="w-full !border-none shadow-none"
				/>
				<Button>
					<Icon name="mdi:search-web" />
				</Button>
			</div>
			<nav class="max-w-[350px] w-full">
				<ul class="flex items-center gap-2.5 justify-between w-full">
					<li
						class="text-primary !font-primary text-lg flex items-center gap-2 cursor-pointer"
					>
						<Button variant="secondary">
							<Icon name="mdi:list-box-outline" class="w-5 h-5" />
						</Button>
					</li>
					<li
						class="text-primary !font-primary text-lg flex items-center gap-2 cursor-pointer"
					>
						<Button variant="secondary">
							<Icon name="mdi:scale-balance" class="w-5 h-5" />
						</Button>
					</li>
					<li
						class="text-primary !font-primary text-lg flex items-center gap-2 cursor-pointer"
					>
						<Button variant="secondary">
							<Icon name="mdi:cart-outline" class="w-5 h-5" />
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
