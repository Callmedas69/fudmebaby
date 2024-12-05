"use client";

import React, { useState } from "react";
import { Copy } from "lucide-react";

// Define the types for the component's props
interface CopyASCIIProps {
  fckAscii: string;
}

const CopyASCII: React.FC<CopyASCIIProps> = ({ fckAscii }) => {
  const [copied, setCopied] = useState(false);

  // Function to copy the contract address
  const handleCopy = () => {
    navigator.clipboard.writeText(fckAscii).then(() => {
      setCopied(true);
      // Reset the copied state after a short delay
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="p-10 bg-transparent flex flex-col items-center hover:bg-blue-400 rounded-2xl"
    >
      ╭ᥥ╮ ( \ ╭╮ / )╭ᥥ╮
      <span className="pl-3 pt-5 text-lg">{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
};

export default CopyASCII;
