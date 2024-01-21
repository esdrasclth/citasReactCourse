function Paciente({paciente}) {

  const {nombre, propietario, email, fecha, sintomas} = paciente;

  return (
    <div className="px-5 py-10 mb-3 ml-5 bg-white rounded-md">
      <p className="mb-3 font-bold uppercase text-slate-700">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="mb-3 font-bold uppercase text-slate-700">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="mb-3 font-bold uppercase text-slate-700">
        Email:{" "}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="mb-3 font-bold uppercase text-slate-700">
        Fecha de Alta:{" "}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="mb-3 font-bold uppercase text-slate-700">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>
    </div>
  );
}

export default Paciente;
