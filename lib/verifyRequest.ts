import axios, { AxiosResponse } from 'axios';
import { getStateFromURL } from './getStateValue';

export async function verifyRequest() {
  const data = {
    request_credentials: ['VerifiablePrescription'],
  };

  const config = {
    headers: {
      Accept: '*/*',
      authorizeBaseUrl: 'openid4vp://authorize',
      responseMode: 'direct_post',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'https://verifier.portal.walt.id/openid4vc/verify',
      data,
      config,
    );

    return {
      error: false,
      data: { url: response.data, state: getStateFromURL(response.data) },
    };
  } catch (error: any) {
    return { error: true, data: error };
  }
}
