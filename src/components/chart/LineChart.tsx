import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import {
  DatasetComponent,
  DatasetComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
} from "echarts/components";
import { BarChart, BarSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
]);

type EChartsOption = echarts.ComposeOption<
  | DatasetComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | BarSeriesOption
>;
const option: EChartsOption = {
  legend: {},
  tooltip: {},
  dataset: {
    dimensions: ["product", "2024-01", "2024-02", "2024-03"],
    source: [
      {
        product: "LV1",
        "2024-01": 43.3,
        "2024-02": 85.8,
        "2024-03": 93.7,
      },
      {
        product: "LV2",
        "2024-01": 83.1,
        "2024-02": 73.4,
        "2024-03": 55.1,
      },
      {
        product: "LV3",
        "2024-01": 86.4,
        "2024-02": 65.2,
        "2024-03": 82.5,
      },
      {
        product: "LV4",
        "2024-01": 72.4,
        "2024-02": 53.9,
        "2024-03": 39.1,
      },
    ],
  },
  xAxis: { type: "category" },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
};

const ChartComponent = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  let chartInstance: echarts.ECharts | null = null;

  const renderChart = () => {
    if (chartRef.current !== null) {
      const renderInstance = echarts.getInstanceByDom(chartRef.current);
      if (renderInstance) {
        chartInstance = renderInstance;
      } else {
        chartInstance = echarts.init(chartRef.current);
      }
      chartInstance.setOption(option);
    }
  };

  useEffect(() => {
    renderChart();
    return () => {
      chartInstance?.dispose(); // Optional chaining으로 인스턴스가 있는 경우에만 dispose 호출
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={chartRef} style={{ width: "90%", height: "80%" }}></div>;
};

export default ChartComponent;
