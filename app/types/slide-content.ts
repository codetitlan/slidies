/**
 * Type definitions for dynamic slide content
 */

export interface SlideContent {
  slideNumber: number;
  title: string;
  subtitle?: string;
  description?: string;
  bulletPoints?: string[];
  metadata?: {
    theme?: "purple" | "blue" | "green" | "red" | "orange";
    emphasis?: "default" | "high" | "minimal";
  };
}

export interface PresentationData {
  title: string;
  author?: string;
  date?: string;
  slides: SlideContent[];
}

/**
 * Default theme colors
 */
export const THEME_COLORS = {
  purple: {
    from: "from-slate-900",
    via: "via-purple-900",
    to: "to-slate-900",
    accent: "bg-purple-600/30",
    border: "border-purple-400",
    text: "text-purple-200",
    indicator: "bg-purple-400",
  },
  blue: {
    from: "from-slate-900",
    via: "via-blue-900",
    to: "to-slate-900",
    accent: "bg-blue-600/30",
    border: "border-blue-400",
    text: "text-blue-200",
    indicator: "bg-blue-400",
  },
  green: {
    from: "from-slate-900",
    via: "via-green-900",
    to: "to-slate-900",
    accent: "bg-green-600/30",
    border: "border-green-400",
    text: "text-green-200",
    indicator: "bg-green-400",
  },
  red: {
    from: "from-slate-900",
    via: "via-red-900",
    to: "to-slate-900",
    accent: "bg-red-600/30",
    border: "border-red-400",
    text: "text-red-200",
    indicator: "bg-red-400",
  },
  orange: {
    from: "from-slate-900",
    via: "via-orange-900",
    to: "to-slate-900",
    accent: "bg-orange-600/30",
    border: "border-orange-400",
    text: "text-orange-200",
    indicator: "bg-orange-400",
  },
} as const;
