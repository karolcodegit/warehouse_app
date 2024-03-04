import QRCode from 'qrcode.react';
import React from 'react'
import Barcode from 'react-barcode';

const Label = ({
  inputText,
  showText,
  codeType,
}) => {
    return (
      <div id="label" className='flex flex-col'>
        {codeType === 'QR' ? (
          <QRCode value={inputText} />
        ) : (
          <Barcode value={inputText} displayValue={false} format="CODE128" />
        )
      }
        <div className='py-3'>
            {showText && (
              <p className="text-center text-sm font-bold">{inputText}</p>
            
            )
            }
        </div>
        
      </div>
    );
  };

export default Label