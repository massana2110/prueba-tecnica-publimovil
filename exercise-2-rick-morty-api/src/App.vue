<template>
  <div id="app">
    <Particles id="tsparticles" :options="options" />

    <header
      class="w-full flex justify-center pt-4 lg:justify-start lg:pl-4 absolute"
    >
      <img
        class="w-full max-w-xs sm:max-w-md"
        src="./assets/rick-morty-logo.png"
        alt="rick-morty-app"
      />
    </header>

    <main class="absolute block w-screen top-1/4">
      <character-list :characters="characters"></character-list>
    </main>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed, onMounted} from 'vue';
import CharacterList from './components/CharactersList.vue'

export default {
  name: 'App',
  components: {CharacterList},
  setup() {
    const store = useStore();

    onMounted(() => {
      console.log('On Mounted');

      store.dispatch('getRandomCharacters');
    });

    const characters = computed(() => store.state.characters);

    const options = {
      background: {
        color: {
          value: '#000000',
        },
      },
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: {
            enable: false,
            mode: 'bubble',
          },
          onclick: {
            enable: false,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };

    return {
      options,
      characters,
    };
  },
};
</script>

<style>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
