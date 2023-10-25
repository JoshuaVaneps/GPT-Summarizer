import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Sumz_Logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/JoshuaVaneps")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles With <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Streamline Your Reading with Sumz: Your Open-Source Article Summarizer.
        Sumz efficiently condenses lengthy articles into easily digestible,
        crystal-clear summaries.
      </h2>
    </header>
  );
};

export default Hero;
