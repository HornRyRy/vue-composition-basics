<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2, $event)" class="btn">++</button>
      <!-- Notice in the x2 counter, I have access to the event object via $event -->
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text">
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

//// non reactive data
const appTitle = 'My Ok Counter App'

//// refs
// const counter = ref(0)
// const counterTitle = ref('My Counter')

const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

const oddOrEven = computed(() =>{
  if (counterData.count % 2 === 0) return 'even'
  else return 'odd'
})

const increaseCounter = (amount, e) =>{
  // here we are using the event object from the button and passing it here
  console.log(e)
  counterData.count += amount
}
const decreaseCounter = (amount) =>{
  counterData.count -= amount
}
</script>

<!-- <script>
export default{
  data(){
    return{
      counter: 0
    }
  },
  methods:{
    increaseCounter(){
      this.counter++
    },
    decreaseCounter(){
      this.counter--
    }
  }
}
</script> -->

<!-- <script>
import { ref } from 'vue'

export default{
  setup(){
    const counter = ref(0)

    const increaseCounter = () =>{
      counter.value++
    }

    const decreaseCounter = () =>{
      counter.value--
    }

    return{
      counter,
      increaseCounter,
      decreaseCounter
    }
  }
}
</script> -->



<style>
.home{
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
.edit{
  margin-top: 60px;
}
</style>