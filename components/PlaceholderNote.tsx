import React from 'react';

/**
 * Visible flag for draft copy that did not come from the client (spec §7:
 * "use clearly-marked placeholder text and flag it for the client to fill").
 * Remove each note once Vanessa supplies or approves the real content.
 */
export default function PlaceholderNote({ children }: { children?: React.ReactNode }) {
  return (
    <div className="placeholder-note" role="note">
      <span className="placeholder-note__badge">Placeholder</span>
      <p>
        {children ??
          'The text in this section is draft content and will be replaced with Vanessa’s own wording before launch.'}
      </p>
    </div>
  );
}
