import { Meta, StoryObj } from "@storybook/react";
import { CharacterDamage } from "@/bindings/MvpAnalysis";
import { TeamXYChart } from "./TeamXYChart";

const TestableTeamXYChart = TeamXYChart<
  "Bronya" | "Natasha" | "Silver Wolf" | "Quinque",
  CharacterDamage
>;

const meta = {
  title: "Components/Graphs/TeamXYChart",
  component: TeamXYChart,
} satisfies Meta<typeof TestableTeamXYChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData: Record<string, CharacterDamage[]> = {
  Bronya: [
    {
      turn: 0,
      team_distribution: {
        rate: 0.2108806,
      },
      self_distribution: {
        skill: [0.8542628, 92, 4470, 12125],
        ult: [0.1497643, 90, 30649, 55580],
        basic: [0.17151833, 48, 1382, 2967],
        followup: [0.15840149, 83, 5928, 13772],
      },
    },
    {
      turn: 1,
      team_distribution: {
        rate: 0.19965976,
      },
      self_distribution: {
        skill: [0.22300339, 61, 5171, 18786],
        ult: [0.56044793, 64, 35920, 40629],
        basic: [0.7067746, 45, 1933, 2071],
        followup: [0.0014898777, 19, 2325, 19912],
      },
    },
    {
      turn: 2,
      team_distribution: {
        rate: 0.18655026,
      },
      self_distribution: {
        skill: [0.14038098, 49, 7801, 19764],
        ult: [0.14761078, 41, 35566, 64687],
        basic: [0.46415722, 76, 1379, 2916],
        followup: [0.691427, 22, 3429, 15742],
      },
    },
  ],
  Natasha: [
    {
      turn: 0,
      team_distribution: {
        rate: 0.14775711,
      },
      self_distribution: {
        skill: [0.7213793, 24, 4371, 11798],
        ult: [0.9554422, 95, 32999, 63530],
        basic: [0.59084797, 54, 1138, 2950],
        followup: [0.7480645, 40, 5832, 11793],
      },
    },
    {
      turn: 1,
      team_distribution: {
        rate: 0.10029486,
      },
      self_distribution: {
        skill: [0.8301892, 36, 8420, 17559],
        ult: [0.034812212, 66, 33006, 48442],
        basic: [0.41217458, 27, 1410, 2341],
        followup: [0.5758172, 90, 6245, 11824],
      },
    },
    {
      turn: 2,
      team_distribution: {
        rate: 0.174117,
      },
      self_distribution: {
        skill: [0.53999007, 74, 3527, 19317],
        ult: [0.85837126, 11, 38976, 70940],
        basic: [0.74958444, 38, 1388, 2100],
        followup: [0.44153404, 74, 4208, 12567],
      },
    },
  ],
  Quinque: [
    {
      turn: 0,
      team_distribution: {
        rate: 0.59044254,
      },
      self_distribution: {
        skill: [0.317958, 72, 4012, 17144],
        ult: [0.11633003, 89, 34949, 64869],
        basic: [0.8570497, 34, 1154, 2321],
        followup: [0.5030744, 65, 9523, 11414],
      },
    },
    {
      turn: 1,
      team_distribution: {
        rate: 0.6681114,
      },
      self_distribution: {
        skill: [0.5867435, 86, 5523, 18504],
        ult: [0.05878246, 76, 37105, 70681],
        basic: [0.056937695, 40, 1175, 2836],
        followup: [0.8822596, 42, 1366, 16975],
      },
    },
    {
      turn: 2,
      team_distribution: {
        rate: 0.5905615,
      },
      self_distribution: {
        skill: [0.9129851, 26, 1452, 18882],
        ult: [0.38455296, 85, 35138, 43092],
        basic: [0.43285644, 55, 1459, 2404],
        followup: [0.13613892, 98, 4569, 14049],
      },
    },
  ],
  "Silver Wolf": [
    {
      turn: 0,
      team_distribution: {
        rate: 0.05091977,
      },
      self_distribution: {
        skill: [0.19392991, 78, 6016, 18346],
        ult: [0.13299072, 23, 37302, 65392],
        basic: [0.93718255, 56, 1566, 2089],
        followup: [0.6652782, 24, 9466, 16779],
      },
    },
    {
      turn: 1,
      team_distribution: {
        rate: 0.031934053,
      },
      self_distribution: {
        skill: [0.2016114, 83, 2595, 12380],
        ult: [0.39565265, 77, 33483, 46314],
        basic: [0.5116805, 50, 1645, 2561],
        followup: [0.66193986, 19, 6022, 18095],
      },
    },
    {
      turn: 2,
      team_distribution: {
        rate: 0.048771232,
      },
      self_distribution: {
        skill: [0.14506412, 61, 3915, 14800],
        ult: [0.42036343, 23, 35434, 66317],
        basic: [0.88516605, 14, 1498, 2698],
        followup: [0.6229967, 5, 4801, 17341],
      },
    },
  ],
};
const keys = ["Quinque", "Silver Wolf", "Natasha", "Bronya"];

export const Default = {
  args: {
    data: mockData,
    keys,
    xAccessor: ((d: CharacterDamage) => d.turn) as (d: object) => any,
    yAccessor: ((d: CharacterDamage) => d.team_distribution.rate) as (d: object) => any,
    renderTooltip: ({ tooltipData, colorScale }) => (
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
                      tooltipData.nearestDatum?.key === dist.key ? "underline" : undefined,
                  }}
                >
                  {keys[index]}
                </div>
              ))}
          </div>
        )}
      </>
    ),
  },
} satisfies Story;
