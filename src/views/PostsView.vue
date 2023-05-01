<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li>
        <RouterLink to="/postDetail/id1">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id2">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id3">Post 3</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus />
  </div>
</template>

<script setup>
//imports

import { vAutofocus } from '@/directives/vAutofocus';

// Posts

const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  },
])


</script>



<style scoped>
  ul {
    margin: 30px;
  }
</style>