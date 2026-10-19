import { ImageResponse } from 'next/og';

export const alt = 'Royal Blades barbershop in Sialkot';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '76px 82px',
        color: '#FFFFFF',
        background: 'radial-gradient(circle at 82% 28%, #303C1B 0%, #161A13 34%, #0A0A0A 72%)',
        fontFamily: 'Arial, sans-serif',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '720px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#D4FF00', fontSize: '22px', letterSpacing: '5px' }}>
            <span style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', background: '#D4FF00', color: '#0A0A0A', fontSize: '22px', letterSpacing: '0' }}>R</span>
            ROYAL BLADES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '42px', fontSize: '74px', lineHeight: 1.02, fontWeight: 700, letterSpacing: '-4px' }}><span>A sharper cut.</span><span>A stronger you.</span></div>
          <div style={{ marginTop: '25px', color: '#B7B8AC', fontSize: '24px' }}>Modern barbering in Toheed Town, Sialkot.</div>
        </div>
        <div style={{ width: '260px', height: '390px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '140px 140px 22px 22px', border: '1px solid #D4FF0060', background: 'linear-gradient(160deg,#343A2C,#121612)' }}>
          <div style={{ width: '146px', height: '202px', display: 'flex', borderRadius: '70px 70px 58px 58px', background: 'linear-gradient(140deg,#E1B995,#A87555)', boxShadow: '0 -25px 0 -4px #121612' }} />
        </div>
      </div>
    ),
    size,
  );
}
