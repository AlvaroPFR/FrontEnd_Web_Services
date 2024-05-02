<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold text-green-800 mb-6">Empleados</h1>
    <div class="flex justify-between mb-4">
      <button class="bg-green-500 text-white py-2 px-4 rounded-lg">Agregar empleado</button>
      <button class="bg-green-500 text-white py-2 px-4 rounded-lg">Crear Equipo</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded-lg shadow">
        <img src="https://placehold.co/100x100" alt="Empleado" class="mb-3" />
        <p><strong>DNI</strong> 9856347</p>
        <p><strong>Cargo</strong> Asesor</p>
        <button class="bg-green-300 text-green-800 py-1 px-3 rounded-full mt-2">Ver equipos</button>
        <button class="bg-green-300 text-green-800 py-1 px-3 rounded-full mt-2">Informacion</button>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <img src="https://placehold.co/100x100" alt="Empleado" class="mb-3" />
        <p><strong>DNI</strong> 20365478</p>
        <p><strong>Cargo</strong> Operario</p>
        <button class="bg-green-300 text-green-800 py-1 px-3 rounded-full mt-2">Ver equipos</button>
        <button class="bg-green-300 text-green-800 py-1 px-3 rounded-full mt-2">Informacion</button>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <img src="https://placehold.co/100x100" alt="Empleado" class="mb-3" />
        <p><strong>DNI</strong> 90365478</p>
        <p><strong>Cargo</strong> Operario</p>
        <button class="bg-green-300 text-green-800 py-1 px-3 rounded-full mt-2">Ver equipos</button>
        <button class="bg-green-300 text-green-800 py-1 px-3 rounded-full mt-2">Informacion</button>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <img src="https://placehold.co/100x100" alt="Empleado" class="mb-3" />
        <p><strong>DNI</strong> 20366578</p>
        <p><strong>Cargo</strong> Operario</p>
        <button class="bg-green-300 text-green-800 py-1 px-3 rounded-full mt-2">Ver equipos</button>
        <button class="bg-green-300 text-green-800 py-1 px-3 rounded-full mt-2">Informacion</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Empleados',
};
</script>

<style scoped>
/* Estilos si es necesario */
</style>
