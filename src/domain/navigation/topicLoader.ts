import type { Subpage } from "@/types/navigation";

export type TopicKey = "languages" | "frameworks" | "tools" | "resources";

export const topicButtons: Array<{ key: TopicKey; name: string }> = [
  { key: "languages", name: "Languages" },
  { key: "frameworks", name: "Frameworks" },
  { key: "tools", name: "Tools" },
  { key: "resources", name: "Resources" },
];

const topicImporters: Record<TopicKey, () => Promise<{ default: Subpage }>> = {
  languages: () => import("@/navigation/combined/topics/languages"),
  frameworks: () => import("@/navigation/combined/topics/frameworks"),
  tools: () => import("@/navigation/combined/topics/tools"),
  resources: () => import("@/navigation/combined/topics/resources"),
};

export async function loadTopic(key: TopicKey): Promise<Subpage> {
  return (await topicImporters[key]()).default;
}