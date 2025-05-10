// app/loesungen/layout.tsx
export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-4 text-4xl font-bold">Unsere Lösungen</h1>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
