
// CAUTION: This file is automatically generated. Do not edit it manually!

import { getBalanceOperation, GetBalanceRequest, GetBalanceResponse, GetBalanceJSONResponse, getNFTsOperation, GetNFTsRequest, GetNFTsResponse, GetNFTsJSONResponse, getPortfolioOperation, GetPortfolioRequest, GetPortfolioResponse, GetPortfolioJSONResponse, getSPLOperation, GetSPLRequest, GetSPLResponse, GetSPLJSONResponse, getNFTMetadataOperation, GetNFTMetadataRequest, GetNFTMetadataResponse, GetNFTMetadataJSONResponse, getTokenPriceOperation, GetTokenPriceRequest, GetTokenPriceResponse, GetTokenPriceJSONResponse } from '@moralisweb3/common-sol-utils';
import { OperationResolver } from '@moralisweb3/api-utils';
import { ApiModule, ResponseAdapter } from '@moralisweb3/common-core';

export abstract class ClientSolApi extends ApiModule {

  
  public readonly account = {
   getBalance: (request: GetBalanceRequest): Promise<ResponseAdapter<GetBalanceResponse, GetBalanceJSONResponse>> => {
      return new OperationResolver(getBalanceOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTs: (request: GetNFTsRequest): Promise<ResponseAdapter<GetNFTsResponse, GetNFTsJSONResponse>> => {
      return new OperationResolver(getNFTsOperation, this.baseUrl, this.core).fetch(request);
    },
   getPortfolio: (request: GetPortfolioRequest): Promise<ResponseAdapter<GetPortfolioResponse, GetPortfolioJSONResponse>> => {
      return new OperationResolver(getPortfolioOperation, this.baseUrl, this.core).fetch(request);
    },
   getSPL: (request: GetSPLRequest): Promise<ResponseAdapter<GetSPLResponse, GetSPLJSONResponse>> => {
      return new OperationResolver(getSPLOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly nft = {
   getNFTMetadata: (request: GetNFTMetadataRequest): Promise<ResponseAdapter<GetNFTMetadataResponse, GetNFTMetadataJSONResponse>> => {
      return new OperationResolver(getNFTMetadataOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly token = {
   getTokenPrice: (request: GetTokenPriceRequest): Promise<ResponseAdapter<GetTokenPriceResponse, GetTokenPriceJSONResponse>> => {
      return new OperationResolver(getTokenPriceOperation, this.baseUrl, this.core).fetch(request);
    },

  };

}
