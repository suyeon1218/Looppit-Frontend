import { HTTP_METHOD } from 'next/dist/server/web/http';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { apiServerClient } from '@/shared/api/api.server-client';
import { createApiError } from '@/shared/api/utils/api.response-format';
import { makeNextResponseError } from '@/shared/utils';

const getEndpoint = (nextUrl: NextRequest['nextUrl']): string => {
  const { pathname } = nextUrl;
  const [, ...pathParts] = pathname.split('/api/');
  return pathParts.join('/');
};

const makeHeadersWithCookie = async (request: NextRequest) => {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();
  return {
    ...Object.fromEntries(request.headers.entries()),
    Cookie: cookieString,
  };
};

const getRequestBody = async (request: NextRequest) => {
  const contentType = request.headers.get('content-type');

  if (!contentType) return undefined;

  if (contentType.includes('application/json')) {
    return await request.json();
  }

  if (contentType.includes('multipart/form-data')) {
    return await request.formData();
  }

  return await request.text();
};

const handleRequest = async (
  request: NextRequest,
  method: HTTP_METHOD,
): Promise<NextResponse> => {
  try {
    const headers = await makeHeadersWithCookie(request);
    const endpoint = getEndpoint(request.nextUrl);
    const body = await getRequestBody(request);

    let response;

    switch (method) {
      case 'GET':
        response = await apiServerClient.get(endpoint, headers);
        break;
      case 'POST':
        response = await apiServerClient.post(endpoint, body, headers);
        break;
      case 'PUT':
        response = await apiServerClient.put(endpoint, body, headers);
        break;
      case 'DELETE':
        response = await apiServerClient.delete(endpoint, headers);
        break;
    }

    return NextResponse.json(response);
  } catch (error) {
    const apiError = createApiError(error);
    return makeNextResponseError(apiError);
  }
};

export async function GET(request: NextRequest) {
  return await handleRequest(request, 'GET');
}

export async function POST(request: NextRequest) {
  return await handleRequest(request, 'POST');
}

export async function PUT(request: NextRequest) {
  return await handleRequest(request, 'PUT');
}

export async function DELETE(request: NextRequest) {
  return await handleRequest(request, 'DELETE');
}
