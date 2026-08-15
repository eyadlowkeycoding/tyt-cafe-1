import {
  Coffee,
  Sparkles,
  Star,
  Heart,
  CupSoda,
  GlassWater,
  Award,
  Citrus,
  Milk,
  Snowflake,
  Croissant,
  Plus,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Sparkles,
  Star,
  Heart,
  CupSoda,
  GlassWater,
  Award,
  Citrus,
  Milk,
  Snowflake,
  Croissant,
  Plus,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Coffee;
}
