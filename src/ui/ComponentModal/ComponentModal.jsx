import "./ComponentModal.scss";
import React, { useEffect } from "react";
import { closeModal } from "../../store/modalReducer";
import { useDispatch, useSelector } from "react-redux";


export default function ComponentModal({components}) {

  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  function renderComponent(componentID) {
    const Component = components[componentID];
    return <Component />;
  }

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.className === "component-modal") {
        dispatch(closeModal());
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [dispatch]);



  return (
    <div className="component-modal">
      <div className="component-modal__card">
        <div className="component-modal__component">
          {modal.componentID && renderComponent(modal.componentID)}
        </div>
        <div className="component-modal__info">
          <h2>{modal.title}</h2>
          <p>{modal.description}</p>
        </div>
      </div>
    </div>
  );
}
