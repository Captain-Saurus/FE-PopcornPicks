import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/modules/modalReducer";
/**
 *
 * @param wrapperRef
 */
const useHasClickOutSideWithModal = (
  wrapperRef: React.RefObject<HTMLDivElement>
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleClickOutSide = (event: any) => {
      if (wrapperRef && !wrapperRef.current?.contains(event.target)) {
        dispatch(closeModal());
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [dispatch, wrapperRef]);
};

export default useHasClickOutSideWithModal;
