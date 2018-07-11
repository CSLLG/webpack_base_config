<template>
	<div class="hello">
		{{msg}}
	</div>
</template>
<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'hello vue and webpack'
		}
	}
}
</script>
<style>
	.hello{
		font-size: 20px;
		color: green;
	}
</style>