<script lang="ts" setup>
definePageMeta({
	layout: 'auth',
})
const supa = useSupabaseClient()
const router = useRouter()

const email = ref('')
const password = ref('')
const isLogIn = ref(true)

// Sign up new user
const signUp = async () => {
	try {
		const { data, error } = await supa.auth.signUp({
			email: email.value,
			password: password.value,
		})

		console.log(data.user)

		router.push('/')

		if (error) throw error
	} catch (error) {
		console.log(error)
	}
}
</script>

<template>
	<div class="min-h-screen flex items-center justify-center">
		<div class="w-full max-w-150">
			<div class="container">
				<h2 class="text-4xl text-center">Sign {{ isLogIn ? 'in' : 'up' }}</h2>
				<form
					class="w-full bg-white shadow-xl border p-5 rounded-xl flex flex-col gap-4 mt-4"
				>
					<label v-if="!isLogIn">
						User name:
						<Input placeholder="User name..." type="text" />
					</label>
					<label>
						Email:
						<Input v-model="email" placeholder="Email..." type="email" />
					</label>
					<label>
						Password:
						<Input
							v-model="password"
							placeholder="Password..."
							type="password"
						/>
					</label>
					<label v-if="!isLogIn">
						Phone number:
						<Input placeholder="Phone number..." type="tel" />
					</label>
					<Button @click.prevent="signUp"> Sign up </Button>
					<div class="flex items-center justify-between gap-4">
						<hr class="w-full h-2 stroke-black" />
						<p class="my-5 text-center text-lg font-medium">or</p>
						<hr class="w-full h-2 stroke-black" />
					</div>
					<Button variant="outline">
						Continue with Google
						<img
							class="w-6 h-6"
							src="../assets/img/Google__G__logo.svg.webp"
							alt="google logo"
						/>
					</Button>
					<Button variant="link" @click.prevent="isLogIn = !isLogIn">
						{{
							isLogIn
								? `Don't have an account? Sign up`
								: 'Already have an account? Sign in!'
						}}
					</Button>
				</form>
			</div>
		</div>
	</div>
</template>
