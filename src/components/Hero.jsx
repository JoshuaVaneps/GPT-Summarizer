import { logo, summario } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={summario} alt="Summario_Logo" className="w-64 object-contain" />
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
        <span className="pink_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Streamline Your Studying with Summario: Your Open-Source Article Summarizer.
        Summario efficiently condenses lengthy articles into easily digestible,
        crystal-clear summaries.
      </h2>
    </header>
  );
};

export default Hero;
