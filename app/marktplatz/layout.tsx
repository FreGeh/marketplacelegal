// app/loesungen/layout.tsx
export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto p-6">
      {children}
    </div>
  );
}
