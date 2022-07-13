import React from "react";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  FormControl,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";

import { API_URL } from "../../helpers";
import { flushSync } from "react-dom";
import AdminDeleteProduct from "./AdminDeleteProduct";
import { DateConverter } from "../../helpers";

function AdminEditStockTable({
  submitProduct,
  isOpen,
  onClose,
  isOpen2,
  onClose2,
  isOpen3,
  onOpen3,
  onClose3,
  inputStock,
  clickEditStockDetail,
  inputStockDet,
  setinputStockDet,
  incNum,
  decNum,
  incNumAdd,
  decNumAdd,
  inputStockAdd,
  setinputStockAdd,
  submitProductEditStock,
  submitProductAddStock,
  clickAddStock,
  clickDeleteStock,
}) {
  const [tab, setTab] = useState(0);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // handle change edit
  const handleChange = (e, prop) => {
    setinputStockDet({ ...inputStockDet, [prop]: e.target.value });
    console.log(inputStockDet, "input edit");
  };

  // handle change add
  const handleChangeAdd = (e, prop) => {
    setinputStockAdd({ ...inputStockAdd, [prop]: e.target.value });
    console.log(inputStockAdd, "input add");
  };

  // submit form edit stock
  const onSaveDataClick = async (e) => {
    e.preventDefault();

    let editStock = {
      expired: DateConverter(inputStockDet.expired),
      stock: inputStockDet.stock,
    };
    console.log("mau dikirim", editStock);
    try {
      await submitProductEditStock(editStock);
    } catch (error) {
      console.log(error);
    } finally {
      flushSync(() => {
        setTab(5);
      });
      setTimeout(() => {
        setTab(0);
        onClose2();
      }, 800);
    }
  };

  // submit form add stock
  const onSaveDataClickAdd = async (e) => {
    e.preventDefault();

    let addStock = {
      expired: DateConverter(inputStockAdd.expired),
      stock: inputStockAdd.stock,
    };
    console.log("mau dikirim", addStock);
    try {
      await submitProductAddStock(addStock);
    } catch (error) {
      console.log(error);
    } finally {
      flushSync(() => {
        setTab(5);
      });
      setTimeout(() => {
        setTab(0);
        onClose2();
      }, 800);
    }
  };

  // Modal edit stock

  const ModalEditStock = () => {
    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen2}
          onClose={onClose2}
        >
          <ModalOverlay />
          <ModalContent maxW="1000px" maxH="900px" pl={8} pt={4}>
            <ModalHeader>Edit Stok</ModalHeader>
            <ModalCloseButton />

            {/* first tab */}
            {tab === 0 ? (
              <div>
                <ModalBody pb={6}>
                  <FormControl mt={"1.5"} className="flex">
                    <FormLabel pt={2} fontSize="sm" w="175px">
                      Kuantitas
                    </FormLabel>
                    <Stack spacing={3}>
                      <div className="flex mr-2">
                        <button
                          className="text-purple-600 mr-3"
                          onClick={decNum}
                        >
                          -
                        </button>
                        <div>
                          <input
                            className="w-7 text-sm"
                            type="number"
                            onChange={(e) => handleChange(e, "stock")}
                            value={inputStockDet?.stock}
                          />
                        </div>

                        <button className="text-purple-600 " onClick={incNum}>
                          +
                        </button>
                      </div>
                    </Stack>
                  </FormControl>
                  <FormControl mt={"3"} className="flex">
                    <FormLabel pt={2} fontSize="md" w="175px">
                      Tgl. Kadaluwarsa
                    </FormLabel>
                    <Stack spacing={3}>
                      <div>
                        <input
                          style={{
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                          }}
                          className="h-[40px] px-3 text-gray-400"
                          type="date"
                          onChange={(e) => handleChange(e, "expired")}
                          value={DateConverter(inputStockDet?.expired)}
                        />
                      </div>
                    </Stack>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="purple" mr={3} onClick={onSaveDataClick}>
                    Simpan
                  </Button>
                </ModalFooter>
              </div>
            ) : null}

            {/* success tab */}
            {tab === 5 ? (
              <div>
                <ModalBody
                  className="flex items-center justify-center"
                  h="600px"
                >
                  <div className="flex items-center justify-center">
                    <img src={"/addProductSuccess.svg"} />
                  </div>
                </ModalBody>
              </div>
            ) : null}
          </ModalContent>
        </Modal>
      </>
    );
  };
  // Modal add stock
  const ModalAddStock = () => {
    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen3}
          onClose={onClose3}
        >
          <ModalOverlay />
          <ModalContent maxW="1000px" maxH="900px" pl={8} pt={4}>
            <ModalHeader>Tambah Stok</ModalHeader>
            <ModalCloseButton />

            {/* first tab */}
            {tab === 0 ? (
              <div>
                <ModalBody pb={6}>
                  <FormControl mt={"1.5"} className="flex">
                    <FormLabel pt={2} fontSize="sm" w="175px">
                      Kuantitas
                    </FormLabel>
                    <Stack spacing={3}>
                      <div className="flex mr-2">
                        <button
                          className="text-purple-600 mr-3"
                          onClick={decNumAdd}
                        >
                          -
                        </button>
                        <div>
                          <input
                            className="w-7 text-sm"
                            type="number"
                            onChange={(e) => handleChangeAdd(e, "stock")}
                            value={inputStockAdd?.stock}
                          />
                        </div>

                        <button
                          className="text-purple-600 "
                          onClick={incNumAdd}
                        >
                          +
                        </button>
                      </div>
                    </Stack>
                  </FormControl>
                  <FormControl mt={"3"} className="flex">
                    <FormLabel pt={2} fontSize="md" w="175px">
                      Tgl. Kadaluwarsa
                    </FormLabel>
                    <Stack spacing={3}>
                      <div>
                        <input
                          style={{
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                          }}
                          className="h-[40px] px-3 text-gray-400"
                          type="date"
                          onChange={(e) => handleChangeAdd(e, "expired")}
                          value={DateConverter(inputStockAdd?.expired)}
                        />
                      </div>
                    </Stack>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="purple"
                    mr={3}
                    onClick={onSaveDataClickAdd}
                  >
                    Simpan
                  </Button>
                </ModalFooter>
              </div>
            ) : null}

            {/* success tab */}
            {tab === 5 ? (
              <div>
                <ModalBody
                  className="flex items-center justify-center"
                  h="600px"
                >
                  <div className="flex items-center justify-center">
                    <div>sukses</div>
                  </div>
                </ModalBody>
              </div>
            ) : null}
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <>
      {ModalEditStock()}
      {ModalAddStock()}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent maxW="1000px" maxH="900px" pl={8} pt={4}>
          <ModalHeader>Edit Stok</ModalHeader>
          <ModalCloseButton />

          {/* first tab */}
          {tab === 0 ? (
            <div>
              <ModalBody pb={6}>
                <TableContainer>
                  <Table variant="striped" colorScheme="purple">
                    <Thead>
                      <Tr>
                        <Th>No.</Th>
                        <Th>Expired at</Th>
                        <Th>Stock</Th>
                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {inputStock?.map((input) => (
                        <Tr key={input.id}>
                          <Td>{input.id}</Td>
                          <Td>
                            {new Date(input.expired).toLocaleDateString(
                              "id-ID",
                              {
                                month: "2-digit",
                                day: "2-digit",
                                year: "numeric",
                              }
                            )}
                          </Td>
                          <Td>{input.stock}</Td>
                          <Td>
                            <Button
                              colorScheme="purple"
                              onClick={() => {
                                clickEditStockDetail(input);
                              }}
                              className="mr-3"
                            >
                              Edit
                            </Button>
                            <Button
                              colorScheme="purple"
                              onClick={() => {
                                clickDeleteStock(input);
                              }}
                              className="mr-3"
                            >
                              Hapus
                            </Button>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                    <Button
                      colorScheme="purple"
                      onClick={() => {
                        clickAddStock();
                      }}
                      className=" mt-5"
                    >
                      Tambah Stok
                    </Button>
                    <Tfoot className="bg-red-300 pt-3"></Tfoot>
                  </Table>
                </TableContainer>
              </ModalBody>
            </div>
          ) : null}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdminEditStockTable;
