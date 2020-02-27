import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Timeline = () => {
  return (
    <TimelineWrapper>
      <TimelineContainer>
        <Sidebar />
      </TimelineContainer>
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TimelineContainer = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
`;

export default Timeline;
