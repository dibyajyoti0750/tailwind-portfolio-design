export default function Heading({ title, desc }) {
  return (
    <>
      <h1 className="text-4xl font-bold py-4 text-center">{title}</h1>
      <p className="text-center text-gray-600">{desc}</p>
    </>
  );
}
