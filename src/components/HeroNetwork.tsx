import { useMemo, type CSSProperties } from "react";

interface NetworkNode {
  id: number;
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  dur: number;
  delay: number;
  color: string;
}

interface NetworkEdge {
  key: string;
  a: NetworkNode;
  b: NetworkNode;
}

const WIDTH = 1000;
const HEIGHT = 560;
const NODE_COUNT = 30;
const TEAL = "#0df3f2";
const BLUE = "#4d7dff";

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function buildNetwork(): { nodes: NetworkNode[]; edges: NetworkEdge[] } {
  const rand = seededRandom(1337);
  const nodes: NetworkNode[] = Array.from({ length: NODE_COUNT }, (_, id) => ({
    id,
    x: rand() * WIDTH,
    y: rand() * HEIGHT,
    r: 2 + rand() * 3,
    dx: (rand() - 0.5) * 36,
    dy: (rand() - 0.5) * 36,
    dur: 7 + rand() * 9,
    delay: rand() * -12,
    color: rand() > 0.4 ? TEAL : BLUE,
  }));

  const edges: NetworkEdge[] = [];
  const seen = new Set<string>();
  nodes.forEach((node) => {
    const nearest = nodes
      .filter((n) => n.id !== node.id)
      .map((n) => ({ n, d: Math.hypot(n.x - node.x, n.y - node.y) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);
    nearest.forEach(({ n }) => {
      const key = [node.id, n.id].sort((a, b) => a - b).join("-");
      if (!seen.has(key)) {
        seen.add(key);
        edges.push({ key, a: node, b: n });
      }
    });
  });

  return { nodes, edges };
}

export function HeroNetwork() {
  const { nodes, edges } = useMemo(buildNetwork, []);

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g className="hero-network-fade">
        {edges.map((edge) => (
          <line
            key={edge.key}
            x1={edge.a.x}
            y1={edge.a.y}
            x2={edge.b.x}
            y2={edge.b.y}
            className="hero-edge"
            stroke={edge.a.color}
          />
        ))}
        {nodes.map((node) => {
          const style = {
            "--dx": `${node.dx}px`,
            "--dy": `${node.dy}px`,
            "--dur": `${node.dur}s`,
            "--delay": `${node.delay}s`,
            color: node.color,
          } as CSSProperties;
          return (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.color}
              className="hero-node"
              style={style}
            />
          );
        })}
      </g>
    </svg>
  );
}
