<template>
	<div class="container" id="contrast" ref="container">
		<div class="fish-body">
			<div class="head"></div>
			<div class="body-1"></div>
			<div class="body-2"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'contrast',
	components: {
	},
	props: {},
	data() {
		return {
		}
	},
	mounted() {
	},
	methods: {
	},
	watch: {
	}
};
</script>
<style lang='scss' type="text/scss">
#contrast {
	$white-fish: blue;
	.fish-body {
		bordeR: 1px solid black;
		height: 100%;
		width: 100%;
		position: relative;
		.head {
			position: absolute;
			height: 20%;
			width: 23%;
			background-color: $white-fish;
			clip-path: ellipse(50% 60% at 50% 10%);
			top: 45%;
			left: 15%;
			transform: rotate(15deg);
		}
		.body-1 {
			position: absolute;
			height: 20%;
			width: 38%;
			background-color: $white-fish;
			clip-path: ellipse(55% 60% at 50% 100%);
			top: 20%;
			left: 10%;
			transform: rotate(-40deg);
		}
		.body-2 {
			position: absolute;
			height: 15%;
			width: 25%;
			background-color: $white-fish;
			clip-path: ellipse(80% 60% at 50% 100%);
			top: 14%;
			left: 40%;
		}
	}
}

</style>


