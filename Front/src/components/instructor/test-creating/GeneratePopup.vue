<template>
  <div class="generate-exam" @click="$emit('close_popup')">
    <div class="content" @click.stop>
      <div class="loading">
        <svg
          class="spinner"
          width="65px"
          height="65px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            class="path"
            fill="none"
            stroke-width="6"
            stroke-linecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      </div>
      <h3 class="mt-3" style="color: #7f7f7f">
        Generating exam, Please wait ...
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
@import "../../../assets/sass/main.scss";
.generate-exam {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  background: #101010c9;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    min-height: 49%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 26px;
    box-shadow: 0px 0px 42px -13px black;
    border-radius: 9px;
    background-color: white;
  }
  $offset: 187;
  $duration: 1.4s;

  .loading {
    visibility: visible !important;
    opacity: 1 !important;
  }

  .spinner {
    animation: rotator $duration linear infinite;
  }

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(270deg);
    }
  }

  .path {
    stroke-dasharray: $offset;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash $duration ease-in-out infinite,
      colors ($duration * 4) ease-in-out infinite;
  }

  @keyframes colors {
    0% {
      stroke: #4285f4;
    }

    25% {
      stroke: #de3e35;
    }

    50% {
      stroke: #f7c223;
    }

    75% {
      stroke: #1b9a59;
    }

    100% {
      stroke: #4285f4;
    }
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: $offset;
    }

    50% {
      stroke-dashoffset: $offset/4;
      transform: rotate(135deg);
    }

    100% {
      stroke-dashoffset: $offset;
      transform: rotate(450deg);
    }
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: $titleColor !important;
    border-left: 1px solid $mainColor !important;
  }
  ::-webkit-scrollbar-thumb {
    background: $mainColor !important;
    transition: 0.2s;
    &:hover {
      background: $mainColor !important;
    }
  }

  //Media
  @media (max-width: 767px) {
    .loading svg {
      width: 40px;
    }
  }
}
</style>
