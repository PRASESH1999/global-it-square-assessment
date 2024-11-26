export function PageHeader({ name }) {
  return (
    <div className="bg-white p-3 rounded-lg flex justify-start items-center ">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
    </div>
  );
}
