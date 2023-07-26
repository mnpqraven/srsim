import { useMutation } from "@tanstack/react-query";
import { ComponentProps } from "react";
import { CharacterDamage } from "@/bindings/MvpAnalysis";
import { OuterLabelPie, TeamXYChart } from "@/components/Graphs";
import { Button } from "@/components/Primitives/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Primitives/Tabs";
import API from "@/utils/constants";
import { asPercentage } from "@/utils/helpers";

interface Props {
  name: string;
}
const MvpTab = ({ name }: Props) => {
  console.log(name);
  const { data, mutate } = useMutation({
    mutationKey: ["mockMvp"],
    mutationFn: async () => await API.mockMvp.get(),
  });

  interface TestData {
    index: number;
    value: number;
    label: string;
  }
  const colors: string[] = [
    "#147EB3",
    "#29A634",
    "#D1980B",
    "#D33D17",
    "#9D3F9D",
    "#00A396",
    "#DB2C6F",
    "#8EB125",
    "#946638",
    "#7961DB",
  ];
  const pieMockData: ComponentProps<typeof OuterLabelPie<TestData>> = {
    data: [
      { label: "basic", index: 0, value: 0.03 },
      { label: "ult", index: 1, value: 0.2 },
      { label: "skill", index: 2, value: 0.69 },
      { label: "followup", index: 3, value: 0.08 },
    ],
    pieValue: d => d.value,
    width: 500,
    height: 500,
    color: d => colors[d.index],
    labelText: d => d.label,
    labelValue: d => d.value.toLocaleString("en", { style: "percent" }),
  };
  const characterKeys = ["Quinque", "Silver Wolf", "Natasha", "Bronya"];

  return (
    <>
      <Button onClick={() => mutate()}>Generate</Button>
      <div className="flex gap-2">
        <div id="left-container" className="flex max-w-[45vw] grow flex-col  gap-2">
          <div id="portrait" className="bg-background h-64 rounded-md p-4">
            portrait
          </div>
          <div id="summary-distribution" className="bg-background grow rounded-md p-4">
            {data && (
              <>
                <Tabs defaultValue="self">
                  <TabsList>
                    <TabsTrigger value="self">Self dist.</TabsTrigger>
                    <TabsTrigger value="occurence">Self dist. (count)</TabsTrigger>
                    <TabsTrigger value="team">team distribution</TabsTrigger>
                  </TabsList>
                  <TabsContent value="self">
                    <OuterLabelPie {...pieMockData} />
                  </TabsContent>
                  <TabsContent value="occurence">
                    <img
                      src="https://media.discordapp.net/attachments/1114188946721742898/1121109046964007003/image.png"
                      alt="example"
                    />
                  </TabsContent>
                  <TabsContent value="team">
                    gcsim{"'"}s {"cumulative contribution"} option
                    <br />
                    <a href="https://simimpact.app/sh/b2673849-b8ef-47ae-a4c0-90ec9582dce1#">
                      damage timeline(click)
                    </a>
                    <TeamXYChart
                      data={data.data}
                      keys={characterKeys}
                      xAccessor={(d: CharacterDamage) => d.turn}
                      yAccessor={(d: CharacterDamage) => d.team_distribution.rate}
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
                                    {characterKeys[index]}:{" "}
                                    {asPercentage(dist.datum.team_distribution.rate)}
                                  </div>
                                ))}
                            </div>
                          )}
                        </>
                      )}
                    />
                  </TabsContent>
                </Tabs>
              </>
            )}
          </div>
        </div>
        <div id="right-data-propagation" className="bg-background grow rounded-md p-4">
          right: data propagation
        </div>
      </div>
    </>
  );
};
export { MvpTab };
