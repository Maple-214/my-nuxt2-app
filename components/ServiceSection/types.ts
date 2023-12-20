export interface Item {
  id: number;
  title: string;
  desc: string;
  tips: string[];
  img: string;
  position: string;
  hiddenIcon: boolean;
  hiddenBtn: boolean;
  recruit?: boolean;
  emailLink?: string;
  path: string;
  recruit_tex?: string;
}
export default {};
