import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// create our api
export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    // tells what api were gonna call
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      // encode uri component is built into js and stops errors from special characters in urls
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=5`,
    }),
  }),
});

// allows us to fire the hook on demand using lazy
export const { useLazyGetSummaryQuery } = articleApi;
