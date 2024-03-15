import { Children } from "react";

export default function Announcement({title , description , ...Children} : {title : string , description : string}) {
  return (
    <div className="ag-courses_item">
    <div className="ag-courses-item_link">
      <div className="ag-courses-item_bg"></div>

      <h2 className="ag-courses-item_title">
        {title} 
      </h2>
      <p
        className="ag-courses-item_title"
        style={{ textShadow: "none" }}
      >
        {description}
      </p>
    </div>
  </div>
  )
}
