export default function Toolbar() {
    return (
        <div className="toolbar">
            <button
            className="upload-button"
          >
            Upload Image
          </button>
          <input
            className="hidden"
            type="file"
          />
        </div>
    )
}