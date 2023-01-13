<template>
	<svg
		class="header-logo"
		width="54"
		height="41.6"
		viewBox="0 0 69 50"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="9.51416" cy="8.53519" r="6" stroke="white" />
		<circle cx="61.5142" cy="8.53519" r="6" stroke="white" />
		<rect
			class="fiolet-rect"
			x="34.8606"
			width="13.217"
			height="53.6779"
			rx="6.60851"
			transform="rotate(40.4994 34.8606 0)"
			fill-opacity="0.5"
			fill="#7B4AE2"
		/>
		<rect
			class="white-rect"
			x="49.5647"
			y="15.1809"
			width="12.217"
			height="34.2079"
			rx="6.10851"
			transform="rotate(40.5 49.2977 15.0768)"
			fill="white"
			stroke="white"
		/>
	</svg>
</template>

<style lang="scss" scoped>
.header-logo {
	&:hover {
		.fiolet-rect {
			fill: white;
			fill-opacity: 1;
		}
		.white-rect {
			@apply fill-primary stroke-primary opacity-50;
		}
	}
}
.fiolet-rect,
.white-rect {
	transition: all 0.3s ease-in-out;
}
</style>
