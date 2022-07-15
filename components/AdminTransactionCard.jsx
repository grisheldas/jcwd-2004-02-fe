import { FiDownload } from "react-icons/fi";
import { HiSearch, HiDotsVertical } from "react-icons/hi";
import { IoDocumentText } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import { API_URL } from "../helpers";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import dayjs from "dayjs";

function AdminTransactionCard({ data }) {
  const {
    status,
    prescription_number,
    transaction_number,
    pr_image,
    updated_at,
    products,
    subtotal,
    expired_at,
    created_at,
    recipient,
    address,
    courier,
  } = data;

  const [show, setShow] = useState(false);
  const {
    isOpen: isOpenAccept,
    onOpen: onOpenAccept,
    onClose: onCloseAccept,
  } = useDisclosure();

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <>
      {status == "menunggu pembayaran" ? null : (
        <>
          {!prescription_number ? (
            <div className="bg-white mt-[32px] rounded-lg">
              <div className="py-[16px] px-[26px] border-l-4 rounded-t-lg border-b-2 items-center">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div>
                      <Checkbox
                        borderColor={"gray.300"}
                        colorScheme="purple"
                        // isChecked={checkedItems[0]}
                        // onChange={(e) =>
                        //   setCheckedItems([e.target.checked, checkedItems[1]])
                        // }
                      >
                        {status == "menunggu konfirmasi" ? (
                          <p className="text-primary font-bold">Pesanan Baru</p>
                        ) : null}
                        {status == "diproses" ? (
                          <p className="text-primary font-bold">Siap Dikirim</p>
                        ) : null}
                        {status == "dikirim" ? (
                          <p className="text-primary font-bold">
                            Dalam Pengiriman
                          </p>
                        ) : null}
                        {status == "selesai" ? (
                          <p className="text-primary font-bold">Selesai</p>
                        ) : null}
                        {status == "dibatalkan" ? (
                          <p className="text-primary font-bold">Dibatalkan</p>
                        ) : null}
                      </Checkbox>
                    </div>
                    <div className="pl-[4px] font-bold text-primary">
                      <span className="text-slate-300 font-normal">/</span>
                      {transaction_number}
                    </div>
                    <div className="pl-[4px] text-slate-500 flex items-center">
                      <span className="text-slate-300">/</span>
                      <AiOutlineClockCircle className="ml-[6px] mr-[2px]" />{" "}
                      {dayjs(created_at).format("DD MMMM YYYY hh:mm A")}
                    </div>
                  </div>
                  {status == "dikirim" ||
                  status == "dibatalkan" ||
                  status == "selesai" ? null : (
                    <div className="flex items-center">
                      <div className="font-bold text-primary mr-[8px]">
                        Respon Sebelum
                      </div>
                      <div
                        className="w-[164px] h-[28px] rounded-md border-2 border-orange-300 
              text-orange-300 bg-warning text-xs flex items-center px-[10px] font-medium"
                      >
                        <AiOutlineClockCircle className="ml-[2px] mr-[1px]" />
                        {dayjs(updated_at)
                          .add(2, "day")
                          .format("DD MMMM YYYY hh:mm A")}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="py-[19px] px-[32px]">
                <div className="flex">
                  <div className=" border-r-2">
                    <div className="flex">
                      <div className="w-[75px] h-[75px] rounded-lg border-2 mr-[24px] overflow-hidden relative">
                        <Image
                          src={`${API_URL}/${products[0].image}`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="w-[216px] text-sm">
                        <div className="truncate pr-[32px] font-bold text-primary">
                          {products[0].name}
                        </div>
                        <div className="text-xs mt-[2px] text-slate-400">
                          {products[0].quantity} x {rupiah(products[0].price)}
                        </div>
                        {products.length > 1 ? (
                          <div
                            className="text-xs text-secondary font-semibold mt-[20px]"
                            onClick={() => setShow(!show)}
                          >
                            Lihat {products.length - 1} Obat Lainnya
                          </div>
                        ) : null}
                      </div>
                    </div>
                    {show ? (
                      <>
                        {products.map((val, id) => {
                          return (
                            <div key={id}>
                              {id == 0 ? null : (
                                <div className="flex mt-[10px]">
                                  <div className="w-[75px] h-[75px] rounded-lg border-2 mr-[24px] overflow-hidden relative">
                                    <Image
                                      src={`${API_URL}/${products[id].image}`}
                                      layout="fill"
                                      objectFit="cover"
                                    />
                                  </div>
                                  <div className="w-[216px] text-sm">
                                    <div className="truncate pr-[32px] font-bold text-primary">
                                      {products[id].name}
                                    </div>
                                    <div className="text-xs mt-[2px] text-slate-400">
                                      {products[id].quantity} x{" "}
                                      {rupiah(products[id].price)}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </>
                    ) : null}
                  </div>
                  <div className="ml-[32px] flex text-primary">
                    <div className="text-sm mr-[32px] w-[141px]">
                      <div className="font-semibold">Pembeli</div>
                      <div>{recipient}</div>
                    </div>
                    <div className="text-sm mr-[32px] w-[244px]">
                      <div className="font-semibold">Alamat</div>
                      <div>{address}</div>
                    </div>
                    <div className="text-sm mr-[32px]">
                      <div className="font-semibold">Kurir</div>
                      <div>{courier}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-[19px] p-[16px] bg-slate-100 rounded-md flex justify-between">
                  <div className="font-bold text-primary">
                    Total Harga{" "}
                    <span className="text-xs font-normal text-slate-600">
                      ({products.length} Obat)
                    </span>
                  </div>
                  <div className="font-bold text-primary">
                    {rupiah(subtotal)}
                  </div>
                </div>

                <div className="mt-[28px] flex justify-between">
                  <div className="flex text-primary">
                    <div className="flex items-center">
                      <div>
                        <BsFillChatDotsFill className="text-xl" />
                      </div>
                      <div className="ml-[10px] font-medium text-sm">
                        Chat Pembeli
                      </div>
                    </div>
                    <div className="flex items-center ml-[36px]">
                      <div className="h-[22px] w-[20px] overflow-hidden relative">
                        <Image
                          src={"/transaction2.png"}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="ml-[10px] font-medium text-sm">
                        Detail Pesanan
                      </div>
                    </div>
                  </div>
                  <div className="flex text-sm font-medium items-center">
                    {status == "menunggu konfirmasi" ? (
                      <>
                        <div className="mr-[46px] text-primary">
                          Tolak Pesanan
                        </div>
                        <button
                          className="text-white bg-secondary w-[156px] rounded-md h-[32px] py-[5px] px-[25px]"
                          onClick={onOpenAccept}
                        >
                          Terima Pesanan
                        </button>
                      </>
                    ) : null}

                    {status == "diproses" ? (
                      <button
                        disabled
                        className="text-white bg-slate-400 w-[156px] rounded-md h-[32px] "
                      >
                        Minta Penjemputan
                      </button>
                    ) : null}
                    {status == "dikirim" ? (
                      <button
                        disabled
                        className="text-white bg-slate-400 w-[156px] rounded-md h-[32px] py-[5px] px-[25px]"
                      >
                        Lihat Rincian
                      </button>
                    ) : null}
                    {status == "selesai" ? (
                      <button
                        disabled
                        className="text-white bg-slate-400 w-[156px] rounded-md h-[32px] py-[5px] px-[25px]"
                      >
                        Lihat Rincian
                      </button>
                    ) : null}
                    {status == "dibatalkan" ? (
                      <button
                        disabled
                        className="text-white bg-slate-400 w-[156px] rounded-md h-[32px] py-[5px] px-[25px]"
                      >
                        Lihat Rincian
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      )}

      <Modal
        isOpen={isOpenAccept}
        scrollBehavior="inside"
        onClose={onCloseAccept}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="flex justify-center mt-10">
              <div>
                <div className="text-center text-[20px] text-primary">
                  Terima Pesanan
                </div>
                <div className="text-center text-[14px] font-medium text-primary">
                  Stok akan berkurang secara otomatis setelah pesanan diterima.
                </div>
              </div>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="w-full pb-5 flex justify-between items-center">
              <div className="flex text-[14px] gap-2">
                <div className="font-bold">{recipient} / </div>
                <div className=" font-bold pr-2">{transaction_number} /</div>
                <div className="flex items-center gap-2">
                  <span>
                    <AiOutlineClockCircle />
                  </span>
                  {dayjs(created_at).format("DD MMM YYYY, HH:mm WIB")}
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3}>
              Terima Pesanan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdminTransactionCard;
