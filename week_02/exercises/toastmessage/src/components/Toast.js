import React from "react";
import styled from "styled-components";

const defaultStyle = styled.toast`
  background-color: #333;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  margin: 0 auto;
  width: 50%;
  text-align: center;
`;

export default function Toast() {
  return (
    <div>
      <defaultStyle>This is a toast message</defaultStyle>
    </div>
  );
}
