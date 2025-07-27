import { ChartsResponses } from "@app/types/dashboard";
import { SpecialType } from "../slice";
import { dehumanizeKey } from "@shared/lib/utils/stringMutation";

// Type guard for valid chart item
export const isValidItem = (item: any): item is { name: string; values: any } =>
  item && typeof item.name === "string" && "values" in item;

// Infer transformer function based on value shape (y vs. data)
export const getTransformer = (items: any[]): ((item: any) => any) => {
  const sample = items.find(isValidItem);
  if (!sample) return () => null;

  // If values is a number or array of numbers, decide based on chart type
  const isPieLike = typeof sample.values === "number";
  return isPieLike
    ? (item) => ({ name: item.name, y: item.values })
    : (item) => ({ name: item.name, data: item.values });
};

export const prepareChartsData = (data: ChartsResponses): SpecialType => {
  const { charts } = data.mainDashboard;
  const result: Partial<SpecialType> = {};

  for (const key in charts) {
    const chartItems = charts[key as keyof typeof charts];

    if (!Array.isArray(chartItems) || !chartItems.length) continue;

    const transformer = getTransformer(chartItems);
    const transformed = chartItems
      .filter(isValidItem)
      .map(transformer)
      .filter(Boolean);

    if (transformed.length) {
      result[key as keyof SpecialType] = {
        type: chartItems[0].chartType,
        value: transformed,
      };
    }
  }

  return result as SpecialType;
};



export const prepareChartData = (title: string , data: ChartsResponses) => {
  const { charts } = data.mainDashboard;
  const keyInObject = dehumanizeKey(title)
        
  const aaa = charts[keyInObject as keyof typeof charts]
  const transform = getTransformer(aaa)
  const transformed = aaa
        .filter(isValidItem)
        .map(transform)
        .filter(Boolean);

  return {keyInObject, transformed}
};

