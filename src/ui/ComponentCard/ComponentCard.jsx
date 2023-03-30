import "./ComponentCard.scss";
import { useDispatch } from "react-redux";
import { openModal, selectComponent } from "../../store/modalReducer";

export default function ComponentCard({
  component,
  preview,
  title = "woo",
  description,
}) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(
      selectComponent({
        component: component,
        title: title,
        description: description,
      })
    );
    dispatch(openModal());
  };

  return (
    <div onClick={handleClick} className="component-card">
      {preview ? (
        <img className="component-card__preview" src={preview} alt={title} />
      ) : (
        <div className="component-card__imageframe"></div>
      )}
      <h2>{title}</h2>
    </div>
  );
}
