// src/components/DeployContractInnerUI.js

import React from 'react';
import DeploymentTable from './DeploymentTable';
import stringify from 'safe-stable-stringify';

const DeployContractInnerUI = ({
  data,
  isPending,
  isError,
  error,
  tokenName,
  setTokenName,
  tokenSymbol,
  setTokenSymbol,
  initialSupply,
  setInitialSupply,
  send
}) => {
  return (
    <div className="flex gap-6"> {/* Flex container to hold both sides */}
      {/* Deployment table with input fields on the right */}
      <div className="flex-1"> {/* Takes up remaining space on the right */}
        <DeploymentTable tokenName={tokenName} tokenSymbol={tokenSymbol} send={send}>
          <input
            type="text"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
          />
          <input
            type="text"
            value={tokenSymbol}
            onChange={(e) => setTokenSymbol(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
          />
          <input
            type="number"
            value={initialSupply}
            onChange={(e) => setInitialSupply(parseInt(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />          
        </DeploymentTable>  
      </div>  
    </div>
  );
}

export default DeployContractInnerUI;
