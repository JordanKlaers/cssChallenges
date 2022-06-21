<template>
	<div id="app">
		<!-- <challenge-18></challenge-18> -->
		<!-- <component :is="this.components[1]"></component> -->
	</div>
</template>

<script>
// import Challenge18 from './components/Challenge18'
// import Challenge23 from './components/Challenge23'
// import Contrast from './components/Codevember/contrast'
export default {
	name: 'app',
	components: {
		// 'challenge-18': Challenge18,
		// 'challenge-23': Challenge23,
		// 'contrast': Contrast
	},
	data() {
		return {
			components: ['challenge-18', 'challenge-23', 'contrast']
		}
	},
	computed: {
	},
	mounted() {
	},
	methods: {
	}
};
</script>