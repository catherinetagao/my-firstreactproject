import React, { useState } from "react";

const FolderView = ({ folders }) => {
  const [selectedFolder, setSelectedFolder] = useState({
    name: "SQL Commands",
    items: [
      { type: "note", content: "SELECT * FROM table_name" },
      {
        type: "note",
        content: "INSERT INTO table_name VALUES (value1, value2)",
      },
      {
        type: "note",
        content: "UPDATE table_name SET column_name = value WHERE condition",
      },
      {
        type: "image",
        content: "../assets/images/IMG_20250322_101702_534.jpg",
      },
      {
        type: "image",
        content: "../assets/images/IMG_20250322_101724_833.jpg",
      },
    ],
  });

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
  };

  return (
    <div className="flex">
      <div className="w-1/4 border-r border-gray-200">
        {folders.map((folder, index) => (
          <div
            key={index}
            className="p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => handleFolderClick(folder)}
          >
            {folder.name}
          </div>
        ))}
      </div>
      {selectedFolder && (
        <div className="w-3/4 p-4">
          <h2 className="text-2xl font-bold mb-4">{selectedFolder.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedFolder.items.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {item.type === "note" ? (
                  <code>
                    <p>{item.content}</p>
                  </code>
                ) : (
                  <img
                    src={item.content}
                    alt="folder item"
                    className="w-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FolderView;
