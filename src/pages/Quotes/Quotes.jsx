import React from "react";
import { useSelector } from "react-redux";
import { EmptyQuote } from "../../components/quotes/EmptyQuote";
import { QuoteItem } from "../../components/quotes/QuoteItem";
import { QuoteSkeleton } from "../../components/quotes/QuoteSkeleton";
import { Layout } from "../../layout";

export const Quotes = () => {
  const { quotes, loadingQuotes } = useSelector((state) => state.products);

  return (
    <>
      <Layout>
        <div className="flex flex-col bg-quotes p-16">
          {loadingQuotes ? (
            <QuoteSkeleton />
          ) : (
            <div>
              {quotes.length > 0 ? (
                <div>
                  <h1 className="font-henue-me text-xl text-gray-700">
                    Mis Cotizaciones
                  </h1>
                  {quotes.map((quote, index) => (
                    <QuoteItem key={index} quote={quote} />
                  ))}
                </div>
              ) : (
                <EmptyQuote />
              )}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};
