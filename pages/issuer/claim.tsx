'use client';
import React from 'react';
import QRCode from 'qrcode.react';
import { useSearchParams } from 'next/navigation';

export default function Claim() {
  const searchParams = useSearchParams();
  const offer = searchParams.get('offer');

  if (!offer) {
    return <div>No offer</div>;
  }

  return (
    <div className="h-screen justify-center items-center">
      <div className="text-center flex flex-col justify-center h-screen items-center">
        <div className="shadow-md pt-10 pb-20 px-20 rounded-lg border">
          <h1 className="text-2xl font-bold mt-4">Claim Your Prescription</h1>
          <p className="mt-3 text-gray-600">
            Scan with identity wallet to claim
          </p>
          <div className="mt-10"></div>
          <QRCode value={offer} size={280} className="w-20" />
        </div>
      </div>
    </div>
  );
}
