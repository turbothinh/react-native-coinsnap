import React, { useReducer, createContext, FC } from "react";
import axios from "axios";
import {
  coinInfoReducer,
  GET_ASSET,
  GET_TOP_ASSETS,
  STREAM_TRADE_INFO,
} from "./reducer";
import { COIN_CAP_URI, CRYPTO_COMPARE_API_KEY, CRYPTO_COMPARE_WSS } from "../../config";

const defaultValue = {} as any;
export const CoinInfoContext = createContext(defaultValue);

const currency = 'USD';
const streamExchange = 'Coinbase';

/**
 * CryptoCompare docs: https://min-api.cryptocompare.com/documentation
 * CryptoCompare WSS: https://min-api.cryptocompare.com/documentation/websockets
 * Coincap RESTful docs: https://docs.coincap.io/#ee30bea9-bb6b-469d-958a-d3e35d442d7a 
 */
export const CoinInfoContextProvider: FC = ({ children }) => {
  const initialState = {
    asset: {},
    assets: [],
    loading: true,
    streamedInfo: {},
  };

  const [state, dispatch] = useReducer(coinInfoReducer, initialState);

  const getAsset = (symbol: string) => {
    axios(`${COIN_CAP_URI}assets/${symbol}`)
      .then((res) => {
        dispatch({
          type: GET_ASSET,
          payload: res.data.data,
        });
      })
      .catch((err) => console.error(err));
  };

  const getTopAssets = (): void => {
    axios(`${COIN_CAP_URI}assets`)
      .then((res) => {
        dispatch({
          type: GET_TOP_ASSETS,
          payload: res.data.data,
        });
      })
      .catch((err) => console.error(err));
  };

  const streamSinglePrice = (symbol: string) => {
    var ccStreamer = new WebSocket(`${CRYPTO_COMPARE_WSS}?apiKey=${CRYPTO_COMPARE_API_KEY}`);

    ccStreamer.onopen = function onStreamOpen() {
      var subRequest = {
        action: "SubAdd",
        subs: [`0~${streamExchange}~${symbol}~${currency}`],
      };
      ccStreamer.send(JSON.stringify(subRequest));
    };

    ccStreamer.onmessage = function onStreamMessage(message) {
      const data = message.data;
      dispatch({
        type: STREAM_TRADE_INFO,
        payload: data,
      });
    };
  };

  const {
    searchAsset,
    asset,
    assets,
    loading,
    streamedInfo,
  } = state;

  return (
    <CoinInfoContext.Provider
      value={{
        asset,
        assets,
        loading,
        searchAsset,
        streamedInfo,
        getTopAssets,
        getAsset,
        streamSinglePrice,
      }}
    >
      {children}
    </CoinInfoContext.Provider>
  );
};
