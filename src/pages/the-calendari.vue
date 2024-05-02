<template>
  <div class="container">
    <header>
      <the-header-session />
    </header>
    <main>
      <calendar-crop></calendar-crop>
    </main>
  </div>
</template>

<script>
import TheHeaderSession from "@/components/the-header-session.component.vue";
import CalendarCrop from "@/components/calendar-crop.component.vue";

export default {
  name: 'the-calendari',
  components: {CalendarCrop, TheHeaderSession}

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 400px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>