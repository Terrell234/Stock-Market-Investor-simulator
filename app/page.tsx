export default function Home() {
  return (
    <main className="simulator-shell">
      <iframe
        className="simulator-frame"
        src="/simulator.html"
        title="Obsidian Wealth investment simulator"
      />
    </main>
  );
}