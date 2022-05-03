interface IFetchAdapterOptions {
  method: string,
  headers: {
    [index: string]: string
  },
  body: string
}

interface IFetchAdapterResponse {
  ok: boolean,
  status: string,
  text(): Promise<string>,
  json(): Promise<string>,
}

interface IFetchAdapter {
  (url: string, options: IFetchAdapterOptions): Promise<IFetchAdapterResponse>
}
