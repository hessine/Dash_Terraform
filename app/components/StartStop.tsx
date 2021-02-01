import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrafficLight,
  IconDefinition,
  faPowerOff
} from "@fortawesome/free-solid-svg-icons";

interface IStartStopIconProps {
  type: "start" | "stop";
  handleAction: () => void;
  icon?: IconDefinition;
  classToAdd?: string;
}

const Background = styled.div<{ type: "start" | "stop" }>`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: rgb(
    ${({ type }) => (type === "start" ? "45,201,55" : "204,50,50")}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  > svg {
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;

const StartStopIcon: React.FC<IStartStopIconProps> = ({
  type,
  handleAction,
  icon,
  classToAdd
}) => {
  const title = type === "start" ? "Start Container" : "Stop Container";

  return (
    <Background
      className={classToAdd ? classToAdd : ""}
      onClick={handleAction}
      type={type}
    >
      <FontAwesomeIcon title={title} icon={icon ? icon : faPowerOff} />
    </Background>
  );
};

export default StartStopIcon;