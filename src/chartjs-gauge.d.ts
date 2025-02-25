import 'chart.js';

declare module 'chart.js' {
  interface ChartTypeRegistry {
    gauge: {
      // Define gauge dataset types
      type: 'gauge';
      data: {
        datasets: {
          data: number[];
          backgroundColor: string[];
          needleColor?: string; // Optional property for needle color
        }[];
      };
      // You can also add additional properties if needed
    };
  }
}