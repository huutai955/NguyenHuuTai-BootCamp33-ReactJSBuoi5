import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    // const  {maSP, tenSP, giaBan, hinhAnh}  = this.props.detail;
    // const  {soLuong}  = this.props.detail;
    // let thanhTien = this.props.detail.detail.giaBan * this.props.detail.soLuong;
    let renderGioHang = (arr) => {
      return arr.map((product, index) => {
        return <tr key={index}>
          <td>{product.maSP}</td>
          <td>
            <img src={product.hinhAnh} alt="" width={50} height={50} />
          </td>
          <td>{product.tenSP}</td>
          <td className="d-flex align-items-center">
            <button className='btn btn-primary' onClick={() => {
              return this.props.increaseAmount(product);

            }}>+</button>
            <span className='me-2 ms-2'>{product.soLuong}</span>
            <button className='btn btn-primary' onClick={() => {
              return this.props.reduceAmount(product);
            }}>-</button>
          </td>
          <td>{product.giaBan}</td>
          <td>{product.soLuong * product.giaBan}</td>
          <td>
            <button className='btn btn-danger' onClick={() => {
              return this.props.deleteProduct(product)
            }}>Xóa</button>
          </td>
        </tr>
      })
    }
    return (
      <div className="container">
        <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">Giỏ Hàng</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Mã Sản Phẩm</th>
                      <th>Hình Ảnh</th>
                      <th>Tên Sản Phẩm</th>
                      <th>Số Lượng</th>
                      <th>Đơn Giá</th>
                      <th>Thành Tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderGioHang(this.props.detail)}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
