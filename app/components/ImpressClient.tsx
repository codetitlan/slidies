"use client";
import React from "react";
import { Impress, Step } from "react-impressjs";
import "react-impressjs/styles/react-impressjs.css";

interface SlideProps {
  id: string;
  component: React.ReactNode | null;
  data: any;
  duration?: number;
}

interface ImpressClientProps {
  slides: SlideProps[];
  rootData?: {
    width: number;
    height: number;
    maxScale: number;
    minScale: number;
    perspective: number;
    transitionDuration: number;
  };
}

const ImpressClient: React.FC<ImpressClientProps> = ({ slides, rootData }) => {
  return (
    <Impress
      rootData={rootData}
      progress={true}
      fallbackMessage={
        <p>
          Sorry, your <b>device or browser</b> couldn't support well.
        </p>
      }
    >
      {slides.map((slide) => (
        <Step
          key={slide.id}
          id={slide.id}
          data={slide.data}
          duration={slide.duration}
          className="step"
        >
          {slide.component}
        </Step>
      ))}
    </Impress>
  );
};

export default ImpressClient;
