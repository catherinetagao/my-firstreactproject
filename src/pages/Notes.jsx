import React from "react";
import FolderView from "../components/FolderView";

const folders = [
  {
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
        content: "public/assets/images/IMG_20250322_101702_534.jpg",
      },
      {
        type: "image",
        content: "public/assets/images/IMG_20250322_101724_833.jpg",
      },
    ],
  },
  {
    name: "System Administation and Maintenance",
    items: [
      { type: "note", content: "Check disk space" },
      { type: "note", content: "Check system logs" },
      { type: "note", content: "Check system updates" },
      {
        type: "image",
        content: "public/assets/images/img20250322_10405261.png",
      },
      {
        type: "image",
        content: "public/assets/images/img20250322_10444394.png",
      },
      {
        type: "image",
        content: "public/assets/images/img20250322_10483908.png",
      },
      {
        type: "image",
        content: "public/assets/images/img20250322_10493833.png",
      },
      {
        type: "image",
        content: "public/assets/images/img20250322_10525126.png",
      },
      {
        type: "image",
        content: "public/assets/images/img20250322_10535544.png",
      },
      {
        type: "image",
        content: "public/assets/images/img20250322_10552666.png",
      },
    ],
  },
];

const Notes = () => {
  return (
    <div className="notes-page">
      <h1>Notes</h1>
      <FolderView folders={folders} />
    </div>
  );
};

export default Notes;
