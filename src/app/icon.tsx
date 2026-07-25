import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const BLACK = "#060A07";
const RED = "#E8831A";

export default function Icon() {
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
            width: 22,
            height: 22,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 16,
              height: 16,
              border: `3px solid ${RED}`,
              transform: "rotate(45deg)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 5,
              height: 5,
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
