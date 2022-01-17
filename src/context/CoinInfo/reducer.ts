export const GET_ASSET = Symbol("Get one asset info");
export const GET_TOP_ASSETS = Symbol("Get crypto assets");
export const STREAM_TRADE_INFO = Symbol("Stream trade info of a single asset");

export function coinInfoReducer(state: any, action: any) {
  switch (action.type) {
    case GET_TOP_ASSETS:
      return {
        ...state,
        assets: action.payload,
        loading: false
      };
    case GET_ASSET:
      return {
        ...state,
        asset: action.payload,
        loading: false
      };
    case STREAM_TRADE_INFO:
      return {
        ...state,
        streamedInfo: action.payload,
        loading: false
      };
    default:
      throw new Error();
  }
}
