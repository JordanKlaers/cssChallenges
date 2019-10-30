<script>
export default {
	name: 'animations-mixin',
	data() {
		return {
		}
	},
	computed: {
	},
	mounted() {
		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function(cb) {
				setTimeout(() => cb(new Date()), 1000 / 60)
			}
		}
	},
	methods: {
		getPropertyIncrement(startValue, endValue, duration) {
			const TICK_TIME = 1000 / 60; //to achieve 60fps, 1 frame needs to render every 16ms
			const ticksToComplete = duration / TICK_TIME;
			return  (endValue - startValue) / ticksToComplete; //return the value that will be incremented each tick of the animation
		}
	}
};
</script>