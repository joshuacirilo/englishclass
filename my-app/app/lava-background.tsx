/** Decorative CSS-only animation, with no client JavaScript. */
export default function LavaBackground() {
  return (
    <div className="lava-background" aria-hidden="true">
      <div className="lava-blobs">
        <span className="lava-blob lava-blob-one" />
        <span className="lava-blob lava-blob-two" />
        <span className="lava-blob lava-blob-three" />
        <span className="lava-blob lava-blob-four" />
        <span className="lava-blob lava-blob-five" />
      </div>
    </div>
  );
}
