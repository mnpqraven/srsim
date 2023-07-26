import { curveCardinal } from "@visx/curve";
import { ParentSize } from "@visx/responsive";
import { XYChart, Axis, Grid, Tooltip, AreaStack, AreaSeries, lightTheme } from "@visx/xychart";
import { CharacterDamage, MvpAnalysis } from "@/bindings/MvpAnalysis";
import { asPercentage } from "@/utils/helpers";

interface Props {
  data: MvpAnalysis;
}
interface GraphData {
  index: number;
  data: CharacterDamage;
}
const TeamXY = ({ data }: Props) => {
  const qingque: GraphData[] = data.data.map((e, index) => ({ index, data: e[0] }));
  const sw = data.data.map((e, index) => ({ index, data: e[1] }));
  const nat = data.data.map((e, index) => ({ index, data: e[2] }));
  const bronya = data.data.map((e, index) => ({ index, data: e[3] }));

  const xAccessor = ({ index }: GraphData) => index;
  const yAccessor = ({ data }: GraphData) => data.team_distribution.rate;

  return (
    <div className="relative">
      <ParentSize>
        {parent => (
          <XYChart
            theme={lightTheme}
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
              {[qingque, sw, nat, bronya].map((data, index) => (
                <AreaSeries
                  key={index}
                  dataKey={`Line-${index}`}
                  data={data}
                  xAccessor={xAccessor}
                  yAccessor={yAccessor}
                  fillOpacity={0.4}
                />
              ))}
            </AreaStack>
            <Tooltip<GraphData>
              showVerticalCrosshair
              showSeriesGlyphs
              renderTooltip={({ tooltipData, colorScale }) => (
                <>
                  <p>Turn {tooltipData?.nearestDatum?.index}</p>
                  {tooltipData?.nearestDatum?.datum && (
                    <div className="flex flex-col gap-1">
                      {Object.values(tooltipData.datumByKey)
                        .reverse()
                        .map((dist, index) => (
                          <div
                            key={index}
                            style={{
                              color: colorScale?.(dist.key),
                              textDecoration:
                                tooltipData.nearestDatum?.key === dist.key
                                  ? "underline"
                                  : undefined,
                            }}
                          >
                            {dist.datum.data.name}{" "}
                            {asPercentage(dist.datum.data.team_distribution.rate)}
                          </div>
                        ))}
                    </div>
                  )}
                </>
              )}
            />
          </XYChart>
        )}
      </ParentSize>
    </div>
  );
};
export { TeamXY };
