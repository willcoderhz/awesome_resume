import React from "react";
import TemplateSwitcher from "../../../templates/TemplateSwitcher";
import PreviewHeader from "./PreviewHeader";

const ResumePreview = ({ userInfo }) => {
  return (
    <div className=" right-0  w-50 h-full ">
      <PreviewHeader />
      <TemplateSwitcher userInfo={userInfo} />
    </div>
  );
}

export default ResumePreview;
