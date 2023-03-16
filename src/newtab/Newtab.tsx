import { Logo } from '@src/assets/img/logo';

const Newtab = () => {
  return (
    <div class='flex h-screen flex-1 flex-col justify-center bg-[#673ab8] p-8 text-center text-lg'>
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
      <p data-testid='newtab_text' class='p-6 text-3xl text-purple-400'>
        New tab page
      </p>
    </div>
  );
};

export default Newtab;
