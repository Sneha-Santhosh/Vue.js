const App = {
  data() {
    return {
      checkedNames: [],
      options: [
      { value: "Harry" },
      { value: "Ron" },
      { value: "Hermione" },
      { value: "Malfoy" },
      { value: "Voldy" }] };


  } };

Vue.createApp(App).mount('#app');