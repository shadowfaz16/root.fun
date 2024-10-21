import React from 'react';

interface TokenInfoIframeProps {
  htmlContent: string;
}

const TokenInfoIframe: React.FC<TokenInfoIframeProps> = ({ htmlContent }) => {
  return (
    <iframe
      srcDoc={htmlContent}
      title="Token Information"
      style={{
        width: '100%',
        height: '500px',
        border: 'none',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
      }}
    />
  );
};

export default TokenInfoIframe;
