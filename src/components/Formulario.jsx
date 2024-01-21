/* eslint-disable react/prop-types */
import { useState } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  const generarId = () => {

    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion de formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const objetoPacientes = { 
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      id: generarId()
    };

    setPacientes([...pacientes, objetoPacientes]);

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  };

  return (
    <div className="mx-5 md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl font-black text-center">
        Seguimiento de Pacientes
      </h2>

      <p className="mt-5 mb-10 text-lg font-bold text-center">
        Añade Pacientes y <span className="text-indigo-600">Administralos</span>
      </p>

      <form
        action=""
        onSubmit={handleSubmit}
        className="px-5 py-10 bg-white rounded-md shadow-sm"
      >
        <div className="mb-5">
          {error && (
            <Error mensaje="Todos los campos son obligatorios" />
          )}

          <label htmlFor="mascotas" className="block font-bold uppercase">
            Nombre Mascota
          </label>
          <input
            id="mascotas"
            type="text"
            className="w-full p-2 mt-2 border-2 rounded-sm text-slate-400"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block font-bold uppercase">
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            className="w-full p-2 mt-2 border-2 rounded-sm text-slate-400"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block font-bold uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 mt-2 border-2 rounded-sm text-slate-400"
            placeholder="Email de contacto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block font-bold uppercase">
            Fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            className="w-full p-2 mt-2 border-2 rounded-sm text-slate-400"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block font-bold uppercase">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="w-full p-2 mt-2 border-2 rounded-sm text-slate-400"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Agregar Paciente"
          className="w-full p-3 mb-2 font-bold text-white uppercase transition-all bg-indigo-600 rounded-sm cursor-pointer text-bold hover:bg-indigo-800"
        />
      </form>
    </div>
  );
}

export default Formulario;
