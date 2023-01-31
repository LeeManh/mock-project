import {
  AddressWrap,
  IconTruckWrap,
  PriceTransportWrap,
  TransportInforItemWrap,
  TransportInforLeftItemWrap,
  TransportInforLeftWrap
} from './TransportInfor.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as FreeShipIcon } from 'assets/svgs/free-ship.svg'

interface Props {
  type: 'free' | 'charge'
  setOpenModalAddress: React.Dispatch<React.SetStateAction<boolean>>
}

const TransportInfor = ({ type, setOpenModalAddress }: Props) => {
  return (
    <>
      {type === 'free' && (
        <TransportInforItemWrap>
          <IconTruckWrap>
            <FreeShipIcon />
          </IconTruckWrap>

          <TransportInforLeftWrap>
            <TransportInforLeftItemWrap>
              <div>Miễn phí vận chuyển</div>
            </TransportInforLeftItemWrap>
          </TransportInforLeftWrap>
        </TransportInforItemWrap>
      )}

      <TransportInforItemWrap>
        <IconTruckWrap>
          <FontAwesomeIcon icon={faTruckFast} />
        </IconTruckWrap>

        <TransportInforLeftWrap>
          <TransportInforLeftItemWrap>
            <div>Vận Chuyển Tới</div>
            <AddressWrap onClick={() => setOpenModalAddress(true)}>
              <span style={{ marginRight: '5px' }}>Phường Mộ Lao, Quận Hà Đông</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </AddressWrap>
          </TransportInforLeftItemWrap>
          {type === 'charge' && (
            <TransportInforLeftItemWrap>
              <div>Phí vận chuyển</div>
              <PriceTransportWrap>
                <span>₫28.700</span>
              </PriceTransportWrap>
            </TransportInforLeftItemWrap>
          )}
        </TransportInforLeftWrap>
      </TransportInforItemWrap>
    </>
  )
}

export default TransportInfor
