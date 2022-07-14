import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { API_URL } from "../helpers";

function UserDetailTransactionCard({ data, show, setShow }) {
  const {
    status,
    prescription_number,
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

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      {status == "menunggu konfirmasi" ? (
        <div className="mx-[210px] text-primary">
          <div className="mb-[40px] font-bold text-2xl">
            Menunggu Konfirmasi
          </div>
          <div className="px-[40px] py-[28px] w-full border-[1px] border-slate-50 shadow-md rounded-lg">
            <div className="font-bold text-xl">Detail Resep</div>
            <div className="mt-[12px] mb-[34px] w-full border-b-2" />
            <div className="lg:flex lg:justify-between">
              <div className="flex">
                <div className="w-[146px] h-[146px] rounded-lg bg-slate-200">
                  <Image
                    src={`${API_URL}/${pr_image}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="ml-[41.5px]">
                  <div className="text-slate-500 text-sm">Nomor Resep</div>
                  <div className="font-semibold text-sm">
                    {prescription_number}
                  </div>
                  <div className="text-slate-500 text-sm mt-[20px]">
                    Tanggal Pengajuan
                  </div>
                  <div className=" text-sm">
                    {new Date(created_at).toUTCString()}
                  </div>
                  <div className="text-secondary text-sm font-medium mt-[20px]">
                    Perbesar Gambar
                  </div>
                </div>
              </div>
              <div className="text-right lg:mt-[24px]">
                <div className="text-slate-500 text-[12px] w-[177px]">
                  Mohon menunggu balasan dari apoteker selama 5 menit
                </div>
                <div className="flex mt-[14px] justify-end">
                  <div className="w-[31px] h-[32px] text-white bg-red-400 font-semibold rounded-lg text-center py-[3px]">
                    24
                  </div>
                  <div className="text-xl font-bold text-red-400 mx-[11.6px]">
                    :
                  </div>
                  <div className="w-[31px] h-[32px] text-white bg-red-400 font-semibold rounded-lg text-center py-[3px]">
                    45
                  </div>
                  <div className="text-xl font-bold text-red-400 mx-[11.6px]">
                    :
                  </div>
                  <div className="w-[31px] h-[32px] text-white bg-red-400 font-semibold rounded-lg text-center py-[3px]">
                    45
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[39px] mb-[24px] w-full border-b-2" />
            <div className="mt-[24px] flex text-sm font-semibold justify-end">
              <div className="pr-[16px] border-r-2">Batalkan Pengajuan</div>
              <div className="flex ml-[16px] items-center">
                <BsFillChatDotsFill className="mr-[16px] text-xl" />
                Chat Customer Service
              </div>
            </div>
          </div>
          <div className="mt-[56px] grid grid-cols-2 text-center font-semibold gap-4">
            <div className="col-span-1 py-[16px] border-2 rounded-lg text-secondary border-secondary hover:bg-hover-button">
              Kembali ke Beranda
            </div>
            <div className="col-span-1 py-[16px] rounded-lg text-white bg-secondary">
              Cek Transaksi Lainnya
            </div>
          </div>
        </div>
      ) : null}

      {status == "diproses" ? (
        <div className="mx-[210px] text-primary">
          <div className="mb-[40px] font-bold text-2xl">Diproses</div>
          <div className="px-[40px] py-[28px] w-full border-[1px] border-slate-100 shadow-lg rounded-xl">
            <div className="font-bold text-xl">Ringkasan Order</div>
            <div className="mt-[12px] w-full border-b-2" />
            <div className="flex justify-between">
              <div className="flex py-[12px] ">
                <div className="w-[123.63px] h-[115.34px] bg-slate-200 rounded-lg overflow-hidden relative">
                  <Image
                    src={`${API_URL}/${products[0].image}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className=" ml-[50px]">
                  <div className="text-sm font-medium">
                    <p className="text-base">{products[0].name}</p>
                    <p className=" mt-[2px]">
                      {products[0].quantity} {products[0].unit}
                    </p>
                    {products.length > 1 ? (
                      <div
                        className="mt-[49px] text-secondary cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
                        Tampilkan Detail
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex font-bold text-right mt-[12px]">
                {rupiah(products[0].price)}
              </div>
            </div>
            {show
              ? products.map((val, id) => {
                  return (
                    <div key={id}>
                      {val.id == 0 ? null : (
                        <div className="flex justify-between">
                          <div className="flex py-[12px] ">
                            <div className="w-[123.63px] h-[115.34px] bg-slate-200 rounded-lg overflow-hidden relative">
                              <Image
                                src={`${API_URL}/${val.image}`}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div className=" ml-[50px]">
                              <div className="text-sm font-medium">
                                <p className="text-base">{val.name}</p>
                                <p className=" mt-[2px]">
                                  {val.quantity} {val.unit}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex font-bold text-right mt-[12px]">
                            {rupiah(val.price)}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              : null}

            <div className="flex justify-between py-[13px] border-t-2 text-lg ml-[170px]">
              <div>Sub Total</div>
              <div className="font-bold">{rupiah(subtotal)}</div>
            </div>
          </div>
          <div className="px-[40px] py-[28px] mt-[40px] w-full border-[1px] border-slate-100 shadow-lg rounded-xl">
            <div className="font-bold text-xl">Penerima</div>
            <div className="mt-[12px] w-full border-b-2" />
            <div className="mt-[10px] flex justify-between text-primary">
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
          <div className="mt-[56px] grid grid-cols-2 text-center font-semibold gap-4">
            <div className="col-span-1 py-[16px] border-2 rounded-lg text-secondary border-secondary hover:bg-hover-button">
              Kembali ke Beranda
            </div>
            <div className="col-span-1 py-[16px] rounded-lg text-white bg-secondary">
              Cek Transaksi Lainnya
            </div>
          </div>
        </div>
      ) : null}

      {status == "dibatalkan" ? (
        <div className="mx-[210px] text-primary">
          <div className="mb-[40px] font-bold text-2xl">Dibatalkan</div>
          <div className="px-[40px] py-[28px] w-full border-[1px] border-slate-100 shadow-lg rounded-xl">
            <div className="font-bold text-xl">Ringkasan Order</div>
            <div className="mt-[12px] w-full border-b-2" />
            <div className="flex justify-between">
              <div className="flex py-[12px] ">
                <div className="w-[123.63px] h-[115.34px] bg-slate-200 rounded-lg overflow-hidden relative">
                  <Image
                    src={`${API_URL}/${products[0].image}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className=" ml-[50px]">
                  <div className="text-sm font-medium">
                    <p className="text-base">{products[0].name}</p>
                    <p className=" mt-[2px]">
                      {products[0].quantity} {products[0].unit}
                    </p>
                    {products.length > 1 ? (
                      <div
                        className="mt-[49px] text-secondary cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
                        Tampilkan Detail
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex font-bold text-right mt-[12px]">
                {rupiah(products[0].price)}
              </div>
            </div>
            {show
              ? products.map((val, id) => {
                  return (
                    <div key={id}>
                      {val.id == 0 ? null : (
                        <div className="flex justify-between">
                          <div className="flex py-[12px] ">
                            <div className="w-[123.63px] h-[115.34px] bg-slate-200 rounded-lg overflow-hidden relative">
                              <Image
                                src={`${API_URL}/${val.image}`}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div className=" ml-[50px]">
                              <div className="text-sm font-medium">
                                <p className="text-base">{val.name}</p>
                                <p className=" mt-[2px]">
                                  {val.quantity} {val.unit}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex font-bold text-right mt-[12px]">
                            {rupiah(val.price)}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              : null}

            <div className="flex justify-between py-[13px] border-t-2 text-lg ml-[170px]">
              <div>Sub Total</div>
              <div className="font-bold">{rupiah(subtotal)}</div>
            </div>
          </div>

          <div className="mt-[56px] grid grid-cols-2 text-center font-semibold gap-4">
            <div className="col-span-1 py-[16px] border-2 rounded-lg text-secondary border-secondary hover:bg-hover-button">
              Kembali ke Beranda
            </div>
            <div className="col-span-1 py-[16px] rounded-lg text-white bg-secondary">
              Cek Transaksi Lainnya
            </div>
          </div>
        </div>
      ) : null}

      {status == "dikirim" ? (
        <div className="mx-[210px] text-primary">
          <div className="mb-[40px] font-bold text-2xl">Dikirim</div>
          <div className="px-[40px] py-[28px] w-full border-[1px] border-slate-100 shadow-lg rounded-xl">
            <div className="font-bold text-xl">Ringkasan Order</div>
            <div className="mt-[12px] w-full border-b-2" />
            <div className="flex justify-between">
              <div className="flex py-[12px] ">
                <div className="w-[123.63px] h-[115.34px] bg-slate-200 rounded-lg overflow-hidden relative">
                  <Image
                    src={`${API_URL}/${products[0].image}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className=" ml-[50px]">
                  <div className="text-sm font-medium">
                    <p className="text-base">{products[0].name}</p>
                    <p className=" mt-[2px]">
                      {products[0].quantity} {products[0].unit}
                    </p>
                    {products.length > 1 ? (
                      <div
                        className="mt-[49px] text-secondary cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
                        Tampilkan Detail
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex font-bold text-right mt-[12px]">
                {rupiah(products[0].price)}
              </div>
            </div>
            {show
              ? products.map((val, id) => {
                  return (
                    <div key={id}>
                      {val.id == 0 ? null : (
                        <div className="flex justify-between">
                          <div className="flex py-[12px] ">
                            <div className="w-[123.63px] h-[115.34px] bg-slate-200 rounded-lg overflow-hidden relative">
                              <Image
                                src={`${API_URL}/${val.image}`}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div className=" ml-[50px]">
                              <div className="text-sm font-medium">
                                <p className="text-base">{val.name}</p>
                                <p className=" mt-[2px]">
                                  {val.quantity} {val.unit}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex font-bold text-right mt-[12px]">
                            {rupiah(val.price)}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              : null}

            <div className="flex justify-between py-[13px] border-t-2 text-lg ml-[170px]">
              <div>Sub Total</div>
              <div className="font-bold">{rupiah(subtotal)}</div>
            </div>
          </div>
          <div className="px-[40px] py-[28px] mt-[40px] w-full border-[1px] border-slate-100 shadow-lg rounded-xl">
            <div className="font-bold text-xl">Penerima</div>
            <div className="mt-[12px] w-full border-b-2" />
            <div className="mt-[10px] flex justify-between text-primary">
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
          <div className="mt-[56px] grid grid-cols-2 text-center font-semibold gap-4">
            <div className="col-span-1 py-[16px] border-2 rounded-lg text-secondary border-secondary hover:bg-hover-button">
              Kembali ke Beranda
            </div>
            <div className="col-span-1 py-[16px] rounded-lg text-white bg-secondary">
              Cek Transaksi Lainnya
            </div>
          </div>
        </div>
      ) : null}

      {status == "selesai" ? (
        <div className="mx-[210px] text-primary">
          <div className="mb-[40px] font-bold text-2xl">Selesai</div>
          <div className="px-[40px] py-[28px] w-full border-[1px] border-slate-100 shadow-lg rounded-xl">
            <div className="font-bold text-xl">Ringkasan Order</div>
            <div className="mt-[12px] w-full border-b-2" />
            <div className="flex justify-between">
              <div className="flex py-[12px] ">
                <div className="w-[123.63px] h-[115.34px] bg-slate-200 rounded-lg overflow-hidden relative">
                  <Image
                    src={`${API_URL}/${products[0].image}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className=" ml-[50px]">
                  <div className="text-sm font-medium">
                    <p className="text-base">{products[0].name}</p>
                    <p className=" mt-[2px]">
                      {products[0].quantity} {products[0].unit}
                    </p>
                    {products.length > 1 ? (
                      <div
                        className="mt-[49px] text-secondary cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
                        Tampilkan Detail
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex font-bold text-right mt-[12px]">
                {rupiah(products[0].price)}
              </div>
            </div>
            {show
              ? products.map((val, id) => {
                  return (
                    <div key={id}>
                      {val.id == 0 ? null : (
                        <div className="flex justify-between">
                          <div className="flex py-[12px] ">
                            <div className="w-[123.63px] h-[115.34px] bg-slate-200 rounded-lg overflow-hidden relative">
                              <Image
                                src={`${API_URL}/${val.image}`}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            <div className=" ml-[50px]">
                              <div className="text-sm font-medium">
                                <p className="text-base">{val.name}</p>
                                <p className=" mt-[2px]">
                                  {val.quantity} {val.unit}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex font-bold text-right mt-[12px]">
                            {rupiah(val.price)}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              : null}

            <div className="flex justify-between py-[13px] border-t-2 text-lg ml-[170px]">
              <div>Sub Total</div>
              <div className="font-bold">{rupiah(subtotal)}</div>
            </div>
          </div>

          <div className="mt-[56px] grid grid-cols-2 text-center font-semibold gap-4">
            <div className="col-span-1 py-[16px] border-2 rounded-lg text-secondary border-secondary hover:bg-hover-button">
              Kembali ke Beranda
            </div>
            <div className="col-span-1 py-[16px] rounded-lg text-white bg-secondary">
              Cek Transaksi Lainnya
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default UserDetailTransactionCard;
