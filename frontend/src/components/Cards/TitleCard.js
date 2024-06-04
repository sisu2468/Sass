import { useState } from 'react';
import { Button, Alert } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import axios from 'axios';
import Subtitle from "../Typography/Subtitle";

function TitleCard({ title, children, topMargin, EyeIcon, TopSideButtons, isVisible, onEyeChange }) {
  const generateUniqueString = () => {
    return Math.random().toString(36).substr(2, 40);
  };

  const NewPageCreate = async () => {
    const uniqueString = generateUniqueString();
    console.log("Creating new component with unique string:", uniqueString);
    try {
      const response = await axios.post('/create-component', { uniqueString });
      if (response.data.success) {
        return <Alert message="Component created successfully!" type="success" showIcon />;
      } else {
        return <Alert message="Failed to create component" type="error" showIcon />;
      }
    } catch (error) {
      console.error('Error creating component', error);
    }
  };
  return (
    <div className={"card w-full p-3 md:p-6 bg-base-100 shadow-xl " + (topMargin || "mt-4")}>
      <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
        {title}
        {TopSideButtons && <Button type='primary' className="inline-block float-right" onClick={NewPageCreate}>{TopSideButtons}</Button>}
        {EyeIcon && <button className="float-right pr-5" onClick={onEyeChange}>
          {isVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </button>}
      </Subtitle>

      <div className="divider mt-2"></div>

      {(isVisible || EyeIcon) && 
        <div className='h-full w-full pb-4 bg-base-100'>
          {children}
        </div>
      }

    </div>
  );
}

export default TitleCard;
