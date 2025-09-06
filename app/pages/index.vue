<script lang="ts" setup>
import Skeleton from '~/components/ui/skeleton/Skeleton.vue'
</script>

<template>
	<div class="container mt-4">
		<h1 class="text-5xl">Welcome back, user!</h1>
	</div>
	<Suspense>
		<productWrapper />

		<template #fallback>
			Loading...
			<Skeleton class="w-full h-[391px]" />
		</template>
	</Suspense>
</template>
