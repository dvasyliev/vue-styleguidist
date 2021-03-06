<template>
  <button :style="styles" @click="handleClick">
    <slot/>
  </button>
</template>

<script>
import sizeMixin from './sizeMixin'

export default {
	name: 'app-button',
	mixins: [sizeMixin],
	props: {
		/**
		 * Sets the button font color
		 */
		color: {
			type: String,
			default: 'black'
		},
		/** Sets background color of the button
		 * @since 1.2.0
		 */
		background: {
			type: String,
			default: 'white'
		},
		/** @deprecated Use color instead */
		oldColor: String
	},
	computed: {
		styles() {
			return {
				'font-size': this.size,
				color: this.color,
				background: this.background
			}
		}
	},
	methods: {
		/** Triggered when button is clicked
		 * @event click
		 * @type {Event}
		 */
		/** Event for Alligator's example
		 * @event gator
		 * @type {Event}
		 */
		handleClick(e) {
			this.$emit('click', e)
			this.$emit('gator', e)
		}
	}
}
</script>

<docs>
This button is amazing, use it responsibly.

## Examples

Orange button:

```jsx
<app-button color="orange">Push Me</app-button>
```

Ugly button with pink font and blue background:

```jsx
<app-button color="pink" background="blue">
  Ugly button
</app-button>
```

with extra styling

```vue
<template>
  <div class="LoadingPickle-wrap">
    <app-button>Loading...</app-button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.LoadingPickle-wrap {
	padding: 20px;
	background-color: red;
}
</style>
```

Button containing custom tags:

```jsx
<app-button>
  Text with <b>bold</b>
</app-button>
```
</docs>
