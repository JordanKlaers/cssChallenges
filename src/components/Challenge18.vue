<template>
	<div class="container" id="challenge-18" ref="container">
		<div class="circle center-position" @click="() => circleClickHandler('one')"></div>
		<div class="circle center-position" @click="() => circleClickHandler('two')"></div>
		<div class="circle center-position" @click="() => circleClickHandler('three')"></div>
		<div class="filled-circle center-position one" ref="filled-circle"></div>
	</div>
</template>

<script>
export default {
	name: 'container',
	components: {
	},
	props: {},
	data() {
		return {
			selectedCircle: 'one',
			left: 100,
			right: 100,
			currentFrame: null,
			increment: this.getPropertyIncrement(0, 100, 1000)
		}
	},
	mounted() {
		this.$refs['container'].style.background = `linear-gradient(to right,#9b59b6 0%, #9b59b6 ${100}%, #3498db ${100}%, #3498db ${100}%, #1abc9c ${100}%, #1abc9c 100%)`
	},
	methods: {
		circleClickHandler(index) {
			
			this.selectedCircle = index;
			if (this.$refs['filled-circle'].classList.contains('two') || index == 'two') this.$refs['filled-circle'].style.setProperty('transition', 'all 1s linear 0s');
			else this.$refs['filled-circle'].style.setProperty('transition', 'all 2s linear 0s');
			let circles = ['one', 'two', 'three']
			circles.forEach(circleClass => {
				if (circleClass == index) this.$refs['filled-circle'].classList.add(circleClass)
				if (circleClass != index) this.$refs['filled-circle'].classList.remove(circleClass)
			});
		},
		updateGradientString(val, oldVal) {
			if (val == 'one') {
				//move the right color to the right out of view
				if (this.right < 100) this.right += this.increment;
				else if (this.right > 100) this.right = 100;
				else {
					//continue
					//move the center color to the right out of view
					if (this.left < 100) this.left += this.increment;
					else if (this.left > 100) this.left = 100;
				}
				if (this.right != 100 || this.left != 100) this.currentFrame = window.requestAnimationFrame(() => this.updateGradientString(val, oldVal));
			}
			if (val == 'three') {
				//move left color to the left out of view
				if (this.left > 0) this.left -= this.increment;
				else if (this.left < 0) this.left = 0;
				else {
					//continue
					//move center color to the left out of view
					if (this.right > 0) this.right -= this.increment;
					else if (this.right < 0) this.right = 0;
				}
				if (this.right != 0 || this.left != 0) this.currentFrame = window.requestAnimationFrame(() => this.updateGradientString(val, oldVal));
			}
			if (val == 'two') {
				//move the left color to the left out of view
				if (this.left > 0) this.left -= this.increment;
				else if (this.left < 0) this.left = 0;
				//move the right color to the right out of view
				if (this.right < 100) this.right += this.increment;
				else if (this.right > 100) this.right = 100;
				
				if (this.left != 0 || this.right != 100) this.currentFrame = window.requestAnimationFrame(() => this.updateGradientString(val, oldVal));
			}
			this.$refs['container'].style.background = `linear-gradient(to right,#9b59b6 0%, #9b59b6 ${this.left}%, #3498db ${this.left}%, #3498db ${this.right}%, #1abc9c ${this.right}%, #1abc9c 100%)`
		},
	},
	watch: {
		selectedCircle(val, oldVal) {
			window.cancelAnimationFrame(this.currentFrame);
			this.currentFrame = window.requestAnimationFrame(() => this.updateGradientString(val, oldVal));
		}
	}
};
</script>
<style lang='scss' type="text/scss">
$radius: 60px;
$border-width: 2px;
#challenge-18 {
	.circle {
		width: $radius;
		height: $radius;
		border: $border-width solid white;
		border-radius: 50%;
		background-color: transparent;
		&:nth-of-type(1) {
			transform: translateY(-50%) translateX($radius * -2);
		}
		&:nth-of-type(3) {
			transform: translateY(-50%) translateX($radius);
		}
	}
	.filled-circle {
		width: $radius - ($border-width * 5);
		height: $radius - ($border-width * 5);
		border-radius: 50%;
		background-color: white;
		&.one {
			transform: translateX(-50%) translateY(-50%) translateX(-$radius * 1.5);
		}
		&.three {
			transform: translateX(-50%) translateY(-50%) translateX($radius  * 1.5);
		}
		&.two {
		}
	}
}
</style>


