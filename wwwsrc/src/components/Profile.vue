<template>
    <div class="profile container">
        <div class="row">
            <div class="col-xs-9">
                <h3>Your Keeps</h3>
                <button class="btn btn-default" type="button" @click="showModal = true">Create a Keep</button>
            </div>
            <div class="col-xs-3">
                <h3>Your Vaults</h3>
                <button class="btn btn-default" type="button" @click="showVaultModal = true">Create a Vault</button>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-9">
                <keeps></keeps>
            </div>
            <div class="col-xs-3">
                <div class="vaults" v-for="vault in vaults">
                    <span @click="getVault(vault._id)">
                        <router-link :to="'/profile/'+vault._id">{{vault.title}}</router-link>
                    </span>
                </div>
            </div>
        </div>
        <modal-keep-create v-if="showModal" @close="createKeep"></modal-keep-create>
        <modal-vault-create v-if="showVaultModal" @close="createVault"></modal-vault-create>
    </div>

</template>


<script>
    import Keeps from './Keeps'
    import ModalKeepCreate from './ModalKeepCreate'
    import ModalVaultCreate from './ModalVaultCreate'

    export default {
        name: 'profile',
        components: {
            Keeps,
            ModalKeepCreate,
            ModalVaultCreate
        },
        data() {
            return {
                showModal: false,
                showVaultModal: false
            }
        },
        watch: {
            userId: function () {
                this.$store.dispatch("getUser", this.userId)
            }
        },
        mounted() {
            this.$store.dispatch("getUser", this.$route.params.userid)
            this.$store.dispatch("getUserKeeps", this.$route.params.userid)
            this.$store.dispatch("getVaults")
        },
        methods: {

            createKeep(keep) {
                this.showModal = false;
            },
            createVault(vault) {
                this.showVaultModal = false;
            },
            getVault(id) {
                this.$store.dispatch('getVault', id)
            }
        },
        computed: {
            userId() {
                return this.$route.params.userid
            },
            userView() {
                return this.$store.state.viewUser
            },
            user() {
                //console.log("Computed:", this.$store.state.user)
                return this.$store.state.credentials
            },
            vaults() {
                return this.$store.state.vaults
            }
        }
    }
</script>

<style scoped>

</style>