<template>
    <div>

        <div>{{vault.title}}</div>
        <div class="add-keep">
            <button type="button" class="btn btn-default" @click="showModal = true">Add a Keep</button>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <keeps></keeps>
                </div>
            </div>
        </div>
        <modal-add-keep v-if="showModal" @close="addKeep"></modal-add-keep>
    </div>
</template>

<script>
    import ModalAddKeep from './ModalAddKeep'
    import keeps from './Keeps'
    export default {
        name: 'vault',
        components: {
            keeps,
            ModalAddKeep
        },
        data() {
            return {
                showModal: false
            }
        },
        methods: {
            addKeep(keep) {
                this.showModal = false
            }
        }
        // mounted() {
        //     this.$store.dispatch("getKeeps", { type: "any", query: "" })
        // },

    }

</script>

<style>

</style>