import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import React, { memo, useEffect, useRef, useState } from "react";

import ScrollViewWrapper from "./style";

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const scrollContainerRef = useRef();
  const distanceRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContainerRef.current.scrollWidth;
    const clientWidth = scrollContainerRef.current.clientWidth;
    const distance = scrollWidth - clientWidth;
    distanceRef.current = distance;
    if (distanceRef.current > 0) {
      setShowRight(true);
    }
  }, [props.children]);

  function onClickHandler(isRight) {
    let currentIndex = isRight ? tabIndex + 1 : tabIndex - 1;
    const currentEl = scrollContainerRef.current.children[currentIndex];
    const offsetLeft = currentEl.offsetLeft;
    scrollContainerRef.current.style.transform = `translate(${-offsetLeft}px)`;
    setTabIndex(currentIndex);
    setShowRight(distanceRef.current > offsetLeft);
    setShowLeft(offsetLeft > 0);
  }

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div
          className="control icon-arrow-left"
          onClick={(e) => onClickHandler(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className="control icon-arrow-right"
          onClick={(e) => onClickHandler(true)}
        >
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-view" ref={scrollContainerRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
