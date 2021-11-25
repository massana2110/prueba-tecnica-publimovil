<template>
  <div :id="character.id" class="card relative bg-transparent rounded h-60 w-60 mb-10" @click="flipCard(character.id)">
    <div class="card-front rounded h-60 overflow-hidden w-60 grid absolute top-0">
      <img
        class="col-span-1 row-span-1 h-60 object-cover w-full"
        :src="character.image"
        :alt="character.name"
      />
      <h2
        class="
          rounded-tr-lg
          rounded-br-lg
          w-3/4
          card-name
          bg-green-400
          text-white text-base
          absolute
          bottom-2
          mb-3
          py-1
          pr-6 
          pl-2
          text-left
          uppercase
        "
      >
        {{character.name}}
      </h2>
    </div>
    <div
      class="
        card-back
        rounded
        h-60
        overflow-hidden
        w-60
        bg-gray-600
        text-sm
        py-8
        px-6
        absolute
        top-0
      "
    >
      <div class="card-description">
        <div class="flex w-full mb-3">
          <h3 class="text-white font-bold">Name:</h3>
          <p class="text-white pl-3">{{ character.name }}</p>
        </div>

        <div class="flex w-full mb-3">
          <h3 class="text-white font-bold">Status:</h3>
          <p class="text-white pl-3">{{ character.status }}</p>
        </div>

        <div class="flex w-full mb-3">
          <h3 class="text-white font-bold">Last Ubication:</h3>
          <p class="text-white pl-3">{{ character.location.name }}</p>
        </div>

        <div class="flex w-full mb-3">
          <h3 class="text-white font-bold">First Seen: </h3>
          <p class="text-white pl-3">{{ character.firstEpisode }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterItem',
  props: {
    character: Object,
  },
  methods: {
    flipCard(element){
      const card = document.getElementById(element)
      card.classList.toggle('flipped');
    }
  }
};
</script>

<style scoped>
.card-front,
.card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}

.card {
  transform: rotateY(0) scale(1);
  transform-style: preserve-3d;
  transition: transform 0.25s ease-in-out;
  perspective: 60rem;
}

.card:focus, .card:hover {
  cursor: pointer;
  outline: 0 none;
  transform: rotateY(0) scale(1.05);
}

.card.flipped:focus,
.card.flipped:hover {
  transform: rotateY(180deg) scale(1.05);
}

.card.flipped {
  transform: rotateY(180deg) scale(1);
}

</style>
