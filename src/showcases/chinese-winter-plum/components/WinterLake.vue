<template>
  <div class="winter-lake">
    <div class="winter-lake__shore"></div>
    <div class="winter-lake__island"></div>
    <div class="winter-lake__ice"><span v-for="line in 4" :key="line"></span></div>
  </div>
</template>

<style scoped>
.winter-lake {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: var(--wp-red);
}
.winter-lake__shore {
  position: absolute;
  top: 42%;
  left: -10%;
  width: 125%;
  height: 8%;
  border-top: 3px solid var(--wp-snow);
  border-radius: 45% 65% 0 0;
  transform: rotate(-4deg);
  opacity: 0.65;
}
.winter-lake__island {
  position: absolute;
  top: 37%;
  right: 5%;
  width: 38%;
  height: 13%;
  border-radius: 90% 50% 0 0;
  background: var(--wp-snow);
  opacity: 0.25;
}
.winter-lake__ice {
  position: absolute;
  inset: 51% 10% 12%;
  transform: rotate(-4deg);
}
.winter-lake__ice span {
  position: absolute;
  left: 5%;
  top: 15%;
  width: 90%;
  height: 30%;
  border-top: 1px solid var(--wp-snow);
  border-radius: 50%;
  opacity: 0.3;
}
.winter-lake__ice span:nth-child(2) {
  top: 40%;
  left: -15%;
  width: 75%;
}
.winter-lake__ice span:nth-child(3) {
  top: 65%;
  left: 35%;
  width: 85%;
}
.winter-lake__ice span:nth-child(4) {
  top: 86%;
  left: 0;
  width: 42%;
  opacity: 0.2;
}
</style>
