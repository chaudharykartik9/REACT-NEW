import type { ReactNode } from "react";
interface ITopBarElement {
  title: string;
 icon: ReactNode;
}

const TopBarEleWithDropdown = ({ title, icon }: ITopBarElement) => {
  return (
    <div>
      <div>{icon}</div>
      <span>{title}</span>
    </div>
  );
};

export default TopBarEleWithDropdown;