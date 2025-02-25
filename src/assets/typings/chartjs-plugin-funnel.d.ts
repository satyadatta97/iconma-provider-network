import { PluginOptionsByType } from 'chart.js';

declare module 'chart.js' {
  interface PluginOptionsByType<TType extends string> {
    funnel?: {
      topWidth?: string | number;
      bottomWidth?: string | number;
      height?: number;
      width?: number;
    };
  }
}