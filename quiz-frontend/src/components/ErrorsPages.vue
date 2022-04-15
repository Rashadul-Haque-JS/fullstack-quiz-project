<template>
    <div :class="infoToC">
        <p class="message" v-if="message">{{ message }}</p>
        <p class="errorMessage" v-if="errorMessage && !message">{{ errorMessage }}</p>
        
    </div>
</template>


<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['message', 'errorMessage']),
        infoToC() {
            return this.errorMessage ? 'red' : 'green'
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    .message,
    .errormessage {
        text-align: center;
    }

    .errormessage {
        color: #fff;
    }

    .green {
        background-color: #A6BC09;
    }

    .red {
        background-color: #FB0204;
    }


}
</style>