import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

interface Props{
    onClick: () => void;
}

const Like = ({ onClick }:Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  }
  
  if (status) return <FaHeart color="red" size={30} style={{ margin: "100px" }} onClick={toggle} />;
  else return <FaRegHeart color="red" size={30} style={{ margin: "100px" }} onClick={toggle}/>;
};

export default Like;
