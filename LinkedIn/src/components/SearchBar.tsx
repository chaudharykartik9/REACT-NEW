import type { ReactNode } from "react";

interface ITopBarElement {
  placeholder: string;
  icon: ReactNode;
}

const SearchBar = ({ placeholder, icon }: ITopBarElement) => {
  return (
    <div
      style={{
        position: "relative",
        width: "300px",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#666",
        }}
      >
        {icon}
      </div>

      <input
        type="text"
        placeholder={placeholder}
        style={{
          width: "100%",
          height: "40px",
          paddingLeft: "40px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          outline: "none",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

export default SearchBar;