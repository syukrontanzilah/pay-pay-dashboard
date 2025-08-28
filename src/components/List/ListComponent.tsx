import React from "react";

export interface IProdukData {
  harga: string;
  tujuan: string;
  produk_id: string;
  name: string;
  total: number;
}

export interface IShowData {
  produk_id: string;
  tujuan: string;
  harga: string;
}

export interface IUserData {
  user_id: number;
  name: string;
  email?: string;
  total: number;
}

const ListComponent = ({
  transaksi,
  produk,
  user,
}: {
  transaksi?: IShowData;
  produk?: IProdukData;
  user?: IUserData;
}) => {
  return (
    <div className="flex justify-between items-center border-b border-dashed border-gray-200 py-2">
      {transaksi && (
        <>
          <div>
            <div className="font-bold text-xs text-[#364a63]">
              {transaksi.produk_id}
            </div>
            {/* <div className="text-xs text-[#8094ae]">
              Tujuan: {transaksi.tujuan}
            </div> */}
          </div>
          <div className="text-xs text-[#8094ae]">Harga: {transaksi.harga}</div>
        </>
      )}
      {produk && (
        <>
          <div>
            <div className="font-bold text-xs text-[#364a63]">
              {produk.produk_id}-{produk.name}
            </div>
            <div className="text-xs text-[#8094ae]">Harga: {produk.harga}</div>
          </div>
          <div className="text-xs text-[#8094ae]">
            Total sales: {produk.total}
          </div>
        </>
      )}
      {user && (
        <>
          <div>
            <div className="font-bold text-xs text-[#364a63]">{user.name}</div>
            <div className="text-xs text-[#8094ae]">Email: {user.email}</div>
          </div>
          <div className="text-xs text-[#8094ae]">Order: {user.total}</div>
        </>
      )}
    </div>
  );
};

export default ListComponent;
