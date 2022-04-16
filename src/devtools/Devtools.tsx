import { Logo } from '@src/assets/img/logo';

const Devtools = () => {
  return (
    <div class='bg-[#673ab8] flex flex-1 flex-col text-center p-8 text-lg h-screen justify-center'>
      <Logo />
      <p class='text-white'>Hello Vite + Preact!</p>
      <p class='text-white'>
        <a
          class='border-b-2'
          href='https://preactjs.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Preact
        </a>
      </p>
      <p data-testid='devtools_text' class='p-6 text-3xl text-purple-400'>
        Dev tools panel
      </p>
    </div>
  );
};

export default Devtools;
