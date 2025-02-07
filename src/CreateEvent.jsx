import { useRef } from "react";

function CreateEvent() {
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div className="logo">
        <h4 style={{ 
          margin: 0, 
          marginBottom: "30px", 
          marginTop: "10px",
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
        }}>
          Kick IT
        </h4>
      </div>
      <div
        className="box"
        style={{
          width: "90%",
          maxWidth: "400px",
          minHeight: "min(400px, 90vh)",
          backgroundColor: "white",
          border: "1px solid black",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "clamp(10px, 3vw, 20px)",
          gap: "clamp(8px, 2vw, 10px)",
          boxSizing: "border-box",
        }}
      >
        <h4 style={{ 
          margin: 0, 
          marginTop: "10px",
          fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
        }}>
          Create Event
        </h4>
        <input
          type="text"
          placeholder="Enter Activity"
          style={{
            width: "100%",
            padding: "clamp(8px, 2vw, 10px)",
            backgroundColor: "white",
            color: "black",
            boxSizing: "border-box",
            fontSize: "clamp(14px, 2vw, 16px)",
          }}
        />
        <input
          type="text"
          placeholder="Enter Venue"
          style={{
            width: "100%",
            padding: "clamp(8px, 2vw, 10px)",
            backgroundColor: "white",
            color: "black",
            boxSizing: "border-box",
            fontSize: "clamp(14px, 2vw, 16px)",
          }}
        />

        {/* Date and Time Picker Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "clamp(8px, 2vw, 10px)",
            width: "100%",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Date Picker */}
          <div className="custom-input" style={{ flex: "1 1 auto", minWidth: "120px" }}>
            <input 
              type="date" 
              ref={dateRef} 
              className="hidden-date-input"
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
              }}
            />
            <button
              className="icon-button"
              onClick={() => dateRef.current.showPicker()}
              style={{
                fontSize: "clamp(16px, 3vw, 20px)",
                padding: "clamp(6px, 1.5vw, 8px)",
              }}
            >
              📅
            </button>
          </div>

          {/* Time Picker */}
          <div className="custom-input" style={{ flex: "1 1 auto", minWidth: "120px" }}>
            <input 
              type="time" 
              ref={timeRef} 
              className="hidden-date-input"
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
              }}
            />
            <button
              className="icon-button"
              onClick={() => timeRef.current.showPicker()}
              style={{
                fontSize: "clamp(16px, 3vw, 20px)",
                padding: "clamp(6px, 1.5vw, 8px)",
              }}
            >
              ⏰
            </button>
          </div>
        </div>

        <button
          style={{
            padding: "clamp(8px, 2vw, 10px) clamp(15px, 3vw, 20px)",
            marginTop: "clamp(8px, 2vw, 10px)",
            width: "100%",
            maxWidth: "200px",
            fontSize: "clamp(14px, 2vw, 16px)",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateEvent;
