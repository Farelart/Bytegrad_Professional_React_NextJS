"use client";

import React from "react";

export default function ExampleClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-400 p-5">
      <p>2. This text is from a client component</p>
      {children}
    </div>
  );
}
