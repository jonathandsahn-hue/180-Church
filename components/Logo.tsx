import Image from "next/image";

// bg="light" → blue logo on transparent (sits cleanly on white/light surfaces)
// bg="dark"  → white logo via CSS filter (transparent background, white shape)

export default function Logo({
  size = 40,
  bg = "light",
}: {
  size?: number;
  bg?: "light" | "dark";
}) {
  return (
    <Image
      src="/logo-transparent.png"
      alt="180 Church"
      width={size}
      height={size}
      className="object-contain"
      style={bg === "dark" ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  );
}
