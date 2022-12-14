import React from "react";
import S from './Label.module.css'

const Label = ({ texto }) => {
    return <label className={S.label}>{texto}</label>;
  };
  
  export default Label;