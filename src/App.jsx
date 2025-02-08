import ImageViewer from "./components/ImageViewer";
import MyButton from "./components/MyButton";

function App() {
  return (
    <div className="items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="font-bold font-['Arial_Black'] text-3xl">
          Hi, I'm <span className="capitalize">Catherine Orbe</span>👋
        </h1>
        <p className="mt-4 text-lg">
          I’m passionate about crafting front web experiences. With basic
          expertise in{" "}
          <span className="font-['Arial_Black']">
            <span className="text-[#E65100] hover:text-[#FF9800] inline-block transition-all duration-500 hover:animate-wiggle">
              HTML,
            </span>{" "}
            <span className="text-[#2B59A1] hover:text-[#1E3A8A] inline-block transition-all duration-500 hover:animate-wiggle">
              CSS,
            </span>{" "}
            <span className="text-[#FFD600] hover:text-[#FFC107] inline-block transition-all duration-500 hover:animate-wiggle">
              JavaScript,
            </span>{" "}
          </span>
          and modern frameworks like{" "}
          <span className="font-['Arial_Black']">
            <span className="text-[#00ACC1] hover:text-[#0097A7] inline-block transition-all duration-500 hover:animate-wiggle">
              Tailwind,
            </span>{" "}
            <span className="text-[#80DEEA] hover:text-[#4DD0E1] inline-block transition-all duration-500 hover:animate-wiggle">
              React,
            </span>
          </span>{" "}
          and{" "}
          <span className="font-['Arial_Black'] text-[#FD3C4F] hover:text-[#D32F2F] inline-block transition-all duration-500 hover:animate-wiggle">
            Laravel.
          </span>{" "}
          also have a little knowledge in mobile application using{" "}
          <span
            className="font-['Arial_Black'] text-[#00C853] hover:text-[#008F48] inline-block transition-all duration-500 hover:animate-wiggle
          "
          >
            Android Studio.
          </span>
        </p>
        <div className="flex justify-center gap-4 mt-4">
          {/* GitHub Icon */}
          <a
            href="https://github.com/catherinetagao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#000"
                d="M24 4C12.95 4 4 12.95 4 24c0 8.84 5.73 16.3 13.69 18.95 1 .18 1.37-.44 1.37-.97v-3.85c-5.56 1.21-6.74-2.68-6.74-2.68-.91-2.32-2.22-2.93-2.22-2.93-1.81-1.23.14-1.21.14-1.21 2 .14 3.05 2.06 3.05 2.06 1.78 3.05 4.68 2.17 5.82 1.66.18-1.29.7-2.17 1.27-2.67-4.44-.5-9.12-2.22-9.12-9.88 0-2.18.78-3.96 2.05-5.36-.2-.5-.89-2.5.2-5.23 0 0 1.68-.54 5.51 2.05 1.6-.44 3.3-.66 5-.67 1.7 0 3.41.22 5 .67 3.83-2.59 5.51-2.05 5.51-2.05 1.1 2.73.41 4.73.2 5.23 1.28 1.4 2.05 3.18 2.05 5.36 0 7.68-4.69 9.38-9.14 9.87.72.62 1.35 1.85 1.35 3.72v5.51c0 .54.36 1.16 1.38.97C38.29 40.3 44 32.85 44 24 44 12.95 35.05 4 24 4z"
              />
            </svg>
          </a>
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/tagao.kate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#000"
                d="M44 24C44 12.95 35.05 4 24 4S4 12.95 4 24c0 9.85 7.2 18.04 16.6 19.7v-13.94h-5v-5.76h5v-4.36c0-4.94 2.9-7.68 7.3-7.68 2.12 0 4.3.38 4.3.38v4.72H30c-2.43 0-3.19 1.51-3.19 3.06v3.88h5.44l-.87 5.76h-4.57V44C36.8 42.04 44 33.85 44 24z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
