import { useState } from "react";
import styled from "styled-components";
import { showMe } from "../../mock-datas/optionsList";
import { useSelector } from "react-redux";
const ShowMeWrapper = styled.div`
  &.show-me {
    border-top: 0.1rem solid #e3e3e3;
    width: 100%;
    padding: 1.4rem 1.6rem 1.6rem;
    position: relative;
    h3 {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }
  }
`;
const Radio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  input {
    width: 1.6rem;
    height: 1.6rem;
    border-style: solid;
    border-width: 0.1rem;
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
    width: 0.6rem;
    height: 0.6rem;
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
    gap: 0.6rem;
  }
`;

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
