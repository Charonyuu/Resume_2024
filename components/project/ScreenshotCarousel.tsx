"use client";
import React, { useCallback, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FaAngleRight, FaAngleLeft, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function ScreenshotCarousel({
  screenshots,
  title,
}: {
  screenshots: string[];
  title: string;
}) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [modalIndex, setModalIndex] = React.useState<number | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const [modalSliderRef, modalInstanceRef] = useKeenSlider({
    loop: true,
    initial: modalIndex ?? 0,
  });

  const openModal = useCallback((i: number) => {
    setModalIndex(i);
  }, []);

  const closeModal = useCallback(() => {
    setModalIndex(null);
  }, []);

  useEffect(() => {
    if (modalIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") modalInstanceRef.current?.prev();
      if (e.key === "ArrowRight") modalInstanceRef.current?.next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [modalIndex, closeModal, modalInstanceRef]);

  useEffect(() => {
    if (modalIndex !== null && modalInstanceRef.current) {
      modalInstanceRef.current.moveToIdx(modalIndex);
    }
  }, [modalIndex, modalInstanceRef]);

  return (
    <>
      {/* Desktop: grid */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {screenshots.map((src, i) => (
          <button
            key={i}
            onClick={() => openModal(i)}
            className="rounded-xl overflow-hidden border border-[hsl(var(--border))] bg-gray-800/50 hover:border-teal-500/30 transition-all cursor-zoom-in"
          >
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              width={400}
              height={300}
              className="w-full h-auto object-contain"
            />
          </button>
        ))}
      </div>

      {/* Mobile: carousel */}
      <div className="md:hidden relative">
        <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
          {screenshots.map((src, i) => (
            <button
              key={i}
              onClick={() => openModal(i)}
              className="keen-slider__slide flex items-center justify-center bg-gray-800/50 cursor-zoom-in"
            >
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
            </button>
          ))}
        </div>

        {screenshots.length > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={() => instanceRef.current?.prev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 shadow-md rounded-full p-2 text-white"
            >
              <FaAngleLeft className="text-sm" />
            </button>
            <button
              aria-label="Next"
              onClick={() => instanceRef.current?.next()}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 shadow-md rounded-full p-2 text-white"
            >
              <FaAngleRight className="text-sm" />
            </button>

            <div className="flex justify-center gap-1.5 mt-3">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => instanceRef.current?.moveToIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentSlide === i
                      ? "w-5 bg-teal-500"
                      : "w-1.5 bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            aria-label="Close"
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
          >
            <FaTimes className="text-lg" />
          </button>

          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {(modalInstanceRef.current?.track.details.rel ?? modalIndex) + 1} / {screenshots.length}
          </div>

          <div
            className="w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div ref={modalSliderRef} className="keen-slider">
              {screenshots.map((src, i) => (
                <div
                  key={i}
                  className="keen-slider__slide flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={`${title} screenshot ${i + 1}`}
                    width={1200}
                    height={800}
                    className="max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>

            {screenshots.length > 1 && (
              <>
                <button
                  aria-label="Previous"
                  onClick={() => modalInstanceRef.current?.prev()}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                >
                  <FaAngleLeft className="text-xl" />
                </button>
                <button
                  aria-label="Next"
                  onClick={() => modalInstanceRef.current?.next()}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                >
                  <FaAngleRight className="text-xl" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
