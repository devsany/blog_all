import { NavLink } from "react-router-dom";

const BlogLink = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/blog/general_theme">General Theam</NavLink>
        </li>
        <li>
          <NavLink to="/blog/tech_&_Program">Tech and Program</NavLink>
        </li>
        <li>
          <NavLink to="/blog/travel">Travel</NavLink>
        </li>
        <li>
          <NavLink to="/blog/lifestyle">Life style</NavLink>
        </li>
        <li>
          <NavLink to="/blog/personal_Development">
            Personal Developnemt
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog/creative_Writing">Creative Writing</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BlogLink;
