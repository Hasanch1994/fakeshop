"use client";
import { ComponentType, useRef, useEffect } from "react";

interface ClickOutsideProps {
  // additional props
  clickOutside: () => void;
}

function withClickOutside<T extends ClickOutsideProps>(
  WrappedComponent: ComponentType<T>
): ComponentType<T> {
  const WithClickOutside = (props: T) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          props.clickOutside();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [props.clickOutside]);

    return (
      <div ref={wrapperRef}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return WithClickOutside;
}

export default withClickOutside;
