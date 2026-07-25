import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const BLACK = "#060A07";
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
          background: BLACK,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 110,
            height: 110,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 80,
              height: 80,
              border: `13px solid ${RED}`,
              transform: "rotate(45deg)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 26,
              height: 26,
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
