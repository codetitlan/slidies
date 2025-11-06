import React from "react";
import type { SlideContent } from "@/app/types/slide-content";
import { THEME_COLORS } from "@/app/types/slide-content";

interface GenericSlideProps {
  slideNumber: number;
  content?: SlideContent;
  totalSlides?: number;
}

const GenericSlide: React.FC<GenericSlideProps> = ({
  slideNumber,
  content,
  totalSlides = 5,
}) => {
  // Use content if provided, otherwise show placeholder
  const title = content?.title || `Slide ${slideNumber}`;
  const subtitle = content?.subtitle;
  const description =
    content?.description ||
    "This is a generic slide template. Replace this component with your custom content when ready.";
  const bulletPoints = content?.bulletPoints || [];
  const theme = content?.metadata?.theme || "purple";
  const colors = THEME_COLORS[theme];

  return (
    <div
      className={`flex flex-col items-center justify-center w-full px-4 py-2 bg-gradient-to-br ${colors.from} ${colors.via} ${colors.to} overflow-hidden`}
      style={{ height: '750px', maxHeight: '750px' }}
    >
      {/*
        Content scaling: Using scale(1) and controlling sizes via font classes
        - Removed transform scaling, using proper typography sizes instead
        - transformOrigin: 'center' keeps content centered
        See docs/scaling-architecture.md for details
      */}
      <div className="text-center space-y-2 w-full flex flex-col items-center" style={{ transform: 'scale(1)', transformOrigin: 'center' }}>
        {/* Slide Number Badge */}
        <div
          className={`inline-block px-2 py-0.5 ${colors.accent} border ${colors.border} rounded-full backdrop-blur-sm`}
        >
          <span className={`${colors.text} text-lg font-semibold tracking-wide`}>
            SLIDE {slideNumber}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight w-full">
          {title}
        </h1>

        {/* Subtitle (if provided) */}
        {subtitle && (
          <h2 className={`text-3xl md:text-4xl ${colors.text}/80 font-light w-full leading-tight`}>
            {subtitle}
          </h2>
        )}

        {/* Description */}
        <div>
          <p className={`text-2xl md:text-3xl ${colors.text}/80 font-light w-full leading-relaxed`}>
            {description}
          </p>
        </div>

        {/* Bullet Points (if provided) */}
        {bulletPoints.length > 0 && (
          <ul className="text-left w-full grid grid-cols-2 gap-x-6 gap-y-2">
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                className="text-xl text-slate-300 flex items-start gap-3 leading-relaxed"
              >
                <span className={`${colors.indicator} h-2 w-2 rounded-full mt-2 flex-shrink-0`} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Slide Progress Indicator */}
        <div className="flex justify-center gap-1.5 mt-1">
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index + 1 === slideNumber
                  ? `${colors.indicator} w-8`
                  : "bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenericSlide;
