import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const RED = "#E8831A";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 150,
            height: 150,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 95,
              height: 95,
              border: `15px solid ${RED}`,
              transform: "rotate(45deg)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 9999,
              background: RED,
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
