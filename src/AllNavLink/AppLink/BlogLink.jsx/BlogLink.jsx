import { NavLink } from "react-router-dom";

const BlogLink = () => {
  return (
    <>
      <div className="containt">
        <div className="row">
          <div className="col">
            <NavLink to="/blog/general_theme">General Theam</NavLink>
          </div>
          <div className="col">
            <NavLink to="/blog/travel">Travel</NavLink>
          </div>
          <div className="col">
            <NavLink to="/blog/lifestyle">Life style</NavLink>
          </div>
          <div className="col">
            <NavLink to="/blog/personal_Development">
              Personal Developnemt
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/blog/creative_Writing">Creative Writing</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLink;
