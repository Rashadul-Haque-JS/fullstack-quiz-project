<template>
    <article>
        <img class="genre-image" :src="require(`@/assets/${genre.image}`)" alt="genres image" />
        <section>
            <h1>{{ genre.genre }}</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua."</p>
        </section>

    </article>
</template>

<script>
export default {
    props: { genre: Object }
}
</script>

<style lang="scss" scoped>
article {
    width: 550px;
    height: 250px;
    padding: 24px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);


    img {
        width: 300px;
        height: 200px;
    }

    section {
        padding-left: 15px;

        h1,
        p {
            margin: 20px 0px 12px 0px;
            text-align: center;

        }

        h1 {
            text-transform: upperCase;
        }
    }

    article:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        border-width: 0 16px 16px 0;
        border-style: solid;
        border-color: #fff #fff #658E15 #658E15;
        background: #658E15;
        display: block;
        width: 0;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.2);
    }
}
</style>