import "./TattooItem.css";
function TattooItem({ tattoo, onTattooOpenClick }) {
  return (
    <div className="tattoo-item">
      <img
        src="/images/image_1.jpg"
        alt=""
        onClick={() => {
          onTattooOpenClick(tattoo);
        }}
      />
      <h4>{tattoo.title}</h4>
    </div>
  );
}

export default TattooItem;
