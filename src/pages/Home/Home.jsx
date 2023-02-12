import React from "react";
import { Buy } from "../../components/buy/Buy";
import { ProductCard } from "../../components/card/ProductCard";
import { MainCarousel } from "../../components/carousel/MainCarousel";
import { Layout } from "../../layout";

export const Home = () => {
  return (
    <div>
      <Layout>
        <div className="flex flex-col">
          <section id="banners">
            <MainCarousel />
          </section>
          <section id="products">
            <Buy />
          </section>
        </div>
      </Layout>
    </div>
  );
};
