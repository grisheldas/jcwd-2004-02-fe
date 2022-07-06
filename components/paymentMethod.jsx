import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, 
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, 
    Box
  } from '@chakra-ui/react'  
  import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react' 
import {IoIosArrowForward} from "react-icons/io" 
import {GoPrimitiveDot} from "react-icons/go"

  const PaymentMethod = () => {

    const { isOpen, onOpen, onClose } = useDisclosure() 
    
    const [tab, setTab] = useState(0)

    return ( 
        <>
        <Button w="300px" fontSize="md" h="50px" onClick={onOpen}>Pilih Metode Pembayaran</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w="500px" minH="500px">
            <ModalHeader textAlign="center">Metode Pembayaran
                <div className='w-[400px] h-[70px] mt-5 rounded-lg shadow-md flex items-start justify-between p-2'>
                    <div className='flex flex-col'>
                        <span className='text-sm'>Total Harga</span> 
                        <span className='text-lg font-bold'>Rp22.000</span>
                    </div>
                    <div>
                        <span className='text-xs'>lihat Detail</span>
                    </div>
                </div>
            </ModalHeader>
            <ModalCloseButton /> 
            {tab === 0 ? (
            <ModalBody>
                <div className=' w-[400px] h-[310px]'> 
                    <img src={'/Line18.png'} className="w-full"/>
                    <div className='w-[400px] h-[30px]  flex'>
                        <div className='w-[80px] h-[15px]'> 
                            <img src={'/bca.png'}/>
                        </div> 
                        <span className='mt-1 ml-3 text-sm'>ATM BCA Transfer</span> 
                        <IoIosArrowForward className='mt-2 ml-40'/>
                    </div>
                    <img src={'/Line18.png'} className="w-full"/>
                    <div className='w-[400px] h-[30px] flex '>
                        <div className='w-[80px] h-[15px]'> 
                            <img src={'/mandiri.png'} className="" />
                        </div> 
                        <span className='mt-1 ml-3 text-sm'>ATM Mandiri Transfer</span> 
                        <IoIosArrowForward className='mt-2 ml-[137px]'/>
                    </div>
                    <img src={'/Line18.png'} className="w-full"/>
                    <div className='w-[400px] h-[30px] flex '>
                        <div className='w-[80px] h-[15px]'> 
                            <img src={'/permata.png'} className="flex items-center mb-2" />
                        </div> 
                        <span className='mt-1 ml-3 text-sm'>ATM Permata Transfer</span> 
                        <IoIosArrowForward className='mt-2 ml-[135px]'/>
                    </div>
                    <img src={'/Line18.png'} className="w-full"/>
                    <div className='w-[400px] h-[30px] flex '>
                        <div className='w-[80px] h-[15px] flex items-center mt-2'> 
                            <img src={'/gopay.png'} />
                        </div> 
                        <span className='mt-1 ml-3 text-sm'>GoPay</span> 
                        <IoIosArrowForward className='mt-2 ml-[230px]'/>
                    </div>
                    <img src={'/Line18.png'} className="w-full"/>
                    <div className='w-[400px] h-[30px] flex '>
                        <div className='w-[80px] h-[15px]'> 
                            <img src={'/bca.png'} className="" />
                        </div> 
                        <span className='mt-1 ml-3 text-sm'>OVO</span> 
                        <IoIosArrowForward className='mt-2 ml-[242px]'/>
                    </div>
                    <img src={'/Line18.png'} className="w-full"/>
                </div>
            </ModalBody> 
            ):null}
            {tab === 1 ? (
                <ModalBody>
                <div className=' w-[400px] h-[270px] bg-slate-200 rounded-lg mb-5'> 
                    <div className='flex justify-between p-2'>
                        <span className='mt-1'>ATM BCA Transfer</span>
                        <div className='w-[80px] h-[15px]'>
                            <img src={'/bca.png'}/>
                        </div>
                    </div> 
                    <div>
                        <span>Cara Pembayaran</span> 
                        <div className='flex items-center bg-red-200'>
                            <GoPrimitiveDot/>
                            <span className='text-sm ml-2'>memasukan sejumlah 6 digit PIN ATM</span> 
                        </div>
                        <div className='flex items-center'>
                            <GoPrimitiveDot/>
                            <span className='text-sm ml-2'>Lalu pilih menu 'transaksi lainnya'</span> 
                        </div>
                        <div className='flex '>
                            <GoPrimitiveDot/>
                            <span className='text-sm ml-2'>Kemudian pilih menu 'transfer' dan tekan opsi 'ke rek bank lain'</span> 
                        </div>
                        <div className='flex'>
                            <GoPrimitiveDot className='ml-[6px] mt-1'/>
                            <span className='text-sm ml-2'>masukkan kode bank rekening tujuan diikuti dengan nomor rekening tujuan</span> 
                        </div>
                        <div className='flex'>
                            <GoPrimitiveDot className='ml-2'/>
                            <span className='text-sm ml-2'>Selanjutnya konfirmasi nama, rekening, dan jumlah 
                            yang ditransfer, klik OK atau YA jika informasi sudah betul</span>
                        </div>
                    </div>
                </div>
                </ModalBody>
            ):null}

            <ModalFooter>
                <Button colorScheme='blue' w='400px' h='50px' onClick={onClose}>
                Pilih Metode
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
  
    )
  } 

export default PaymentMethod