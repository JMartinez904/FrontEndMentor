import { useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { ArticlesAds } from "./components/ArticlesAds";
import { AsideArticles } from "./components/AsideArticles";
import { SideNav } from "./components/SideNav";

function App() {

  const [isNavOpen, setNavOpen] = useState(false);
  const closeNav = () => {
    setNavOpen(false);
  }
  const openNav = () => {
    setNavOpen(true);
  }

  return (
    <Container>
      <Header openNav = {openNav}></Header>
      <div className="px-[1rem] overflow-y-scroll sm:pl-[6.15rem] sm:pr-[5.15rem] sm:grid sm:grid-cols-layoutDesktop sm:gap-5">
        <MainArticle></MainArticle>
        <ArticlesAds></ArticlesAds>
        <AsideArticles></AsideArticles>
      </div>
      <SideNav isNavOpen={isNavOpen} closeNav={closeNav}></SideNav>
    </Container>
  );
}

export default App;
