export default function ContainComponent({ children }) {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-12 lg:px-8 lg:py-24">
      {children}
    </div>
  );
}
