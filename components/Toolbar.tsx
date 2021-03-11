import { useRef } from "react";

export default function Toolbar({ setImage }) {
  const inputRef = useRef(null);
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="toolbar">
      <button
        className="upload-button"
        onClick={(e) => inputRef.current.click()}
      >
        Upload Image
      </button>
      <input
        className="hidden"
        type="file"
        ref={inputRef}
        onChange={(e) => handleUpload(e)}
      />
    </div>
  );
}
