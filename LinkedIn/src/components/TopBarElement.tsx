import type { ReactNode } from "react";

interface ITopBarElement {
  title: string;
  icon: ReactNode;
  selected: boolean;
}

const TopBarElement = ({ title, icon, selected }: ITopBarElement) => {
  return (
    <div
      style={{
        borderBottom: selected ? "2px solid black" : "none",
      }}
    >
      <div style={{ width: "20px" }}>{icon}</div>
      <span>{title}</span>
    </div>
  );
};

export default TopBarElement;