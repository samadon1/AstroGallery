import React from "react";

function ImageCard(props) {
    const tags = props.image.tags.split();

    
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={props.image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        {/* <div className="font-bold text-purple-500">Photo by {props.image.user}</div> */}
        {/* <ul>
          <li>
            <strong>Views: </strong>
            {props.image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {props.image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {props.image.likes}
          </li>
        </ul> */}
      </div>
      {/* <div className="px-6 py-4">
        
        {tags.map((tag, index )=> (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
        
      </div> */}
    </div>
  );
}

export default ImageCard;
