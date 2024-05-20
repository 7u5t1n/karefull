import axios from 'axios';

type FormState = {
  patientName: string;
  address: string;
  dateOfBirth: string;
  drugName: string;
  dosage: string;
  quantity: string;
  directionsForUse: string;
  clinicianName: string;
  clinicianRegisterNumber: string;
};
export function issueRequest(formState: FormState) {
  const data = {
    issuanceKey: {
      type: 'local',
      jwk: '{"kty":"OKP","d":"cX1-JhiEG40ZauMUkB-rfYxRyt9k10M44DWXwTeOnlg","crv":"Ed25519","kid":"WGGR-NRHYFe6Mhvpfwq9hwgTgsl6qNzYeC88-GvAu8g","x":"zXNWEWPIWSozt2CJaeU70HQbZcBbd8tOhmRP8NnU4oc"}',
    },
    issuerDid: 'did:key:z6MktHFdLyKUQADeqiMVxy83xxoKYDr6Y3jGeFZdxCbms26r',
    vc: {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      type: ['VerifiableCredential', 'VerifiablePrescription'],
      credentialSubject: {
        id: 'did:ebsi:3BZDqHZWKTm2JHPFgGcgh5fgh77ghgftN15TxJCKH7bZGu69',
        address: [formState.address],
        dateOfBirth: formState.dateOfBirth,
        clinicianName: formState.clinicianName,
        clinicianNumber: formState.clinicianRegisterNumber,
        drugName: formState.drugName,
        dosageForm: formState.dosage,
        patientName: formState.patientName,
        quantityPrescribed: formState.quantity,
        directionsForUse: formState.directionsForUse,
      },
      id: 'urn:uuid:3add94f4-28ec-42a1-8704-4e4aa51006b4',
      issued: '2021-08-31T00:00:00Z',
      issuer: {
        id: '',
      },
      validFrom: '2021-08-31T00:00:00Z',
      validTo: '',
      issuanceDate: '2021-08-31T00:00:00Z',
    },
    mapping: {
      id: '<uuid>',
      issuer: {
        id: '<issuerDid>',
      },
      credentialSubject: {
        id: '<subjectDid>',
      },
      issued: '<timestamp>',
      validFrom: '<timestamp>',
      expirationDate: '<timestamp-in:14d>',
    },
  };

  return axios
    .post('https://issuer.portal.walt.id/openid4vc/jwt/issue', data, {
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'application/json',
      },
    })
    .then((response: any) => {
      return { error: false, data: response.data };
    })
    .catch((error: any) => {
      return { error: true, data: error };
    });
}
