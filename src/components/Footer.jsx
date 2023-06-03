const Footer = () => {

  return (
    <footer className="bg-black">
      <div className="container flex flex-col items-center justify-center p-6 mx-auto mt-16 space-y-4 sm:space-y-0 sm:flex-row">
        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          © Copyright 2023. Algen | <span className="font-bold">All Rights Reserved</span>
          <br/>
          Designed by{" "}
          <a
            href="https://www.instagram.com/tinchodlapipol/"
            target="_blank" rel="noopener noreferrer"
          >
            <span className="font-bold text-purple-700 hover:text-purple-900">
              Martín Gómez Palacio
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;