export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header>
        <h1 className="text-6xl font-bold">Sample images</h1>
        <h3 className="text-md my-2">Powered by <a className="underline text-blue-400" href="https://picsum.photos/">Picsum Photos</a></h3>
      </header>
      <form action="/download" method="get" className="my-auto w-full h-full flex flex-row items-center justify-center gap-2">
        <input className="border outline-none border-black rounded-md px-2 py-1" type="number" min={1} max={500} placeholder="Count" defaultValue={5} name="count" />
        <input className="border outline-none border-black rounded-md px-2 py-1" type="number" min={1} placeholder="Width" defaultValue={1920} name="width" />
        <input className="border outline-none border-black rounded-md px-2 py-1" type="number" min={1} placeholder="Height" defaultValue={1080} name="height" />
        <button className="bg-green-800 text-white px-4 py-2 rounded-md">Download</button>
      </form>
    </main>
  );
}
