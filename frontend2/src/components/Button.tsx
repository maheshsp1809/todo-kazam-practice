import React from "react";

interface MyButtonProps {
  text?: string | number;
  count: number;
  onClick: () => void;
}
const MyButton: React.FC<MyButtonProps> = function (props) {
  const { onClick, count } = props;
  return <button onClick={onClick}>mahesh is {count}</button>;
};

export default MyButton;
