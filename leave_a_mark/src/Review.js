import React from "react";
import { useHistory, useParams } from "react-router-dom";

const Review = (props) => {
  const history = useHistory();
  const params = useParams();

  const [rate, setRate] = React.useState(0);

  React.useEffect(() => {

    const press = (e) => {
 
      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        // 1~5까지 숫자가 맞으면 state에 넣어주자!
        setRate(parseInt(e.key));
      }
    };
    window.addEventListener("keydown", press);

    // 컴포넌트가 언마운트 되면(화면에서 사라지면) 이벤트도 지워줘요!
    return () => window.removeEventListener("keydown", press);
  }, []);

  return (
    <>
      <div
        style={{
          maxWidth: "350px",
          width: "80vw",
          height: "90vh",
          margin: "5vh auto",
          padding: "5vh 5vw",
          border: "1px solid #ddd",
          boxSizing: "border-box",
          borderRadius: "5px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>
          <span
            style={{
              color: "#fff",
              fontWeight: "900",
              background: "orange",
              padding: "0.2rem",
              borderRadius: "5px",
            }}
          >
            {params.week_day}요일
          </span>{" "}
          평점 남기기
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem 0",
            width: "100%",
          }}
        >
          {Array.from({ length: 5 }, (item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  setRate(idx + 1);
                }}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "30px",
                  margin: "5px",
                  backgroundColor: rate < idx + 1 ? "#ddd" : "#ffeb3b",
                }}
              ></div>
            );
          })}
        </div>

        <button
          style={{
            width: "100%",
            backgroundColor: "purple",
            border: "none",
            borderRadius: "5px",
            padding: "1rem",
            color: "#fff",
          }}
          onClick={() => {
        
            history.goBack();
          }}
        >
          평점 남기기
        </button>
      </div>
    </>
  );
};

export default Review;
