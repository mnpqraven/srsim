import { curveCardinal } from "@visx/curve";
import { ParentSize } from "@visx/responsive";
import { XYChart, Axis, Grid, Tooltip, AreaStack, AreaSeries, darkTheme } from "@visx/xychart";
import { RenderTooltipParams } from "@visx/xychart/lib/components/Tooltip";
import { ReactNode } from "react";

interface Props<TKeys extends string | number, TData extends object> {
  data: Record<string, TData[]>;
  keys: TKeys[];
  xAccessor: (d: TData) => any;
  yAccessor: (d: TData) => any;
  renderTooltip: (params: RenderTooltipParams<TData>) => ReactNode;
}

const TeamXYChart = <TKeys extends string | number, TData extends object>({
  data,
  keys,
  xAccessor,
  yAccessor,
  renderTooltip,
}: Props<TKeys, TData>) => (
  <div className="relative">
    <ParentSize>
      {parent => (
        <XYChart
          theme={darkTheme}
          xScale={{ type: "band" }}
          yScale={{ type: "linear" }}
          width={parent.width}
          height={400}
          resizeObserverPolyfill={ResizeObserver}
          margin={{ left: 0, right: 0, top: 16, bottom: 16 }}
        >
          <Axis orientation={"bottom"} />
          <Grid columns={false} numTicks={4} />
          <AreaStack offset="expand" curve={curveCardinal}>
            {keys.map((key, index) => (
              <AreaSeries
                key={index}
                dataKey={`${key}`}
                data={data[key as keyof typeof data]}
                xAccessor={xAccessor}
                yAccessor={yAccessor}
                fillOpacity={0.4}
              />
            ))}
          </AreaStack>
          <Tooltip<TData> showVerticalCrosshair showSeriesGlyphs renderTooltip={renderTooltip} />
        </XYChart>
      )}
    </ParentSize>
  </div>
);
export { TeamXYChart };
