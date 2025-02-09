import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import ImageCards from "./components/ImageCards/ImageCards";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import dates from "./data/data.json";
function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [contentHeight, setContentHeight] = useState(null);
    const contentRef = useRef(null);
    const intervalRef = useRef(null);
    const slides = dates.slides;
    const intervalTime = 5000; // Change slide every 5 seconds
    // Function to start the auto-slide timer
    const startAutoSlide = useCallback(() => {
        if (intervalRef.current)
            clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, intervalTime);
    }, [slides.length]);
    useEffect(() => {
        startAutoSlide(); // Start auto-slides on mount
        return () => intervalRef.current && clearInterval(intervalRef.current);
    }, [startAutoSlide]);
    // Measure content height before rendering new content
    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.offsetHeight);
        }
    }, [activeIndex]);
    const handleManualChange = (newIndex) => {
        setActiveIndex(newIndex);
        startAutoSlide();
    };
    return (<div className="pb-[70px] md:pb-[40px] flex flex-col mt-[15vh] md:mt-[12vh] relative bg-black" style={{ transition: "min-height 0.5s ease-in-out", minHeight: contentHeight || "auto" }}>
      <div className="absolute bg-gradient overlay z-20"/>
      <ContentWrapper index={activeIndex} ref={contentRef}/>
      {/* Thumbnail Navigation */}
      <ImageCards images={slides.map((slide) => ({
            img: `${slide.thumbnail}`,
            alt: slide.thumbnailAlt,
        }))} activeIndex={activeIndex} setActiveIndex={handleManualChange}/>
    </div>);
}
export default App;
