import './qrCode.scss';
import html2canvas from 'html2canvas';
import { QRCodeCanvas } from 'qrcode.react';
import React, { useState } from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const QrCode = ({ studentInfo }) => {
  const [qr, setqr] = useState('');

  console.log(document.getElementById('canvas'));
  const QrCodeDownload = async () => {
    const canvas = await (
      await html2canvas(document.getElementById('canvas'))
    ).toDataURL();

    if (canvas) {
      setqr(canvas);
      const a = document.createElement('a');
      a.download = 'QrCode.png';
      a.href = canvas;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const QrCodeCopy = () => {
    navigator.clipboard.writeText(qr);
  };
  return (
    <div className="qrCode">
      <div className="leftT">
        <QRCodeCanvas
          id="canvas"
          value={studentInfo}
          size={200}
          bgColor={'#ffffff'}
          fgColor={'#0a75ad'}
          level={'M'}
        />
      </div>
      <div className="rightT">
        <button onClick={() => QrCodeDownload()}>
          <GetAppIcon />
          Download
        </button>

        <button onClick={() => QrCodeCopy()}>
          <ContentCopyIcon />
          Copy
        </button>
      </div>
    </div>
  );
};

export default QrCode;
