/* Las fecha del sistema dextra estan en formato dd/mm/aaaa,
 Reactable las necesita en formato mm/dd/aaaa.
 Esta funcion convierte la fecha del sistema dextra en fecha para
el componente Reactable. */
export function fechaReactable(fecha) {
  const dia = fecha.substring(0, 2);
  const mes = fecha.substring(3, 5);
  const anio = fecha.substring(6, 10);

  return mes + '/' +  dia + '/' + anio;
}
