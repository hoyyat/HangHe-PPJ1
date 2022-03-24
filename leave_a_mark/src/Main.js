import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const Main = (props) => {
  const history = useHistory();
//페이지 이동은 history 객체 사용

  const day_text_dict = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };

  const week_days = Object.keys(day_text_dict).map((_d, idx) => {
    //Object.keys() 메서드는 주어진 객체의 속성 이름들을 순서대로 열거할 수 있는 배열로 반환
    //map() 메서드는 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 배열로 반환
    // _d는 day_text_dict의 key 값, 0~6까지 숫자가 들어온다.
    let today = new Date().getDay();
    // 오늘의 날짜를 일(0)~토(6)까지 반환해준다.
    let d = 
        today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7 
        : today + parseInt(_d);    
    // parseInt() 문자열을 숫자로 바꾸어줌 
    //  딕셔너리는 숫자를 넣어도 문자열로 바뀌기 떄문에 숫자로 형변환 해주어야 한다.
    return day_text_dict[d];
  });

  const week_rates = week_days.map((w, idx) => {
    // day는 요일 텍스트가, rate는 랜덤 평점이 들어가요!
    return {
      day: w,
      rate:
        Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
        Math.ceil(1),
    };
  });
  
  return (
    <>
      <div
        style={{
          maxWidth: "350px",
          width: "80vw",
          height: "90vh",
          margin: "5vh auto",
          padding: "5vh 0",
          border: "1px solid #ddd",
          boxSizing: "border-box",
          borderRadius: "5px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>내 일주일은?</h3>

        {week_rates.map((w, idx) => {
          return (
            <div
              key={`week_day${idx}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem 0",
                width: "100%",
              }}
            >
              <p style={{ margin: "0 0.5rem 0 0", fontWeight: "bold" }}>
                {w.day}
              </p>

              {Array.from({ length: 5 }, (item, idx) => {
                //array.from() 메서드는 유사 배열 객체나 반복 가능한 객체를 복사해 새로운 array객체를 만듦
                
                return (
                  <div
                    key={idx}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "30px",
                      margin: "5px",
                      backgroundColor: w.rate < idx ? "#ddd" : "#ffeb3b",
                    }}
                  ></div>
                );
              })}

              <div
                style={{
                  appearance: "none",
                  backgroundColor: "transparent",
                  borderColor: "purple",
                  width: "0",
                  height: "0",
                  borderTop: "1rem solid transparent",
                  borderBottom: "1rem solid transparent",
                  borderLeft: "1.6rem solid purple",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => {
                  history.push(`/review/${w.day}`);
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
