<template>
  <div id="app">
    <Navbar />
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/app/layouts/Navbar';

export default {
  components: {
    Navbar
  }
}
</script>