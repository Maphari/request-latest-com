import React from "react";
import { ScrollReveal } from "reveal-on-scroll-react";

export default function () {
  return (
    <>
      <ScrollReveal.div className="posts-container">
        <h1 className="posts-container__header">Latest Posts</h1>
      </ScrollReveal.div>
    </>
  );
}
