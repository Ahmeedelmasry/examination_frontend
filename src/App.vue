<template>
  <div class="app-dad">
    <div class="overlay"></div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "./assets/sass/main.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth !important;
}

::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

.app-dad {
  .overlay {
    background: $bgColor;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    background-image: url("https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60");
    background-size: cover;
    opacity: .9;
  }
}

.containre {
  width: 92%;
  margin: 0 auto;
}

@media (max-width: 576px) {
  .swal2-container {
    .swal2-icon {
      font-size: 10px;
    }

    .swal2-title {
      font-size: 18px;
    }

    .swal2-close {
      font-size: 30px;
    }

    .swal2-styled.swal2-confirm {
      font-size: 11px;
    }

    .swal2-styled.swal2-cancel {
      font-size: 11px;
    }
  }
}
</style>
