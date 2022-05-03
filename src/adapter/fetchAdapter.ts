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

const fetchAdapter: IFetchAdapter = function () {
  return new Promise((res) => {
    res({
      ok: false,
      status: 404,
      text: () => Promise.resolve(''),
      json: () => Promise.resolve(JSON.stringify({ key: 'value' })),
    });
  });
};

export default fetchAdapter;
