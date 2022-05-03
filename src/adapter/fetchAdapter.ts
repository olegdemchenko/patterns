import { XMLHttpRequest } from 'xmlhttprequest-ts';

interface IFetchAdapterOptions {
  method: string,
  headers?: {
    [index: string]: string
  },
  body?: string
}

interface IFetchAdapterResponse {
  ok: boolean,
  status: number,
  text(): Promise<string>,
  json(): Promise<string>,
}

interface IFetchAdapter {
  (url: string, options?: IFetchAdapterOptions): Promise<IFetchAdapterResponse>
}

const fetchAdapter: IFetchAdapter = function (
  url,
  {
    method,
    headers = {},
    body = '',
  } = {
    method: 'GET',
    headers: {},
    body: '',
  },
) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    Object.entries(headers).forEach(([key, value]) => {
      xhr.setRequestHeader(key, value);
    });

    xhr.addEventListener('load', () => {
      if (xhr.status !== 200) {
        reject(new Error(`Request failed with status code ${xhr.status}`));
      }
      resolve({
        ok: true,
        status: xhr.status,
        text() {
          return Promise.resolve(xhr.responseText);
        },
        json() {
          return Promise.resolve(JSON.parse(xhr.responseText));
        },
      });
    });

    xhr.addEventListener('error', () => {
      reject(new Error('Enexpected error'));
    });

    xhr.open(method, url);
    xhr.send(body);
  });
};

export default fetchAdapter;
