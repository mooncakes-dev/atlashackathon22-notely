<template>
    <div class="container">
        <router-link to="/">
            <h1>Notely</h1>
        </router-link>
        <!--        <img src="@/assets/logo.png" alt="logo icon" />-->
    </div>
</template>

<script>
import { Search } from '@element-plus/icons-vue';

export default {
    name: 'Navbar',
    components: {
        Search,
    },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    gap: 2px;

  a {
    text-decoration: none;
  }

    img {
        width: 6.2em;
        height: 5em;
    }

    h1 {
        color: var(--slate-700);
    }
}
</style>
