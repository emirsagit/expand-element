import Vue from "vue";
Vue.component("task-list", {
  template: `<div class="w-full"><p v-for="task in tasks"><task :task="task"></task></p></div>`,
  data() {
    return {
      tasks: [
        {
          description: "Go to work",
          completed: false,
          body:
            "A mene tu? Contemnit enim disserendi elegantiam, confuse loquitur. Quantum Aristoxeni ingenium consumptum videmus in musicis? Omnes enim iucundum motum, quo sensus hilaretur. Quae duo sunt, unum facit. Quid ergo hoc loco intellegit honestum? Dicimus aliquem hilare vivere; Quid igitur, inquit, eos responsuros putas? Suo enim quisque studio maxime ducitur. Nam ista vestra: Si gravis, brevis ",
        },
        {
          description: "Make a dinner",
          completed: false,
          body:
            "A mene tu? Contemnit enim disserendi elegantiam, confuse loquitur. Quantum Aristoxeni ingenium consumptum videmus in musicis? Omnes enim iucundum motum, quo sensus hilaretur. Quae duo sunt, unum facit. Quid ergo hoc loco intellegit honestum? Dicimus aliquem hilare vivere; Quid igitur, inquit, eos responsuros putas? Suo enim quisque studio maxime ducitur. Nam ista vestra: Si gravis, brevis ",
        },
        {
          description: "Do some homework",
          completed: false,
          body:
            "A mene tu? Contemnit enim disserendi elegantiam, confuse loquitur. Quantum Aristoxeni ingenium consumptum videmus in musicis? Omnes enim iucundum motum, quo sensus hilaretur. Quae duo sunt, unum facit. Quid ergo hoc loco intellegit honestum? Dicimus aliquem hilare vivere; Quid igitur, inquit, eos responsuros putas? Suo enim quisque studio maxime ducitur. Nam ista vestra: Si gravis, brevis ",
        },
        {
          description: "Play with child",
          completed: false,
          body:
            "A mene tu? Contemnit enim disserendi elegantiam, confuse loquitur. Quantum Aristoxeni ingenium consumptum videmus in musicis? Omnes enim iucundum motum, quo sensus hilaretur. Quae duo sunt, unum facit. Quid ergo hoc loco intellegit honestum? Dicimus aliquem hilare vivere; Quid igitur, inquit, eos responsuros putas? Suo enim quisque studio maxime ducitur. Nam ista vestra: Si gravis, brevis ",
        },
      ],
    };
  },
});

Vue.component("task", {
  data() {
    return {
      expand: false,
    };
  },
  props: ["task"],
  template: 
  `
  <div class="bg-blue-100 bg-opacity-25 rounded-lg p-2 flex flex-col mb-2">
  <div class="flex">
    <h3 class="text-xl text-red-800 flex-1 cursor-pointer" @click="expand = !expand">{{ task.description }}</h3>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-5 h-5 fill-current cursor-pointer" v-show="!expand"
    @click="expand = true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-5 h-5 fill-current cursor-pointer" v-show="expand"
    @click="expand = false"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/></svg>
  </div>
  <p v-show="expand" class="text-gray-600">{{ task.body }}</p>
</div>
`,
});

new Vue({
  el: "#app",
});
