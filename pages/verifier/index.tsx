import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { verifyRequest } from '../../lib/verifyRequest';
import { getSession, waitForSuccess } from '../../lib/checkVerificationResult';
import { useRouter } from 'next/navigation';

export default function Verify() {
  const router = useRouter();
  const [url, setUrl] = useState('');
  useEffect(() => {
    verifyRequest()
      .then((response) => {
        const { error, data } = response;
        if (error) {
          window.alert(error);
        }
        setUrl(data.url);
        // getSession(data.state).then((response) => {
        //   console.log('REsPONse', response.data);
        // });
        waitForSuccess(data.state)
          .then((response) => {
            console.log('response', response);
            router.push(
              `/verifier/success?data=${encodeURIComponent(JSON.stringify(response))}`,
            );
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(data.state);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="h-screen justify-center items-center">
      <div className="text-center flex flex-col justify-center h-screen items-center">
        <div className="shadow-md pt-10 pb-20 px-20 rounded-lg border text-center">
          <h1 className="text-2xl font-bold mt-4">
            Scan To Present Prescription
          </h1>
          <p className="mt-3 text-gray-600">
            Scan with identity wallet to present.
          </p>
          <div className="mt-10"></div>
          <QRCode value={url} size={280} className="w-20" />
        </div>
      </div>
    </div>
  );
}
