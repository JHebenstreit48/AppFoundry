export default function HomeContent() {
  return (
    <>
      <div className="siteInfoContent">
        AppFoundry is a focused knowledge base for <span className="emphasis">mobile app</span> and{" "}
        <span className="emphasis">mobile game</span> development. It consolidates notes, patterns, and workflows across
        native (iOS/Android) and cross-platform stacks (React Native, Flutter, Unity), focusing on practical
        build/release pipelines, store submission, testing, performance, and real-world developer ergonomics.
      </div>

      <hr />

      <div className="Note">
        <strong>Note:</strong> All sites are currently being refactored for consistent structure and lazy-loaded
        navigation.
      </div>

      <hr />

      {/* <div className="relatedProjects">
        <h2 className="relatedProjectsHeader">Similar Projects</h2>
        <hr />
        <ul className="projectLinks">
          <li>
            <a href="https://devscriptstax.netlify.app/" target="_blank" rel="noopener noreferrer">
              DevScriptStax
            </a>{" "}
            – Full stack web development notes
          </li>
          <li>
            <a href="https://netnotes.netlify.app/" target="_blank" rel="noopener noreferrer">
              NetNotes
            </a>{" "}
            – Networking &amp; Cisco technologies
          </li>
          <li>
            <a href="https://pixelprose.netlify.app/" target="_blank" rel="noopener noreferrer">
              PixelProse
            </a>{" "}
            – Non-mobile game development
          </li>
        </ul>
      </div> */}
    </>
  );
}
