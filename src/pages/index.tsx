import type { NextPage } from "next";
import { css } from "@emotion/react";

import Header from "../components/base/Header";
import FoldableCard from "../components/base/FoldableCard";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <FoldableCard
        sectionTitle="WE-COOP"
        title="We-coop"
        text="Time Management System"
        mainSrc="/time01.jpg"
        // subSrc="/time02.jpg"
        githubUrl="https://github.com/We-Coop-Project"
        webUrl="https://we-coop.netlify.app/"
      />
      <FoldableCard
        sectionTitle="PAWLY"
        title="pawly"
        text="Puppy Health Management System"
        mainSrc="/puppy01.jpg"
        // subSrc="/puppy02.jpg"
        githubUrl="https://github.com/Smiyu-web/pawly-client"
        webUrl="https://pawly.vercel.app"
        backgroudStyle={css`
          background-color: #000000d0;
        `}
      />
      <FoldableCard
        sectionTitle="Airbnb"
        title="Airbnb"
        text="Airbnb clone System"
        mainSrc="/travel01.jpg"
        // subSrc="/travel02.jpg"
        githubUrl="https://github.com/hiro9108/airbnb-project"
        webUrl="https:/airbnb-project.vercel.app"
      />
      <FoldableCard
        sectionTitle="DPCODE"
        title="DPCode"
        text="Online Education System"
        mainSrc="/education01.jpg"
        // subSrc="/education02.jpg"
        githubUrl="https://github.com/DPCodeAcademy/dpcode-backend"
        webUrl="https://dpcode-frontend.vercel.app"
        backgroudStyle={css`
          background-color: #000000d0;
        `}
      />
    </div>
  );
};

export default Home;
