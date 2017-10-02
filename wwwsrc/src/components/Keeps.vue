<template>
    <div class="row">
        <div v-for="keep in keeps">
            <div class="col-xs-3">
                <div class="keep">
                    <div class="box">
                        <img :src="keep.imgurl" class="">
                        <h4 class="keep-description">{{keep.title}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'keeps',
        components: {
        },
        mounted() {
            this.$store.dispatch("getUserKeeps", this.$route.params.userid)
        },
        watch: {
            userId: function () {
                this.$store.dispatch("getUserKeeps", this.$route.params.userid)
            }
        },
        methods: {
            // updateSong(song) {
            //     this.showModal = false
            // },
            // save() {
            //     this.$emit('close', this.song)
            // },
            // exit() {
            //     this.$emit('close')
            // },
            // updateSong(song) {
            //     this.$store.dispatch("updateSong", song)
            // },
            // deleteSong(project) {
            //     console.log('deleteSong', project)
            //     this.$store.dispatch("deleteSong", project)
            //     this.$emit('close')
            // }
        },
        computed: {
            userId() {
                return this.$route.params.userid
            },
            userView() {
                return this.$store.state.viewUser
            },
            keeps() {
                return this.$store.state.keeps
            },
            keepView() {
                return this.$store.state.keepView
            },
            credentials() {
                //console.log("Computed:", this.$store.state.user)
                return this.$store.state.credentials
            }
        }
    }

</script>

<style>

</style>