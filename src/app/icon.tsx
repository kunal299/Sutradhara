import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 23,
            height: 23,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 17,
              height: 17,
              border: `3px solid ${RED}`,
              transform: "rotate(45deg)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 6,
              height: 6,
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
