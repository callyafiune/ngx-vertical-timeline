
export interface TimelineItem {
  label?: string;
  icon?: string;
  command?: (event?: any) => void;
  url?: string;
  routerLink?: any;
  expanded?: boolean;
  disabled?: boolean;
  visible?: boolean;
  active?: boolean;
  style?: any;
  color?: string;
  content?: string;
  styleClass?: string;
  title?: string;
  id?: string;
}
