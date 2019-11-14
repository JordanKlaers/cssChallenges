<template>
	<div class="container" id="challenge-23" ref="container">
		<div class="finish-button" ref="button" @click="animate">
			Finish
			<img ref="img" src="https://100dayscss.com/codepen/checkmark-green.svg">
		</div>
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
			dir: 'forwards'
		}
	},
	mounted() {
		this.$refs['button'].addEventListener('animationend', event => {
			if (this.dir == 'backwards') {
				if (event.animationName == 'ring-fade-in' && this.dir == 'backwards') {
					this.$refs['button'].classList.remove('ring-fade-in');
					this.$refs['button'].classList.remove('ring-fill');
					this.$refs['button'].classList.add('ring-fill-remove');
					
				} else if (event.animationName == 'ring-fill-remove') {
					this.$refs['button'].classList.remove('ring-fill-remove');
					this.$refs['button'].classList.remove('shrink');
					this.$refs['button'].classList.add('grow');
				} else if (event.animationName == 'grow')  {
					this.$refs['button'].classList.remove('grow');
					this.$refs['button'].classList.remove('shrink');
					this.dir = 'forwards';
				}
			}
			if (this.dir == 'forwards') {
				if (event.animationName == 'shrink')  {
					this.$refs['button'].classList.add('ring-fill');
				} else if (event.animationName == 'ring-fill') {
					this.$refs['button'].classList.add('fill-white');
					this.$refs['img'].classList.add('visible');
					this.$refs['button'].classList.add('ring-fade-out');
				} else if (event.animationName == 'ring-fade-out') {
					this.dir = 'backwards';
				}
			}
		});
	},
	methods: {
		animate() {
			if (this.dir == 'forwards') {
				this.$refs['button'].classList.add('shrink');
			} else if (this.dir == 'backwards') {
				this.$refs['button'].classList.remove('fill-white');
				this.$refs['img'].classList.remove('visible');
				this.$refs['button'].classList.remove('ring-fade-out');
				this.$refs['button'].classList.add('ring-fade-in');
			}
		}
		
		/*
		Animaiton Order:
			forwards:
				1.The shrink class is applied. The text becomes hidden via transparent color and the size of the button is reduced to make a circle
				the before psuedo class that makes up the border (via background color, negative z index and negative margin) fades to the darker color.
				2. The ring fill class is applied. The ::before during the shirnking changed from white to the darker color which matched the ::after the was behind it.
				whent he ring fill class was added the animation changing the clip path made it hidden, then appear to load in.
				3. The background of the main element becomes white, the img (checkmark) becomes visible, and the ring fade out class it applied.
				the ring fade out class makes the ::after element color instantly match the ::before (white), it then increases in size and reduces the opacity to fade out
			backwrads:
				1. the whitebackground on the main element fades away, the checkmark fades away, and a class swap is made to apply ring fade in
				ring fade in makes the ::after element decrease in size and become visible.
				right when the animation begins, the ::before elemenet is made transparnet (this is so that the circle does not show after the background white was removed (due to removing the .fill white class))
				3. ring fade in is removed, which allows the main circle to show so it may be removed (which is the ::before element)
				at this time the ::after element is the darker color (as no class is applied to change it - so the original darker color is visible) which allows for the ring removing animation to show to darker color before
				(::before is the ring animation and ::after is the darker color behind)
				4. now the ring animation is removed, and the shrink class is removed, so the Grow class/animation is added.Swapping the shrink/grow class applies a transition from gray back to white for the ::before element (which is on top)
				with a time equal to the animation time, that makes the button grow in size and the text appear again.
				
		*/
	},
	watch: {
	}
};
</script>
<style lang='scss' type="text/scss">
@import '_scss_/_mixins';
$main-color: #57D895;
$hover-color: #37BE77;
$darker-shade: #9ba59a;
$height: 65px;
$width: 300px;
@keyframes shrink {
	0% {
		width: $width;
		color: white;
		border-color: white;
		background-clip: padding-box;
		top: calc(50% - (#{$height}/2));
		left: calc(50% - (#{$width}/2));
	}
	25% {
		color: white;
	}
	35% {
		color: transparent;
	}
	100% {
		color: transparent;
		width: $height;
		top: calc(50% - (#{$height}/2));
		left: calc(50% - (#{$height}/2));
		background-clip: padding-box;

	}
}
@keyframes grow {
	0% {
		color: transparent;
		width: $height;
		top: calc(50% - (#{$height}/2));
		left: calc(50% - (#{$height}/2));
		background-clip: padding-box;
	}
	75% {
		color: transparent;
	}
	85% {
		color: white;
	}
	100% {
		width: $width;
		color: white;
		border-color: white;
		background-clip: padding-box;
		top: calc(50% - (#{$height}/2));
		left: calc(50% - (#{$width}/2));
	}
}
@keyframes ring-fade-out {
	0% {
		border-color: white;
		margin: -3px;
	}
	100% {
		margin: -$height/2;
		border-color: transparent;
	}
}
@keyframes ring-fade-in {
	0% {
		margin: -$height/2;
		border-color: transparent;
	}
	100% {
		border-color: white;
		margin: -3px;
	}
}

@keyframes ring-fill {
	0% { clip-path: polygon(50% 0, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%); }
	12% { clip-path: polygon(50% 0, 50% 50%, 100% 0,100% 0,100% 0,100% 0,100% 0,100% 0,100% 0); }
	25% { clip-path: polygon(50% 0, 50% 50%, 100% 50%, 100% 0,100% 0,100% 0,100% 0,100% 0,100% 0); }
	38% { clip-path: polygon(50% 0, 50% 50%, 100% 100%, 100% 100%,100% 100%,100% 100%,100% 100%,100% 0, 100% 0); }
	50% { clip-path: polygon(50% 0, 50% 50%, 50% 100%, 100% 100%, 100% 100%,100% 100%,100% 100%,100% 100%, 100% 0); }
	63% { clip-path: polygon(50% 0, 50% 50%, 0 100%, 0 100%, 0 100%, 0 100%,0 100%,100% 100%, 100% 0); }
	75% { clip-path: polygon(50% 0, 50% 50%, 0 50%, 0 50%, 0 50%, 0% 50%, 0 100%, 100% 100%, 100% 0); }
	88% { clip-path: polygon(50% 0, 50% 50%, 0 0, 0 0, 0 0, 0 0, 0 100%, 100% 100%, 100% 0); }
	100% { clip-path: polygon(50% 0, 50% 50%, 50% 0, 50% 0, 50% 0, 0 0, 0 100%, 100% 100%, 100% 0); }
}
@keyframes ring-fill-remove {
	0% { clip-path: polygon(50% 0, 50% 50%, 50% 0, 50% 0, 50% 0, 0 0, 0 100%, 100% 100%, 100% 0); }
	12% { clip-path: polygon(50% 0, 50% 50%, 0 0, 0 0, 0 0, 0 0, 0 100%, 100% 100%, 100% 0); }
	25% { clip-path: polygon(50% 0, 50% 50%, 0 50%, 0 50%, 0 50%, 0% 50%, 0 100%, 100% 100%, 100% 0); }
	38% { clip-path: polygon(50% 0, 50% 50%, 0 100%, 0 100%, 0 100%, 0 100%,0 100%,100% 100%, 100% 0); }
	50% { clip-path: polygon(50% 0, 50% 50%, 50% 100%, 100% 100%, 100% 100%,100% 100%,100% 100%,100% 100%, 100% 0); }
	63% { clip-path: polygon(50% 0, 50% 50%, 100% 100%, 100% 100%,100% 100%,100% 100%,100% 100%,100% 0, 100% 0); }
	75% { clip-path: polygon(50% 0, 50% 50%, 100% 50%, 100% 0,100% 0,100% 0,100% 0,100% 0,100% 0); }
	88% { clip-path: polygon(50% 0, 50% 50%, 100% 0,100% 0,100% 0,100% 0,100% 0,100% 0,100% 0); }
	100% { clip-path: polygon(50% 0, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%); }
}
#challenge-23 {
	background-color: $main-color;
	z-index: 1;
	$shrink-time: 0.5s;
	$ring-trace-time: 1.2s;
	$ring-fade-time: 0.6s;
	.finish-button {
		width: $width;
		height: $height;
		$border-width: 3px;
		background-color: $main-color;

		background-clip: padding-box;
		border: solid $border-width transparent;
		border-radius: $height/2;

		position: absolute;
		top: calc(50% - (#{$height}/2));
		left: calc(50% - (#{$width}/2));
		//needed to avoid the transform as it creates a new stacking context and destorys the ability the set the psudeo element behind its paretn (the button)
		//the psuedo element is needed to apply a conic gradient WITH border radius
		
		//the trick is position the psuedo element behind its parent with a slightly larger size and a conic gradient as a background, so that broder radius can still be used.

		text-align: center;
		line-height: $height - 5;
		font-size: 25px;
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: 2px;
		color: white;
		font-family: 'Open Sans', Helvetica, sans-serif;
		user-select: none;

		transition: $ring-fade-time;
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
			transition: $ring-fade-time;
			&.visible {
				opacity: 1;
			}
		}
		&::before {
			content: '';
			position: absolute;
			top: 0; left: 0; bottom: 0; right: 0;
			z-index: -1;
			margin: -3px;
			border-radius: inherit;
			background-color: white;
		}
		&::after {
			content: '';
			position: absolute;
			top: 0; left: 0; bottom: 0; right: 0;
			z-index: -2;
			margin: -3px;
			border-radius: $height;
			border: 3px solid $darker-shade;
			transition: border-color $shrink-time;
		}
		
		&:not(.shrink):hover {
			background: $hover-color;
			//need to add, because "background" overrides it for some reason
			background-clip: padding-box;
		}
		animation-fill-mode: both;
		
		//--------------------------------------------------------------------------------------------------------------
		// step one of the animaiton shrinking / growing
		//--------------------------------------------------------------------------------------------------------------
		&.shrink {
			animation-name: shrink;
			animation-duration: $shrink-time;
			animation-direction: normal;
			animation-iteration-count: 1;
			&::before {
				transition: $shrink-time;
				background-color: $darker-shade;
			}
		}
		&.grow {
			animation-duration: $shrink-time;
			animation-name: grow;
			animation-direction: normal;
			animation-iteration-count: 1;
			animation-timing-function: ease-in;
			&::before {
				transition: $shrink-time;
				border-color: white;
			}
		}
		//--------------------------------------------------------------------------------------------------------------
		// step two of the animaiton the ring tracer filling or getting removed
		//--------------------------------------------------------------------------------------------------------------
		&.ring-fill::before {
			animation: ring-fill $ring-trace-time 1 normal forwards linear;
			background-color: white;
		}
		&.ring-fill-remove::before {
			animation: ring-fill-remove $ring-trace-time 1 normal forwards linear;
			background-color: white;
		}
		//--------------------------------------------------------------------------------------------------------------
		// step three of the animaiton - the ring fades in or out (the background also fills white and the checkmark appears)
		//--------------------------------------------------------------------------------------------------------------
		&.ring-fade-out::after {
			animation: ring-fade-out $ring-fade-time 1 normal forwards linear;
		}
		&.ring-fade-in {
			&::after {
				animation: ring-fade-in $ring-fade-time 1 normal forwards linear;
			}
			&::before {
				border-color: transparent;
				background-color: transparent;
			}
		}
		&.fill-white {
			background-color: white !important;
		}
	}
}
</style>


