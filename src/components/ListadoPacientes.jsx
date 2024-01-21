import Paciente from "./Paciente";

function ListadoPacientes({ pacientes }) {
  return (
    <div className="mr-5 md:overflow-y-scroll md:h-screen md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-3xl font-black text-center">Listado de Pacientes</h2>

          <p className="mt-5 mb-10 text-lg font-bold text-center">
            Administra tus{" "}
            <span className="text-indigo-600 ">Pacientes y Citas</span>
          </p>

          {pacientes.map(paciente => (
            <Paciente key={paciente.id}
              paciente={paciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-3xl font-black text-center">No hay pacientes Registrados</h2>

          <p className="mt-5 mb-10 text-lg font-bold text-center">
            Agrega nuevos pacientes{" "}
            <span className="text-indigo-600 ">Aqui</span>
          </p>
        </>
      )}

    </div>
  );
}

export default ListadoPacientes;
