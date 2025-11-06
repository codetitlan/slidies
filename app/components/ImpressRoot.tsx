"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import type {
  ImpressRootConfig,
  ImpressSlide,
  ImpressStepData,
} from "./impress-types";

// Import generic slide component and types
import GenericSlide from "./slides/generic-slide";
import type { PresentationData } from "@/app/types/slide-content";

// Import slide content data
import slidesData from "@/data/slides-content.json";

// Use a more specific type for the dynamically imported component
const ClientOnlyImpress = dynamic<{
  slides: ImpressSlide[];
  rootData?: ImpressRootConfig;
}>(
  () => import("@/app/components/ImpressClient"),
  { ssr: false }
);

const getSlideData = (slideId: string): ImpressStepData => {
  // Impress.js scale: 0.5 controls 3D positioning (camera zoom level)
  // This works together with CSS transform: scale(0.5) in generic-slide.tsx
  // See docs/scaling-architecture.md for dual scaling explanation
  switch (slideId) {
    case "slide-1":
      // Starting point - centered origin
      return { x: 0, y: 0, z: 0, scale: 0.5, rotateX: 0, rotateY: 0, rotateZ: 0 };
    case "slide-2":
      // Far to the right, tilted back
      return {
        x: 2000,
        y: -500,
        z: -800,
        scale: 0.5,
        rotateX: 20,
        rotateY: -15,
        rotateZ: 0,
      };
    case "slide-3":
      // High up and to the left, looking down
      return {
        x: -1500,
        y: 800,
        z: 1000,
        scale: 0.5,
        rotateX: -10,
        rotateY: 30,
        rotateZ: 10,
      };
    case "slide-4":
      // Deep in space, behind and right
      return {
        x: 1200,
        y: 1500,
        z: -1200,
        scale: 0.5,
        rotateX: 45,
        rotateY: -20,
        rotateZ: -5,
      };
    case "slide-5":
      // Far left and elevated
      return {
        x: -2200,
        y: -800,
        z: 500,
        scale: 0.5,
        rotateX: -15,
        rotateY: 10,
        rotateZ: 15,
      };
    case "overview":
      // Far back overview with panoramic view
      return {
        x: 0,
        y: 0,
        z: 4000,
        scale: 3,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
      };
  }

  return {};
};

const ImpressRoot = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Only render on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading presentation...</div>;
  }

  // Configure the root data for proper scaling
  const rootData: ImpressRootConfig = {
    width: 1170, // Target width of the presentation (900px + 30% = 1170px)
    height: 750, // Target height of the presentation (taller to fit all content)
    maxScale: 1, // Maximum scale (no zoom out, fit to viewport)
    minScale: 0.2, // Minimum scale allowed when fitting to screen
    perspective: 1000, // 3D perspective
    transitionDuration: 1000, // Transition duration in ms
  };

  // Type-safe presentation data
  const presentationData = slidesData as PresentationData;
  const totalSlides = presentationData.slides.length;

  // Generate slides from data
  const slides: ImpressSlide[] = [
    ...presentationData.slides.map((slideContent, index) => ({
      id: `slide-${slideContent.slideNumber}`,
      component: (
        <GenericSlide
          slideNumber={slideContent.slideNumber}
          content={slideContent}
          totalSlides={totalSlides}
        />
      ),
      data: getSlideData(`slide-${slideContent.slideNumber}`),
      duration: index === 0 ? undefined : 1500,
    })),
    {
      id: "overview",
      component: null,
      data: getSlideData("overview"),
      duration: 2000,
    },
  ];

  return <ClientOnlyImpress slides={slides} rootData={rootData} />;
};

export default ImpressRoot;
