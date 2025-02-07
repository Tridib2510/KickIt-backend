import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
function JoinUs() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/CreateEvent");
  };
  const navigate2 = useNavigate();
  const handleButtonClick2 = () => {
    navigate("/AllEvents");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "0 20px",
      }}
    >
      <div className="logo">
        <h4 style={{ margin: 0, marginBottom: "30px", marginTop: "10px" }}>
          Kick IT
        </h4>
      </div>
      <div
        className="box"
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "auto",
          backgroundColor: "white",
          border: "1px solid black",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h4 style={{ margin: 0, marginTop: "80px" }}>Join Us</h4>
        <FontAwesomeIcon icon={faHandshake} />
        <div
          className="buttons"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div
            className="asclub"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <FontAwesomeIcon icon={faPeopleGroup} />
            <button
              style={{
                padding: "10px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={handleButtonClick}
            >
              As a Team
            </button>
          </div>
          <div
            className="asplayer"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <FontAwesomeIcon icon={faPerson} />
            <button
              style={{
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={handleButtonClick2}
            >
              As a Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
