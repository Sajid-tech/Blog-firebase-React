import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Country from "../../components/country/Country";
import About from "../../components/about/About";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <About />
      <BlogPostCard />
      <Country />
    </Layout>
  );
};

export default Home;
