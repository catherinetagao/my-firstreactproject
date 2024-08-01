import React from "react";

const ImageViewer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto w-full">
      <img
        className="rounded-lg h-full"
        src="https://images.unsplash.com/photo-1543554986-fc7c6a91fcb5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
        alt=""
        srcset=""
      />
      <img
        className="rounded-lg h-full"
        src="https://images.unsplash.com/photo-1541881869518-bd35a168467a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
        alt=""
        srcset=""
      />
      <img
        className="rounded-lg h-full"
        src="https://images.unsplash.com/photo-1543554986-fc7c6a91fcb5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
        alt=""
        srcset=""
      />
      <img
        className="rounded-lg h-full"
        src="https://images.unsplash.com/photo-1541881869518-bd35a168467a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
        alt=""
        srcset=""
      />
    </div>
  );
};

export default ImageViewer;
