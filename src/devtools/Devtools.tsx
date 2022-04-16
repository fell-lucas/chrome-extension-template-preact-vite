import { Logo } from "@src/assets/img/logo";

const Devtools = () => {
  return (
    <div className="bg-[#673ab8] flex flex-1 flex-col text-center p-8 text-lg h-screen justify-center">
      <Logo />
      <p className="text-white">Hello Vite + Preact!</p>
      <p className="text-white">
        <a
          className="border-b-2"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
      <p className="p-6 text-3xl text-purple-400">Devtools panel</p>
    </div>
  );
};

export default Devtools;
