import { Logo } from '@assets/img/logo';

const Popup = () => {
  return (
    <div class='bg-[#673ab8] w-full text-center p-8 text-lg'>
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
      <p data-testid='popup_text' class='p-6 text-3xl text-purple-400'>
        Pop up page
      </p>
    </div>
  );
};

export default Popup;
