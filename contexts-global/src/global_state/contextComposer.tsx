import React from 'react';
import ShoppingCartProvider from './context_providers/ShoppingCartProvider';

interface ProviderComposerProps{
  contexts: any[]; 
  children: any
}
const ProviderComposer = ({ contexts, children }: ProviderComposerProps) => {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );
};

function ContextProvider({ children }:{children:any}) {
  return (
    <ProviderComposer
      contexts={[<ShoppingCartProvider />]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
