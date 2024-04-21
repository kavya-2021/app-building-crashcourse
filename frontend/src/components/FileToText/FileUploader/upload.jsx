import React, { useRef, useState } from "react";
import { Button } from "./style";

const FileInput = ({setFileToConvert}) => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setFileToConvert(file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleDelete = () => {
    setFile(null);
    setFileToConvert(null);
  };

  return (
    <>
      <div>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <Button onClick={handleClick}>
          <img src="/Icons/uploadIcon.png" alt="file" />
          Upload a file
        </Button>
      </div>
      {file ? (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <p>{file ? file.name : ""}</p>
          <div onClick={() => handleDelete()}>
            <img
              src="/Icons/delete.png"
              alt="delete"
              width="25px"
              height="25px"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FileInput;
