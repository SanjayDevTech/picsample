export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <header>
        <h1 className="text-6xl font-bold">Pic Sample</h1>
        <h2 className="text-2xl">Download free to use sample images as zip</h2>
        <h3 className="text-md my-2">Powered by <a className="underline text-blue-400" href="https://picsum.photos/">Picsum Photos</a></h3>
      </header>
      <form action="/download" method="get" className="my-auto w-full h-full flex md:flex-row flex-col items-center justify-center gap-2">
        <input className="border outline-none border-black rounded-md px-2 py-1 w-24" type="number" min={1} max={500} placeholder="Count" defaultValue={5} name="count" />
        <input className="border outline-none border-black rounded-md px-2 py-1  w-32" type="number" min={1} placeholder="Width" defaultValue={1920} name="width" />
        <input className="border outline-none border-black rounded-md px-2 py-1  w-32" type="number" min={1} placeholder="Height" defaultValue={1080} name="height" />
        <select defaultValue="jpg" name="type">
          <option value="jpg">JPG</option>
          <option value="webp">WebP</option>
        </select>
        <button className="bg-green-800 text-white px-4 py-2 rounded-md">Download</button>
      </form>
    </main>
  );
}
