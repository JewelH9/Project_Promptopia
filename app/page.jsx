import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an innovative open-source AI prompting platform designed
        for the modern era, empowering users to explore, craft, and share
        inspiring and imaginative prompts effortlessly.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
