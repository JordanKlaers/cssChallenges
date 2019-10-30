<template>
	<div id="app">
		<Container></Container>
	</div>
</template>

<script>
import Container from './components/container'
import { mapGetters } from 'vuex'
import store from './main.js'
export default {
	name: 'app',
	components: {
		Container
	},
	data() {
		return {
			count: 1
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
<style lang='scss' type="text/scss">
@import '~_scss_/app.scss';
</style>