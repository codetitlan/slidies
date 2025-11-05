import type { ReactNode } from "react";

export type ImpressStepData = {
  x?: number;
  y?: number;
  z?: number;
  scale?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  [key: string]: number | string | undefined;
};

export interface ImpressSlide {
  id: string;
  component: ReactNode | null;
  data: ImpressStepData;
  duration?: number;
}

export interface ImpressRootConfig {
  width: number;
  height: number;
  maxScale: number;
  minScale: number;
  perspective: number;
  transitionDuration: number;
}

