import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LoadingSpinner = () => {
  return (
    <main className="grid h-full place-items-center">
      <div className="mt-52">
        <div className="h-12 w-12 animate-spin rounded-full border-b-4 border-violet"></div>
      </div>
    </main>
  );
};
export default LoadingSpinner;
