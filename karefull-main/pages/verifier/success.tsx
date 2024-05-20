'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Success() {
  const [data, setData] = useState<any>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const dataParam = searchParams.get('data');

    if (dataParam) {
      let decodedData = decodeURIComponent(dataParam);
      let parsedData = JSON.parse(decodedData);
      setData(parsedData);
    }
  }, []);

  const DATA: { title: string; key: string }[] = [
    {
      title: 'Drug Name',
      key: 'drugName',
    },
    {
      title: 'Dosage Form',
      key: 'dosageForm',
    },
    {
      title: 'Quantity Prescribed',
      key: 'quantityPrescribed',
    },
    {
      title: 'Directions For Use',
      key: 'directionsForUse',
    },
  ];

  const DATA_PATIENT: { title: string; key: string }[] = [
    {
      title: "Patient's Name",
      key: 'PatientsName',
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      {data && (
        <div className="shadow py-10 px-20 rounded-lg border w-[50%]">
          <h1 className="text-2xl">Prescription Verified</h1>
          <div className="mt-8" />
          {DATA.map((d) => {
            return (
              <div className="flex flex-col gap-1 my-3" key={d.title}>
                <span className="block text-gray-500">{d.title}</span>
                <span className="block mr-2">{data[d.key]}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
