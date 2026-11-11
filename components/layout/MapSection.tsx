import React from 'react';

const GOOGLE_MAPS_PROFILE = 'https://maps.app.goo.gl/c9oCa8wv753SizDy5';
const EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14380!2d-81.0103875!3d26.1162065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9077a81c81cd5%3A0x64313cfa57e14945!2sThrive%20With%20Therapy!5e0!3m2!1sen!2sus';

export { GOOGLE_MAPS_PROFILE };

export default function MapSection() {
  return (
    <section className="w-full max-w-[1160px] mx-auto px-6 py-16" aria-label="Office location map">
      <div className="overflow-hidden rounded-2xl border border-border">
        <iframe
          src={EMBED_URL}
          width="100%"
          height="350"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Thrive with Therapy — Office location"
        />
      </div>
    </section>
  );
}
