export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon?: string;
  items?: string[];
}

export interface AccordionGroup {
  id: string;
  items: AccordionItem[];
  multiple?: boolean;
} 