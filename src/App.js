import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div className="font-extrabold font-mono bg-zinc-300 w-100 md:[w-50 font-extralight] rounded-sm md:my-2 my-5 w-[600px] mx-auto p-3.5">
          Tailwind CSS
        </div>

        {/* Breakpoint prefix	Minimum width	CSS
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... } */}
        <div>
          <img
            className="w-20 md:w-32 lg:w-48 mx-auto my-3"
            src="https://dummyimage.com/500x400/ff6699/000"
          ></img>
        </div>

        <button class="bg-[#1da1f2] hover:bg-sky-800 p-3.5 md:p-5 rounded-md focus:outline-red-300 font-extrabold">
          Save changes
        </button>

        <div class="mt-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src="https://picsum.photos/200/300"
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Company retreats
              </div>
              <a
                href="#"
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Incredible accommodation for your team
              </a>
              <p class="mt-2 text-slate-500">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div class="static my-3">
            <p className="w-64 h-64 bg-slate-300">Static parent</p>
            <div class="absolute w-6/12 h-4/6 bottom-0 bg-red-200 border-4 rounded-2xl	border-stone-700 flex justify-center items-center">
              <p>Absolute child</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    // colors links  https://tailwindcss.com/docs/customizing-colors
    // | spacing: {
    //       sm: '8px',
    //       md: '12px',
    //       lg: '16px',
    //       xl: '24px',
    //     }
    // p-sm, m-md, w-lg, and h-xl
  );
}

export default App;
