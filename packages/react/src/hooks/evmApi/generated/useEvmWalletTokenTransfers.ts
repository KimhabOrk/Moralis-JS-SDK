import Moralis from 'moralis';
import { GetWalletTokenTransfersRequest, GetWalletTokenTransfersResponse, getWalletTokenTransfersOperation } from 'moralis/common-evm-utils';
import { useMemo } from 'react';
import { UseMoralisQueryParams } from '../../types';
import { usePaginatedOperationResolver, useQuery } from '../../utils';
import { validateParams } from '../../../utils/validateParams';

export type UseEvmWalletTokenTransfersParams = UseMoralisQueryParams<GetWalletTokenTransfersResponse, Partial<GetWalletTokenTransfersRequest>>

export function useEvmWalletTokenTransfers({ address, chain, fromBlock, toBlock, fromDate, toDate, limit, cursor, disableTotal, ...queryParams }: UseEvmWalletTokenTransfersParams = {}) {
  const resolver = usePaginatedOperationResolver(getWalletTokenTransfersOperation, Moralis.EvmApi.baseUrl);

  const hasRequiredParams = useMemo(() => {
    return Boolean(address);
  }, [address]);

  const queryKey: [string, Partial<GetWalletTokenTransfersRequest>] = useMemo(() => {
    return [
      getWalletTokenTransfersOperation.id,
      {
        address, chain, fromBlock, toBlock, fromDate, toDate, limit, cursor, disableTotal
      },
    ];
  }, [address, chain, fromBlock, toBlock, fromDate, toDate, limit, cursor, disableTotal]);

  return useQuery({
    ...queryParams,
    queryKey,
    queryFn: async ({ queryKey: [_id, request] }) => {
      const params = validateParams(request, ['address']);
      const response = await resolver.fetch(params);
      return response.result;
    },
    enabled: hasRequiredParams && queryParams.enabled,
  });
}