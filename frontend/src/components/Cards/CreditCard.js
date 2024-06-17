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
    <div className={"bg-slate-100 card w-full pt-5 bg-base-100 shadow-xl " + (topMargin )}>
      <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
        {title && <h1 className='ml-20 col-span-1'>{title}</h1>}
        <div class="col-span-2 max-w-lg">
          <div class="inline-flex shadow-sm rounded-md" role="group">
              <button type="button" class="rounded-l-lg border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                  Build
              </button>
              <button type="button" class="border-t border-b border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                  Prompt
              </button>
              <button type="button" class="border-l border-t border-b border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                  Settings
              </button>
              <button type="button" class="rounded-r-md border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                  Share
              </button>
          </div>
        </div>
        
      </Subtitle>
    </div>
  );
}

export default TitleCard;
