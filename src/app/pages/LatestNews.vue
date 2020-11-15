<template>
<div>
    <div class="container m-t-2 m-b-2">
        <h1 class="heading-primary m-l-1 m-b-1">Latest News</h1>
        <div class="container__row">
            <template v-for="(article, index) in news">
                <div class="media" :key="index">
                    <div class="media__header">
                        <img class="media__img" :src="article.urlToImage" alt="thumbnail" v-if="article.urlToImage">
                        <img class="media__img" src="./../../assets/noimage.jpg" alt="thumbnail" v-else>
                    </div>
                    <div class="media__body">
                        <h1 class="heading-title">
                            <a :href="article.url">{{ article.title }}</a>
                        </h1>
                        <p class="paragraph" v-if="article.publishedAt">{{ formatDateToLongDate(article.publishedAt) }}</p>
                        <p class="paragraph" v-if="article.content">{{ article.content }}</p>
                    </div>
                    <span class="media__author" v-if="article.author">{{ article.author }}</span>
                </div>
            </template>
        </div>
    </div>

    <Footer />
</div>
</template>

<script>
import Footer from '@/app/layouts/Footer';
import dateFormat from '@/app/mixins/dateFormat';

export default {
    components: {
        Footer
    },

    mixins:[dateFormat],

    data() {
        return {
            news:[]
        }
    },

    created() {
        this.fetchLatestNews();
    },

    methods: {
        fetchLatestNews() {
            this.$news.get(`/v2/everything?domains=techcrunch.com,engadget.com,thenextweb.com&page=2`)
                .then(res => {
                    this.news = res.data.articles;
                })
                .catch(e => {
                    console.log(e.message);
                })
        }
    }
}
</script>