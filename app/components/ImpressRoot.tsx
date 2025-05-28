"use client";

import React, { useEffect, useState } from "react";

// Import slide components
import SlideOne from "./slides/slide-one";
import SlideTwo from "./slides/slide-two";
import SlideThree from "./slides/slide-three";
import SlideFour from "./slides/slide-four";
import SlideFive from "./slides/slide-five";
import SlideSix from "./slides/slide-six";
import SlideSeven from "./slides/slide-seven";
import SlideEight from "./slides/slide-eight";
import SlideNine from "./slides/slide-nine";

// We'll import the actual components only on the client side
import dynamic from "next/dynamic";

// Define the type for our slide data
interface SlideProps {
  id: string;
  component: React.ReactNode | null;
  data: any;
  duration?: number;
}

// Use a more specific type for the dynamically imported component
const ClientOnlyImpress = dynamic<{ slides: SlideProps[]; rootData?: any }>(
  () => import("@/app/components/ImpressClient"),
  { ssr: false }
);

const getSlideData = (slideId: string) => {
  switch (slideId) {
    case "slide-one":
      // Starting point - centered origin
      return { x: 0, y: 0, z: 0, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0 };
    case "slide-two":
      // Far to the right, tilted back
      return {
        x: 2500,
        y: -500,
        z: -800,
        scale: 0.8,
        rotateX: 20,
        rotateY: -15,
        rotateZ: 5,
      };
    case "slide-three":
      // High up and to the left, looking down
      return {
        x: -2000,
        y: -1500,
        z: 1200,
        scale: 1.2,
        rotateX: 45,
        rotateY: 10,
        rotateZ: -10,
      };
    case "slide-four":
      // Deep in space, behind and right
      return {
        x: 1800,
        y: 600,
        z: -3000,
        scale: 1.4,
        rotateX: -20,
        rotateY: 60,
        rotateZ: 0,
      };
    case "slide-five":
      // "Dark side" slide - dramatic position beneath
      return {
        x: -500,
        y: 2200,
        z: -1500,
        scale: 1.3,
        rotateX: -60,
        rotateY: -30,
        rotateZ: 15,
      };
    case "slide-six":
      // Far left and upside down
      return {
        x: -3000,
        y: 800,
        z: -600,
        scale: 0.9,
        rotateX: 5,
        rotateY: -20,
        rotateZ: 180,
      };
    case "slide-seven":
      // Above and far ahead
      return {
        x: 1000,
        y: -2500,
        z: 2500,
        scale: 1.1,
        rotateX: 35,
        rotateY: -45,
        rotateZ: -5,
      };
    case "slide-eight":
      // Extremely far right, tilted dramatically
      return {
        x: 4000,
        y: 500,
        z: 200,
        scale: 1,
        rotateX: 10,
        rotateY: 75,
        rotateZ: -25,
      };
    case "slide-nine":
      // Personal slide - coming back to a more intimate view
      return {
        x: -1800,
        y: 300,
        z: 1500,
        scale: 1.2,
        rotateX: -5,
        rotateY: -20,
        rotateZ: 0,
      };
    case "overview":
      // Extremely far back overview with panoramic view
      return {
        x: 300,
        y: -1000,
        z: 6000,
        scale: 5,
        rotateX: 15,
        rotateY: -45,
        rotateZ: 0,
      };
  }
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
  const rootData = {
    width: 1024, // Target width of the presentation
    height: 768, // Target height of the presentation
    maxScale: 1, // Maximum scale (1 means don't increase on larger screens)
    minScale: 0.2, // Minimum scale allowed when fitting to screen
    perspective: 1000, // 3D perspective
    transitionDuration: 1000, // Transition duration in ms
  };

  const slides: SlideProps[] = [
    {
      id: "slide-one",
      component: <SlideOne />,
      data: getSlideData("slide-one"),
      duration: undefined,
    },
    {
      id: "slide-two",
      component: <SlideTwo />,
      data: getSlideData("slide-two"),
      duration: 1500,
    },
    {
      id: "slide-three",
      component: <SlideThree />,
      data: getSlideData("slide-three"),
      duration: 1500,
    },
    {
      id: "slide-four",
      component: <SlideFour />,
      data: getSlideData("slide-four"),
      duration: 1500,
    },
    {
      id: "slide-five",
      component: <SlideFive />,
      data: getSlideData("slide-five"),
      duration: 1500,
    },
    {
      id: "slide-six",
      component: <SlideSix />,
      data: getSlideData("slide-six"),
      duration: 1500,
    },
    {
      id: "slide-seven",
      component: <SlideSeven />,
      data: getSlideData("slide-seven"),
      duration: 1500,
    },
    {
      id: "slide-eight",
      component: <SlideEight />,
      data: getSlideData("slide-eight"),
      duration: 1500,
    },
    {
      id: "slide-nine",
      component: <SlideNine />,
      data: getSlideData("slide-nine"),
      duration: 1500,
    },
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
