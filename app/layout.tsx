import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Flor – Chicano Arte Illustration",
  description:
    "Hyper-detailed Chicano arte illustration featuring La Flor with metallic gold ornaments and Día de los Muertos motifs."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
