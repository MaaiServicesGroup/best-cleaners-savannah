export const metadata = {
  title: "Sanity Studio | Best Cleaners & Laundry",
  description: "Content management studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
