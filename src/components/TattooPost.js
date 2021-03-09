import "./TattooPost.css";
function TattooPost({ tattoo, onBgClick }) {
  return (
    <div className="tattoo-post">
      <div className="tattoo-post-bg" onClick={onBgClick} />
      <div className="tattoo-post-content">
        <img src="/images/image_1.jpg" alt="" />
        <h4>{tattoo.title}</h4>
      </div>
    </div>
  );
}
export default TattooPost;
