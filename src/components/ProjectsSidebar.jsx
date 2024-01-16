import Button from "./Button";

export default function ProjectSidebar() {
  return (
    <aside className=" px-8 py-16 bg-blue-900 text-stone-50 md-w-72 rounded-r-xl">
    <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h1>
      <div>
        <Button> +Add Project</Button>

      </div>
      <ul></ul>
  </aside>
  );
}