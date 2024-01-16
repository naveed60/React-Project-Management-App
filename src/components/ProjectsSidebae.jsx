export default function ProjectSidebar() {
  return (
    <aside className=" px-8 py-16 bg-blue-900 text-stone-50 md-w-72 rounded-r-xl">
    <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h1>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-green-400 text-white-400 hover:bg-blue-600 hover:text-stone-100">+Add Project </button>
      </div>
      <ul></ul>
  </aside>
  );
}