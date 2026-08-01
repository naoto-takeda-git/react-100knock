import React, { useEffect, useRef, useState } from "react";

type Position = {
  x: number;
  y: number;
};

const Knock18 = () => {
  const [isEnter, setIsEnter] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const boxSize = 300;

  const style = {
    width: `${boxSize}px`,
    height: `${boxSize}px`,
    backgroundColor: isEnter ? "skyblue" : "white",
    position: "absolute" as const,
    left: `${position.x}px`,
    top: `${position.y}px`,
    cursor: isDragging ? "grabbing" : "grab",
    boxSizing: "border-box" as const,
    border: "1px solid #eee",
  };

  const mouseEnterHandler = () => {
    setIsEnter(true);
  };

  const mouseLeaveHandler = () => {
    setIsEnter(false);
  };

  const containerMouseLeaveHandler = () => {
    setIsEnter(false);
    setPosition({ x: 0, y: 0 });
  };

  const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setIsDragging(true);
    setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;

      const nextX = e.clientX - containerRect.left - dragOffset.x;
      const nextY = e.clientY - containerRect.top - dragOffset.y;

      const maxX = containerRect.width - boxSize;
      const maxY = containerRect.height - boxSize;

      setPosition({
        x: Math.min(Math.max(0, nextX), maxX),
        y: Math.min(Math.max(0, nextY), maxY),
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div
      className="container"
      ref={containerRef}
      onMouseLeave={containerMouseLeaveHandler}
      style={{
        width: "600px",
        height: "600px",
        border: "1px solid #b1afaf",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={style}
        className="box"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseDown={mouseDownHandler}
      >
        <p>
          x座標：{position.x} y座標：{position.y}
        </p>
      </div>
    </div>
  );
};

export default Knock18;
