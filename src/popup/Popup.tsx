import { Logo } from "@src/assets/img/logo";

const Popup = () => {
  return (
    <div className="bg-[#673ab8] w-full text-center p-8 text-lg">
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
    </div>
  );
};

export default Popup;
