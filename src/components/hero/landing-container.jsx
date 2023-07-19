import React from "react";

export default function LandingContainer({ children }) {
  return (
    <main className="flex min-h-screen flex-col pt-4 pb-12 px-20 justify-center md-ex:justify-normal">
      {children}
    </main>
  );
}
