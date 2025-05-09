import React from 'react';
import Slider from "../../components/slider/Slider";
import Services from "../../components/services/Services";
import BookSlider from "../../components/book-slider/BookSlider";
import { books } from "../../data/books";
import HeadingTitle from "../../components/heading-title/HeadingTitle";

const HomePage = () => {
  return (
    <div className="home">
      <Slider />
      <Services />
      <HeadingTitle title="Most gifted" />
      <BookSlider data={books} />
      <HeadingTitle title="Best Sellar" />
      <BookSlider data={books} />
      <HeadingTitle title="Most wished for" />
      <BookSlider data={books} />
    </div>
  );
};

export default HomePage;