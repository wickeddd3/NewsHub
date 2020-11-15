<template>
<div>
    <div class="navbar">
        <div class="nav">
            <div class="nav-l">
                <div class="nav__item">
                    <router-link to="/" class="nav__link">
                        <span class="nav__name--title">NewsHub</span>
                    </router-link>
                </div>
            </div>
            <div class="nav-r">
                <div class="nav__item">
                    <router-link to="/headlines" class="nav__link">
                        <span class="nav__name">Headlines</span>
                    </router-link>
                </div>
                <div class="nav__item">
                    <router-link to="/latest-news" class="nav__link">
                        <span class="nav__name">News</span>
                    </router-link>
                </div>
                <div class="nav__item">
                    <router-link to="/sources" class="nav__link">
                        <span class="nav__name">Sources</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>