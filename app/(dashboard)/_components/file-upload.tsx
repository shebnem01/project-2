import { ourFileRouter } from '@/app/api/uploadthing/core';
import { UploadButton } from '@/lib/uploadthing';
import React from 'react'
interface FileUploadProps{
onChange:(url?:string)=>void;
endpoint:keyof typeof ourFileRouter

}
const FileUpload = ({endpoint,onChange}:FileUploadProps) => {
  return (
    <div>
         <UploadButton
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
            onChange(res?.[0].url)
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  )
}

export default FileUpload