import { useState } from "react";
import styled from "styled-components";
const ShowMeWrapper = styled.div`
  &.show-me {
    border-top: 1px solid #e3e3e3;
    width: 100%;
    padding: 14px 16px 16px;
    position: relative;
    h3 {
      width: 100%;
      font-size: 1em;
      font-weight: 300;
      margin-bottom: 10px;
    }
  }
`;
const Radio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  input {
    width: 1rem;
    height: 1rem;
    border-style: solid;
    border-width: 1px;
    position: relative;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 50%;
    border-color: #adb5bd;
    color: transparent;
    background-color: #fff;
  }
  input:checked {
    border-color: var(--tmbLightBlue);
    color: #fff;
    background-color: var(--tmbLightBlue);
  }
  input:checked::before {
    width: 6px;
    height: 6px;
    content: "";
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(1) translate(-50%, -50%);
  }
  .radio-field {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
const showMe = [
  { id: 0, label: "Everything" },
  { id: 1, label: "Movies I Haven't Seen" },
  { id: 2, label: "Movies I Have Seen" },
];
export default function ShowMe() {
  const [radioValue, setRadioValue] = useState(0);
  return (
    <ShowMeWrapper className="show-me">
      <h3>Show me</h3>
      <Radio>
        {showMe.map((item) => (
          <div key={item.id} className="radio-field">
            <input
              id={item.id}
              type="radio"
              value={item.id}
              checked={radioValue === item.id}
              onChange={() => {
                setRadioValue(item.id);
              }}
            />
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        ))}
      </Radio>
    </ShowMeWrapper>
  );
}
