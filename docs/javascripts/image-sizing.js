(function () {
  function classifyImage(image) {
    if (!image.closest(".md-content")) return;
    if (!image.naturalWidth || !image.naturalHeight) return;

    image.classList.remove(
      "wiki-shot--compact",
      "wiki-shot--portrait",
      "wiki-shot--standard",
      "wiki-shot--wide",
      "wiki-shot--panoramic"
    );

    const ratio = image.naturalWidth / image.naturalHeight;
    let sizeClass;

    /* Shape takes priority over pixel width: a narrow portrait screenshot
       should not be mistaken for a small horizontal dialog. */
    if (ratio < 1.15) {
      sizeClass = "wiki-shot--portrait";
    } else if (image.naturalWidth <= 700) {
      sizeClass = "wiki-shot--compact";
    } else if (ratio < 1.7) {
      sizeClass = "wiki-shot--standard";
    } else if (ratio < 2.35) {
      sizeClass = "wiki-shot--wide";
    } else {
      sizeClass = "wiki-shot--panoramic";
    }

    image.classList.add(sizeClass);
  }

  function applyScreenshotSizing() {
    document.querySelectorAll(".md-content img").forEach(function (image) {
      if (image.complete) {
        classifyImage(image);
      } else {
        image.addEventListener("load", function () {
          classifyImage(image);
        }, { once: true });
      }
    });
  }

  document.addEventListener("DOMContentLoaded", applyScreenshotSizing);

  if (typeof document$ !== "undefined") {
    document$.subscribe(applyScreenshotSizing);
  }
})();
