<template>
<div>
    <div class="container m-t-2 m-b-2">
        <h1 class="heading-primary m-l-1 m-b-1">Sources</h1>
        <template v-for="(source, index) in sources">
            <div class="source" :key="index">
                <h5 class="heading-title">{{ source.name }}</h5>
                <a class="link" :href="source.url">{{ source.url }}</a>
                <p class="paragraph">{{ source.description }}</p>
            </div>
        </template>
    </div>

    <Footer />
</div>
</template>

<script>
import Footer from '@/app/layouts/Footer';

export default {
    components: {
        Footer
    },

    data() {
        return {
            sources:[]
        }
    },

    created() {
        this.fetchLatestNews();
    },

    methods: {
        fetchLatestNews() {
            this.$news.get(`/v2/sources`)
                .then(res => {
                    this.sources = res.data.sources;
                })
                .catch(e => {
                    console.log(e.message);
                })
        }
    }
}
</script>