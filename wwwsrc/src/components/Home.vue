<template>
    <div>
        <h2>Here are some of the Sticks people have been posting.</h2>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <keeps></keeps>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import keeps from './Keeps'
    export default {
        name: 'home',
        components: {
            keeps
        },
        // mounted() {
        //     this.$store.dispatch("getKeeps", { type: "any", query: "" })
        // },

    }

</script>

<style>

</style>