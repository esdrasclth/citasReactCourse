function Error({mensaje}) {
  return (
    <div className="p-3 mb-3 font-bold text-center text-white uppercase bg-red-800 rounded-sm">
      <p>{mensaje}</p>
    </div>
  );
}

export default Error;
