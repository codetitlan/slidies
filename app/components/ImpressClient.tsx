"use client";
import React from "react";
import { Impress, Step } from "react-impressjs";
import "react-impressjs/styles/react-impressjs.css";

import type { ImpressRootConfig, ImpressSlide } from "./impress-types";

interface ImpressClientProps {
  slides: ImpressSlide[];
  rootData?: ImpressRootConfig;
}

const ImpressClient: React.FC<ImpressClientProps> = ({ slides, rootData }) => {
  return (
    <Impress
      rootData={rootData}
      progress={true}
      fallbackMessage={
        <p>
          Sorry, your <b>device or browser</b> couldn&apos;t support well.
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
