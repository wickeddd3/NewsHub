<template>
<div>
    <div class="container m-t-2 m-b-2">
        <h1 class="heading-primary m-l-1 m-b-1">
            <router-link to="/headlines">News Headlines</router-link>
        </h1>
        <div class="container__row">
            <template v-for="(article, index) in headlines">
                <div class="container__col-sm-12 container__col-md-6 container__col-lg-4 container__col-xl-4" :key="index">
                    <div class="headline">
                        <div class="headline__header">
                            <img class="headline__img" :src="article.urlToImage" alt="thumbnail" v-if="article.urlToImage">
                            <img class="headline__img" src="./../../assets/noimage.jpg" alt="thumbnail" v-else>
                        </div>
                        <div class="headline__body">
                            <h1 class="heading-title">
                                <a :href="article.url">{{ article.title }}</a>
                            </h1>
                            <p class="paragraph m-t-1 m-b-1" v-if="article.publishedAt">{{ formatDateToLongDate(article.publishedAt) }}</p>
                            <p class="paragraph" v-if="article.content">{{ article.content }}</p>
                        </div>
                        <span class="headline__author" v-if="article.author">{{ article.author }}</span>
                    </div>
                </div>
            </template>
        </div>
    </div>

    <div class="container m-t-4 m-b-2">
        <h1 class="heading-primary m-l-1 m-b-1">
            <router-link to="/latest-news">Latest News</router-link>
        </h1>
        <div class="container__row">
            <template v-for="(article, index) in latest_news">
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
            headlines:[],
            latest_news:[],
        }
    },

    created() {
        this.fetchNewsHeadlines();
        this.fetchLatestNews();
    },

    methods: {
        fetchNewsHeadlines() {
            this.$news.get(`/v2/top-headlines?country=us&pageSize=6`)
                .then(res => {
                    this.headlines = res.data.articles;
                })
                .catch(e => {
                    console.log(e.message);
                })
        },
        fetchLatestNews() {
            this.$news.get(`/v2/everything?domains=techcrunch.com,engadget.com,thenextweb.com&page=2`)
                .then(res => {
                    this.latest_news = res.data.articles;
                })
                .catch(e => {
                    console.log(e.message);
                })
        }
    }
}
</script>