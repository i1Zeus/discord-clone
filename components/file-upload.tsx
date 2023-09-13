"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";

interface FileUploadProps {
  value: string;
  onChange: (url?: string) => void;
  endpoint: "messageFile" | "serverImage";
}

const FileUpload = ({ endpoint, value, onChange }: FileUploadProps) => {
  const fileType = value.split(".").pop();
  if (value && fileType != "pdf") {
    return (
      <div className="relative h-24 w-24">
        <Image fill alt="upload" src={value} className="rounded-full" />
        <button
          onClick={() => onChange("")}
          className="bg-rose-400 text-white p-1 rounded-full absolute right-0 top-0 shadow-sm "
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint="serverImage"
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};

export default FileUpload;
