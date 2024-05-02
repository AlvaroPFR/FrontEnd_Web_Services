<template>
  <div class="max-w-sm mx-auto bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-green-800 dark:text-green-300">Empleados</div>
      <div class="grid grid-cols-2 gap-4">
        <div class="text-zinc-700 text-base dark:text-zinc-300">
          <p><span class="font-bold">Nombres:</span> Jose</p>
          <p><span class="font-bold">Apellidos:</span> Perez</p>
          <p><span class="font-bold">Edad:</span> 30</p>
          <p><span class="font-bold">Dni:</span> 253658</p>
          <p><span class="font-bold">Cargo:</span> Operario</p>
          <p><span class="font-bold">Salario:</span> $350</p>
          <p><span class="font-bold">Telefono:</span> 985632145</p>
        </div>
        <div>
          <p class="font-bold mb-1">Fotografía</p>
          <img
              class="rounded-full w-24 h-24"
              src="https://placehold.co/100x100"
              alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmpleadoCard',
};
</script>

<style scoped>
</style>
