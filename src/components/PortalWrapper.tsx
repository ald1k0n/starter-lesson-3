import { createPortal } from "react-dom";

const portal = document.getElementById("portal");

export const PortalWrapper = ({ children }) => {
  return createPortal(
    <div
      style={{
        display: "fixed",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          padding: 8,
          backgroundColor: "white",
          borderRadius: 4,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </div>
    </div>,
    portal as HTMLDivElement
  );
};
