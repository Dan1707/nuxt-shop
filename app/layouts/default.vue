<script lang="ts" setup></script>

<template>
	<div class="wrapper min-h-screen flex flex-col">
		<layoutHeader />
		<main class="flex-1 bg-gray-100">
			<slot />
		</main>
		<layoutFooter />
	</div>
</template>
